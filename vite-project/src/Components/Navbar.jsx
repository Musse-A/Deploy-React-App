import {cn} from "@/lib/utils";
import React, { useState, useEffect } from "react";
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
            <a className="text-xl font-bold text-primary flex items-center">
                <img src={Logo} alt="Logo" className="w-10 h-10 mr-2 rounded-full" />
                <span className="relative z-10">
                    <span className="text-glow">Ayan</span> Portfolio
                </span>
            </a>
        </div>
    </nav>
    );
};
       