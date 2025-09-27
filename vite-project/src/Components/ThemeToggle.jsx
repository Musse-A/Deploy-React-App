import { Moon, Sun } from 'lucide-react';
import {useEffect, useState} from 'react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
   
// Remembers and stores users's light/dark mode preference
   useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
    }
   }
   , []);

    const toggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
    }else {     
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
    }
   }

//Button to switch between light and dark mode
    return (
    <button onClick={toggleTheme}> 
        {""}
        {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
        <Moon className="h-6 w-6 text-yellow-900" />
    )}
    </button>
    );

};
