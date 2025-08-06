"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home"},
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["home", "about", "projects", "contact"];
            let current = "";

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);

                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (section === "contact" &&
                        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                            current = "contact";
                            break;
                    }
                    if (rect.top <= 150) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <div className="container-width">
                <div className="nav-content">
                    <a
                        href="#home"
                        className="nav-logo"
                        onClick={(e) => scrollToSection(e, "#home")}
                    >
                        Dilara
                    </a>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="nav-menu desktop-menu">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className={`nav-menu mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>    
            </div>
        </nav>
    );
}