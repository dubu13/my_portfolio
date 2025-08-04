"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(current || "");
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
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

                    <ul className="nav-menu">
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