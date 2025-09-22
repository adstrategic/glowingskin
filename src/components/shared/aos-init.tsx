'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
  useEffect(() => {
    const initAOS = () => {
      // Select all elements that should be animated
      const elements = document.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, ul, .d2c_btn, .d2c_features_card, .d2c_services_card"
      );

      // Apply animations to elements
      elements.forEach(el => {
        if (el.classList.contains("no-animation")) {
          el.removeAttribute("data-aos");
          return;
        }

        const animations = ["fade-up", "fade-right", "fade-left", "fade-bottom"];
        let applied = false;

        animations.forEach(anim => {
          if (el.classList.contains(anim)) {
            el.setAttribute("data-aos", anim);
            applied = true;
          }
        });

        if (!applied) {
          el.setAttribute("data-aos", "fade-up");
        }
      });

      // Initialize AOS with custom settings
      AOS.init({
        mirror: true,     // Animate again when scrolling up
        once: false,      // Allow repeat animation
        delay: 0,
        duration: 700,
        offset: 20,
      });

      // Manually trigger animation on visible elements
      document.querySelectorAll('[data-aos]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.classList.add("aos-animate");
        }
      });
    };

    // Small delay ensures elements are painted
    setTimeout(initAOS, 100);
  }, []);

  return null;
};

export default AOSInit;