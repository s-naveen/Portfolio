export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Naveen S",
        "url": "https://naveen-s.com",
        "image": "https://naveen-s.com/profile.jpeg",
        "sameAs": [
            "https://www.linkedin.com/in/naveen-s-221573bb/",
            "https://github.com/naveen-s"
        ],
        "jobTitle": "Principal Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Zoho Corporation",
            "url": "https://www.zoho.com"
        },
        "description": "Principal Engineer at Zoho specializing in AI Agentic Frameworks, Homomorphic Encryption, and scalable system design.",
        "knowsAbout": ["AI Agents", "Machine Learning", "Cryptography", "Homomorphic Encryption", "React", "Next.js", "Python", "LangChain"]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Naveen S Portfolio",
        "url": "https://naveen-s.com",
        "description": "Personal portfolio and professional website of Naveen S",
        "author": {
            "@type": "Person",
            "name": "Naveen S"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
