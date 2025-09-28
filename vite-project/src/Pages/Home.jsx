import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from '@/Components/StarBackground';
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { EducationSection } from "../Components/EducationSection";
import { ProjectsSection } from "../Components/ProjectsSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
            {/* Theme Light/Dark */}
            <ThemeToggle/>

            {/* Background Effects */}
            <StarBackground/>

            {/* Navbar */}
            <Navbar />

            {/* Main Content  */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <ProjectsSection/>
                <EducationSection/>
                <SkillsSection/>
            </main>
            {/* Footer */}

        </div>
    );
};
