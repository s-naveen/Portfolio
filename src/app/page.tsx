import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-yellow/50">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 space-y-24 pb-20">
        <ProjectsSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ExperienceSection />
          <SkillsSection />
        </div>
        <ContactSection />
      </div>

      <footer className="py-8 text-center font-body text-sm opacity-60">
        <p>© {new Date().getFullYear()} Naveen S. Crafted with 💛 and Next.js.</p>
      </footer>
    </main>
  );
}
