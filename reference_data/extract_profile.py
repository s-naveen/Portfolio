import json
import re

def extract_profile_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Look for JSON blobs
    # LinkedIn often puts data in <code> tags or just in the body as JSON
    # The line we saw earlier started with {"data":
    
    # Let's try to find all JSON-like structures that contain "included" and "Naveen"
    # We'll use a regex to find the JSON object
    
    # It seems the JSON is on a single line, so we can iterate lines
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        line = line.strip()
        if line.startswith('{"data":') and '"included":' in line:
            try:
                data = json.loads(line)
                print(f"Found JSON data on line {i+1}")
                process_data(data)
            except json.JSONDecodeError:
                pass
        elif 'included' in line and 'Naveen' in line:
             # Try to find the start of the JSON object
             try:
                 # Sometimes it's inside a <code> tag, we might need to clean it
                 clean_line = re.sub(r'^<code[^>]*>', '', line)
                 clean_line = re.sub(r'</code>$', '', clean_line)
                 # It might be HTML entity encoded
                 import html
                 clean_line = html.unescape(clean_line)
                 data = json.loads(clean_line)
                 print(f"Found JSON data on line {i+1} (cleaned)")
                 process_data(data)
             except:
                 pass

def process_data(data):
    included = data.get('included', [])
    
    profile = {}
    experience = []
    education = []
    skills = []
    projects = []
    
    for item in included:
        type_ = item.get('$type')
        
        if 'MiniProfile' in type_:
            profile['name'] = f"{item.get('firstName', '')} {item.get('lastName', '')}"
            profile['occupation'] = item.get('occupation', '')
            profile['publicIdentifier'] = item.get('publicIdentifier', '')
            if 'picture' in item:
                profile['picture'] = item['picture'].get('rootUrl', '')
        
        elif 'Position' in type_:
            # Experience
            company_name = item.get('companyName')
            if not company_name and 'companyUrn' in item:
                # Resolve company name if possible, or just use what we have
                pass
            
            # Sometimes company name is in a nested object or linked
            # Let's just grab what's available
            role = item.get('title', '')
            description = item.get('description', '')
            date_range = item.get('dateRange', {})
            
            # Try to find company name from other fields if direct one is missing
            # In 'dash' types, it might be different
            
            exp_item = {
                'role': role,
                'company': company_name,
                'description': description,
                'dateRange': date_range,
                'location': item.get('locationName', '')
            }
            experience.append(exp_item)

        elif 'Education' in type_:
            school_name = item.get('schoolName')
            degree = item.get('degreeName')
            field = item.get('fieldOfStudy')
            
            edu_item = {
                'school': school_name,
                'degree': degree,
                'field': field,
                'dateRange': item.get('dateRange', {})
            }
            education.append(edu_item)
            
        elif 'Skill' in type_:
            skills.append(item.get('name'))
            
        elif 'Project' in type_:
            projects.append({
                'title': item.get('title'),
                'description': item.get('description'),
                'url': item.get('url')
            })

    print("--- Profile ---")
    print(json.dumps(profile, indent=2))
    print("\n--- Experience ---")
    print(json.dumps(experience, indent=2))
    print("\n--- Education ---")
    print(json.dumps(education, indent=2))
    print("\n--- Skills ---")
    print(json.dumps(skills, indent=2))
    print("\n--- Projects ---")
    print(json.dumps(projects, indent=2))

if __name__ == "__main__":
    extract_profile_data('linkedin_profile.html')
