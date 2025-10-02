import Image from "next/image";
import React from "react";
import ceoImage from "@/assets/images/about.jpg";

const CeoHistory = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 " id="d2c_ceo_history">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-10 lg:gap-6">
          <div className="space-y-4 xl:space-y-10 col-start-1 col-span-12 md:col-span-6 lg:col-span-5">
            <h3 className="text-secondary text-[32px] xl:text-[40px] leading-tight">
              Meet Our Founder & CEO
            </h3>
            <p className="text-sm-1 xl:text-lg">
              Angie Rodriguez is a licensed and certified aesthetician with over
              8 years of experience in advanced skincare and aesthetic
              treatments. Her passion for helping clients achieve their beauty
              goals led her to establish Glowing Skin Beauty Bar.
            </p>
            <p>
              With specialized training in laser therapy, microneedling, and
              advanced skincare techniques, Angie has built a reputation for
              delivering exceptional results while ensuring client comfort and
              safety.
            </p>
            <p>
              Her vision was to create a space where clients could receive
              premium aesthetic treatments in a welcoming, professional
              environment. Under her leadership, the clinic has become a trusted
              destination for beauty and wellness in South Florida.
            </p>
            <div className="bg-primary p-6 text-white">
              <blockquote className="text-lg italic">
                &ldquo;Beauty is about feeling confident in your own skin. My
                mission is to help every client discover their natural radiance
                and feel their absolute best.&rdquo;
              </blockquote>
              <cite className="block mt-4 text-secondary font-semibold">
                - Angie Rodriguez, Founder & CEO
              </cite>
            </div>
          </div>

          <div className="col-start-1 md:col-start-7 lg:col-start-8 col-span-12 md:col-span-6 lg:col-span-7 gap-6 relative">
            <div className="w-full lg:w-10/12 xl:w-full mx-auto relative">
              <Image
                src={ceoImage}
                className="h-[400px] lg:h-[500px] xl:h-[630px] w-full object-cover"
                alt="Angie Rodriguez - Founder & CEO"
                width={800}
                height={630}
                priority
              />
              <h2 className="d2c_title text-4xl lg:text-5xl xl:text-9xl absolute -bottom-0 left-0 right-0 leading-none text-black bg-gradient-to-b from-transparent to-[#e6c6c6]">
                Angie
              </h2>
              {/* <h2 className="absolute left-5 md:left-auto lg:right-[-308px] bottom-[90%] lg:bottom-[50px] flex flex-row flex-nowrap items-center justify-center gap-2 p-0 lg:w-[510px] h-full overflow-visible z-0 transform lg:rotate-[90deg] text-3xl lg:text-5xl xl:text-6xl no-animation md:right-5">
                Licensed Aesthetician & Visionary
              </h2> */}
            </div>
            {/* <Image
              src={flowerRight}
              className="absolute -top-10 -z-10 w-auto h-auto right-0"
              alt="Flower Image"
              width={1000}
              height={1000}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoHistory;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
