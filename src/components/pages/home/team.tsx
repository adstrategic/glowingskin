"use client";
import Image from "next/image";
import Link from "next/link";
// import React, { useEffect } from "react";
// import Swiper from "swiper";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
import teamBg from "@/assets/images/Team-bg.jpg";
import team1 from "@/assets/images/Team-01.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const teamMembers = [
  {
    image: team1,
    name: "Angie Gerbore",
    position: "Founder & Lead Stylist",
    delay: 100,
  },
];

const Team = () => {
  //   useEffect(() => {
  //     const swiper = new Swiper(".d2c_team_slider", {
  //       modules: [Autoplay],
  //       slidesPerView: 4,
  //       loop: true,
  //       speed: 1000,
  //       autoplay: {
  //         delay: 2000,
  //       },
  //       spaceBetween: 20,
  //       grabCursor: true,
  //       allowTouchMove: true,
  //       breakpoints: {
  //         320: {
  //           slidesPerView: 1,
  //         },
  //         768: {
  //           slidesPerView: 2,
  //         },
  //         1024: {
  //           slidesPerView: 2,
  //         },
  //         1280: {
  //           slidesPerView: 4,
  //         },
  //       },
  //     });

  //     return () => {
  //       swiper.destroy();
  //     };
  //   }, []);
  return (
    <section
      className="relative py-0 my-5 md:my-8 lg:my-10 xl:my-16"
      id="d2c_team"
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-span-12 md:col-span-6">
            <div className="relative h-[400px] lg:h-[550px] overflow-hidden">
              <Image
                src={teamBg}
                className="absolute -z-10 w-full h-full block object-cover"
                alt="Team Background"
                width={800}
                height={550}
                priority
              />
              <div className="absolute p-8 z-20 bottom-0 left-0 w-full bg-primary">
                <h4 className="d2c_subtitle text-secondary text-right">Our</h4>
                <h2 className="d2c_subtitle text-3xl md:text-5xl xl:text-8xl text-secondary text-right">
                  Professionals
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d2c_team_slider_wrapper">
        <div className="swiper d2c_team_slider top-1/2 transform md:-translate-y-1/2">
          <div className="swiper-wrapper">
            {teamMembers.map((member, index) => (
              <div className="swiper-slide" key={index}>
                <div
                  className="d2c_team_card_wrapper"
                  data-aos="fade-up"
                  data-aos-delay={member.delay}
                >
                  <Image
                    src={member.image}
                    className="d2c_team_profile"
                    alt={`${member.name} - ${member.position}`}
                    width={400}
                    height={300}
                  />
                  <div className="text-center md:text-left">
                    <h4 className="d2c_subtitle text-lg lg:text-xl xl:text-xl-1 font-semibold no-animation">
                      {member.name}
                    </h4>
                    <p className="text-sm 2xl:text-base-1 text-secondary no-animation">
                      {member.position}
                    </p>
                    <hr className="border-secondary my-3" />
                    <div className="space-x-4">
                      <Link
                        href="#"
                        className="text-xl text-secondary hover:text-primary transition-all"
                      >
                        <FaFacebookF />
                      </Link>
                      <Link
                        href="#"
                        className="text-xl text-secondary hover:text-primary transition-all"
                      >
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
