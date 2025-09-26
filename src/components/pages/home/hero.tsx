import React from "react";
import rightArrow from "@/assets/images/right-arrow.png";
// import heroImg from "@/assets/images/hero-image.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center pb-0 pt-12 md:pt-70px lg:pt-[80px] xl:pt-[100px]"
      id="d2c_hero"
    >
      <div className="container relative h-full md:h-[470px] lg:h-[75vh] xl:h-[700px] 2xl:h-[800px] space-y-3 md:space-y-0 flex flex-col justify-between">
        <h1 className="d2c_title text-5xl md:text-6xl lg:text-[84px] xl:text-[100px] 2xl:text-[117px] font-semibold leading-none text-center md:text-left">
          Luxury Skincare & Aesthetic Treatments in Miami
        </h1>
        <div className="w-full md:w-[50%] lg:w-[55%] pb-5 md:pb-24 lg:pb-44">
          <div className="!space-y-2 md:!space-y-10 text-center md:text-left">
            <p className="text-base md:text-sm lg:text-lg xl:text-lg">
              Licensed & Certified advanced aesthetic services: from Laser Hair
              Removal to Microneedling with Exosomes & PRP, experience the best
              in non-invasive skin rejuvenation in South Florida.
            </p>
            <Link href="#d2c_about" className="d2c_btn d2c_primary_btn mt-3">
              Read More
              <Image src={rightArrow} alt="Right Arrow" />
            </Link>
          </div>
        </div>
        <div className="md:absolute right-0 bottom-0 w-full md:w-[350px] lg:w-[450px] xl:w-[500px] 2xl:w-[580px]">
          {/* <Image src={heroImg} className="w-full h-full" alt="Hero Image" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
