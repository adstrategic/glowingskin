import Image from "next/image";
import React from "react";
import AnimatedCounter from "@/components/ui/animated-counter";
import aboutUsImage from "@/assets/images/Why-Choose-01.jpg";
import missionImage from "@/assets/images/Why-Choose-02.jpg";
import valuesImage from "@/assets/images/Why-Choose-03.jpg";
import cardImage1 from "@/assets/images/Features-01.jpg";
import cardImage2 from "@/assets/images/Features-02.jpg";
import cardImage3 from "@/assets/images/Features-03.jpg";
import cardImage4 from "@/assets/images/Features-04.jpg";
import dotSmall from "@/assets/images/dot-small.png";
import dotBigger from "@/assets/images/dot-bigger.png";

const AboutUsSection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32" id="d2c_about_us">
      <div className="container relative">
        <Image
          src={dotSmall}
          className="hidden lg:block max-w-14 absolute -top-16 -left-2"
          alt="Dot 3*3"
          width={56}
          height={56}
        />

        {/* Header */}
        <div className="d2c_header">
          <h2 className="d2c_subtitle">Our Mission, Vision & Values</h2>
          <p className="text-lg">
            At Glowing Skin Beauty Bar, everything we do is guided by our
            commitment to excellence, safety, and personalized care.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="space-y-6 text-center">
            <div className="relative overflow-hidden h-[300px]">
              <Image
                src={aboutUsImage}
                className="w-full h-full object-cover"
                alt="Our Mission"
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-secondary text-2xl xl:text-3xl font-semibold">
              Our Mission
            </h3>
            <p className="text-base">
              To provide exceptional aesthetic treatments that enhance natural
              beauty while prioritizing client safety, comfort, and
              satisfaction. We strive to make every client feel confident and
              radiant.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6 text-center">
            <div className="relative overflow-hidden h-[300px]">
              <Image
                src={missionImage}
                className="w-full h-full object-cover"
                alt="Our Vision"
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-secondary text-2xl xl:text-3xl font-semibold">
              Our Vision
            </h3>
            <p className="text-base">
              To be South Florida&apos;s premier destination for advanced
              aesthetic treatments, known for our expertise, innovation, and
              unwavering commitment to client care and satisfaction.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-6 text-center md:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden h-[300px]">
              <Image
                src={valuesImage}
                className="w-full h-full object-cover"
                alt="Our Values"
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-secondary text-2xl xl:text-3xl font-semibold">
              Our Values
            </h3>
            <p className="text-base">
              Excellence in service, integrity in practice, innovation in
              treatments, and compassion in care. We believe in empowering our
              clients through personalized beauty solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us Statistics Section */}
        <div className="mt-16 lg:mt-24 bg-primary py-16 lg:py-20 px-8 lg:px-12 text-white text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-secondary rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-secondary rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-secondary rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
                Why Choose Us
              </span>
            </div>

            <h3 className="text-[#e6c6c6] text-4xl lg:text-5xl xl:text-6xl font-light mb-4 font-primary">
              Why Choose Us
            </h3>

            <p className="text-[#b8b8b8] text-lg max-w-4xl mx-auto mb-12">
              Our mission is to drive progress and enhance the lives of our
              customers by delivering superior products and services that
              exceed.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Happy Clients Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage1}
                  alt="Happy Clients"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={30} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      Happy Clients
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ml-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Years Experience Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage2}
                  alt="Years Experience"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      Your Growth Partner
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ml-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Services Offered Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage3}
                  alt="Services Offered"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={35} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      Happy Clients
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ml-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Awards Won Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage4}
                  alt="Awards Won"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={18} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      Your Growth Partner
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ml-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={dotBigger}
          className="hidden xl:block max-w-20 absolute -bottom-20 -right-16"
          alt="Dot 4*4"
          width={80}
          height={80}
        />
      </div>
    </section>
  );
};

export default AboutUsSection;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
