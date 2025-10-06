"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import stb from "@/assets/images/stb - copia.png";
import logoImg from "@/assets/images/glowingskingbbicon.png";
import { FaBars, FaTimes } from "react-icons/fa";

type NavItem = { id: string; label: string };

export type HeaderClientProps = {
  navItems: readonly NavItem[];
  alts: { logo: string; mobileLogo: string };
  switcher: ReactElement;
};

const HeaderClient = ({ navItems, alts, switcher }: HeaderClientProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const mobileNavLinksContainer = document.getElementById("mobile-nav-links");
    const desktopLinks = document.querySelectorAll(
      "#d2c_nav_link_wrapper .nav_link"
    );

    // Clear existing mobile links to prevent duplication
    if (mobileNavLinksContainer) {
      // Keep only the background image, remove all nav links
      const backgroundImage = mobileNavLinksContainer.querySelector("img");
      mobileNavLinksContainer.innerHTML = "";
      if (backgroundImage) {
        mobileNavLinksContainer.appendChild(backgroundImage);
      }
    }

    // Clone main links for mobile menu
    desktopLinks.forEach((link) => {
      const mobileLink = link.cloneNode(true) as HTMLElement;
      mobileLink.addEventListener("click", function () {
        document
          .querySelector("body")
          ?.classList.remove("mobile-menu-expanded");
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

    // Sticky navbar gradient on scroll
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("animated-gradient");
        } else {
          navbar.classList.remove("animated-gradient");
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
    <header
      className="sticky top-0 w-full border border-b-primary transition-colors duration-500"
      id="navbar"
    >
      <nav className="d2c_navbar">
        <div className="mr-auto flex justify-between items-center gap-3 lg:gap-6">
          <div className="flex items-center justify-between gap-4 flex-wrap w-full container">
            {/* Logo */}
            <div className="">
              <Link href="/" id="home-link">
                <Image
                  src={logoImg}
                  className="max-w-[120px] sm:max-w-[202px] w-auto h-auto"
                  alt={alts.logo}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div
              className="hidden space-x-4 d2c_navigation mx-auto place-items-center"
              id="d2c_nav_link_wrapper"
            >
              <div>
                {navItems.map(({ id, label }) => (
                  <Link
                    key={id}
                    href={`/${id}`}
                    className={`nav_link takeToSmall ${
                      activeSection === `d2c_${id}` ? "active" : ""
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              {switcher}
              <button
                id="mobile-menu-btn"
                className="transition-all duration-500 d2c_navigation sm:ml-8"
                onClick={toggleNavItems}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`bg-[#e6c6c6]/80 backdrop-blur-sm absolute right-0 left-0 -z-10 transition-all duration-500 ${
          isMobileMenuOpen
            ? "h-full min-h-screen"
            : "h-0 min-h-0 overflow-hidden"
        }`}
      >
        <div className="block p-6 pt-0 md:pt-10 w-full">
          <div
            id="mobile-nav-links"
            className="mt-24 grid grid-cols-1 gap-1 gap-x-4 "
          >
            <Image
              src={stb}
              className="hidden md:block absolute md:left-[8%] lg:left-[25%] 2xl:left-[30%] transform md:translate-x-[15%] lg:-translate-x-[25%] 2xl:-translate-x-[30%] top-24 scale-x-[-1] h-max w-auto opacity-50"
              alt={alts.mobileLogo}
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
