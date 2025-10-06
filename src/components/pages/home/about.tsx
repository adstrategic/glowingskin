import Image from "next/image";
import Link from "next/link";
import React from "react";
import teamBride from "@/assets/images/about.jpg";
import starDer from "@/assets/images/star-der.png";
import rightArrow from "@/assets/images/right-arrow.png";

const About = () => {
  return (
    <section
      className="border border-y-primary py-20 md:py-28 lg:py-32"
      id="d2c_about"
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-10 lg:gap-6">
          <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-7 gap-6 relative">
            <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto relative">
              <Image
                src={teamBride}
                className="h-[400px] lg:h-[500px] xl:h-[630px] w-full object-cover"
                alt="about"
                width={800}
                height={630}
                priority
              />
              <h2 className="d2c_title text-4xl lg:text-5xl xl:text-9xl absolute -bottom-0 right-0 leading-none text-black bg-gradient-to-b from-transparent  to-[#f0ebd5]">
                About Us
              </h2>
              <h2 className="absolute right-5 md:right-auto lg:left-[-308px] bottom-[90%] lg:bottom-[217px] flex flex-row flex-nowrap items-center justify-center gap-2 p-0 lg:w-[510px] h-min overflow-visible z-0 transform lg:rotate-[-90deg] text-3xl lg:text-5xl xl:text-6xl no-animation md:left-5">
                Discover Glowing Skin Beauty Bar
              </h2>
            </div>
            <Image
              src={starDer}
              className="absolute -top-10 -z-10 w-auto h-auto"
              alt="Flower Image"
              width={1000}
              height={1000}
            />
          </div>

          <div className="space-y-4 xl:space-y-10 col-start-1 md:col-start-7 lg:col-start-8 col-span-12 md:col-span-6 lg:col-span-5">
            <h3 className="text-secondary text-[32px] xl:text-[40px] leading-tight">
              Crafted for Radiance & Confidence
            </h3>
            <p className="text-sm-1 xl:text-lg">
              At Glowing Skin Beauty Bar, we believe that beauty is more than
              skin deep - it&apos;s about confidence and wellness. Founded by
              Angie, a licensed and certified aesthetician with years of
              hands-on experience, our mission is to provide luxury skin care
              and body treatments that combine advanced technology with
              personalized care.
            </p>
            <p>
              From your first consultation to your treatment plan, we focus on
              making every client feel comfortable, confident, and radiant.
            </p>
            <Link href="#d2c_contact" className="d2c_btn d2c_primary_btn">
              Get to know us
              <Image
                src={rightArrow}
                alt="Right Arrow"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
