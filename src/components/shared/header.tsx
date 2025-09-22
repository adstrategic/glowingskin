'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import brushImg from '@/assets/images/brush.png';
import logoImg from '@/assets/images/logo/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonial', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Appointment' }
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const mobileNavLinksContainer = document.getElementById("mobile-nav-links");
        const desktopLinks = document.querySelectorAll("#d2c_nav_link_wrapper .nav_link");

        // Clone main links for mobile menu
        desktopLinks.forEach((link) => {
            const mobileLink = link.cloneNode(true);
            mobileLink.addEventListener("click", function () {
                document.querySelector("body")?.classList.remove("mobile-menu-expanded");
                setIsMobileMenuOpen(false);
            });
            mobileNavLinksContainer?.appendChild(mobileLink);
        });

        // Scrollspy functionality
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        });

        // Sticky navbar background color change
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.style.backgroundColor = "#125b85";
                } else {
                    navbar.style.backgroundColor = "transparent";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleNavItems = () => {
        document.querySelector("body")?.classList.toggle("mobile-menu-expanded");
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 w-full border border-b-primary" id="navbar">
            <nav className="d2c_navbar">
                <div className="mr-auto flex justify-between items-center gap-3 lg:gap-6">
                    <div className="flex items-center justify-between gap-4 flex-wrap w-full container">
                        <div className="mr-20">
                            <Link href="#d2c_hero" id="home-link">
                                <Image src={logoImg} className="max-w-[180px] md:max-w-[202px] w-auto h-auto" alt="PureGlamy logo" />
                            </Link>
                        </div>

                        <div className="hidden space-x-4 d2c_navigation mx-auto" id="d2c_nav_link_wrapper">
                            <div>
                                {navItems.map(({ id, label }) => (
                                    <Link
                                        key={id}
                                        href={`#d2c_${id}`}
                                        className={`nav_link takeToSmall ${activeSection === `d2c_${id}` ? 'active' : ''}`}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <button
                                id="mobile-menu-btn"
                                className="transition-all duration-500 d2c_navigation"
                                onClick={toggleNavItems}
                            >
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div id="mobile-menu" className={`bg-[#E9E6DD] absolute right-0 left-0 -z-10 ${isMobileMenuOpen ? 'h-full min-h-screen' : ''}`}>
                <div className="block p-6 pt-0 md:pt-10 w-full">
                    <div id="mobile-nav-links" className="mt-2 grid grid-cols-1 gap-1 gap-x-4">
                        <Image
                            src={brushImg}
                            className="hidden md:block absolute md:left-[10%] lg:left-[30%] 2xl:left-[35%] transform md:translate-x-[10%] lg:-translate-x-[30%] 2xl:-translate-x-[35%] h-auto w-auto"
                            alt="Brush"
                            width={200}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;