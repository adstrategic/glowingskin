import Image from "next/image";
import Link from "next/link";
import React from "react";
import rightArrow from "@/assets/images/right-arrow.png";
import womanDrying from "@/assets/images/cta.jpg";

const Cta = () => {
  return (
    <section className="lg:py-32 2xl:py-52 relative">
      <div className="container z-30">
        <div className="w-full md:w-[60%] xl:w-[38%] ml-0 md:ml-[40%] lg:ml-[45%] space-y-6 z-10 relative text-center md:text-left">
          <p className="text-white">
            📍 Located at 1000 West Ave, Miami, FL 33139, proudly serving all of
            South Florida including Miami Beach, Brickell, Coral Gables, and
            surrounding areas.
          </p>
          <h2 className="d2c_subtitle text-4xl xl:text-6xl text-white z-20 relative">
            Ready to book your appointment?
          </h2>
          <a
            href="https://glowingskinbar.glossgenius.com/services"
            target="_blank"
            className="d2c_btn d2c_secondary_btn justify-center"
          >
            Schedule Your Appointment
            <Image
              src={rightArrow}
              alt="Right Arrow Image"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="bg-primary absolute inset-0 -z-20"></div>
      <div className="w-1/2 absolute inset-0 hidden md:block">
        <Image
          src={womanDrying}
          className="h-full w-full object-cover"
          alt="Woman drying hair hair salon"
          width={800}
          height={600}
          priority
        />
        <div className="absolute inset-0 bg-upper-gradient"></div>
      </div>
    </section>
  );
};

export default Cta;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
