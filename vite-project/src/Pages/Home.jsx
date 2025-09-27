import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from '@/Components/StarBackground';

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

            {/* Footer */}

        </div>
    );
};
