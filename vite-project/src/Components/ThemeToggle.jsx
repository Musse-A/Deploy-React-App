import { Moon, Sun } from 'lucide-react';
import {useEffect, useState} from 'react';
import {cn} from '@/lib/utils';


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
   
// Remembers and stores users's light/dark mode preference
useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  } else {
    // Default to dark mode if no stored theme or stored theme is dark
    localStorage.setItem('theme', 'dark');
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  }
}, []);

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
    <button onClick={toggleTheme} 
    className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
             "focus:outline-hidden"
    )}> 
        {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
        <Moon className="h-6 w-6 text-blue-900" />
    )}
    </button>
    );

};

