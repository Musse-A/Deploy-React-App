import {cn} from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Logo from '@/assets/images/Logo.png';


const navItems = [
    {name:"Home", href:"#home"},
    {name:"About Me", href:"#about"},
    {name:"Projects", href:"#projects"},
    {name:"Education", href:"#education"},
    {name:"Services", href:"#skills"},
    {name:"Contact", href:"#contact"},
    ];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
    <nav className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}
    >
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center"
            href="#hero"
            >
                <img src={Logo} alt="Logo" className="w-10 h-10 mr-2 rounded-full" />
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Ayan</span> {""} Portfolio
                </span>
            </a>
            {/* Desktop Nav */}

            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a 
                    key={key} 
                    href={item.href} 
                    className="text-foreground/80 hover:text-primary transition-colors duration 300"
                    >
                        {item.name}
                    </a>
                   
                ))}
            </div>

            {/* Mobile Nav */}
            <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden p-2 text-foreground z-50">
                {""}
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                {""}
            </button>
            <div>
                <div 
                className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" :
                 "opacity-0 pointer-events-none"

                )}
             >
             <div className="flex flex-col space-y-8 text-xl"></div>
                {navItems.map((item, key) => (
                    <a 
                    key={key} 
                    href={item.href} 
                    className="text-foreground/80 hover:text-primary transition-colors duration 300"
                    onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                   
                ))}
            </div>
            </div>

        </div>
    </nav>
    );
};
       