import Image from "next/image";
import Link from "next/link";
import React from "react";
import dotSmall from "@/assets/images/dot-small.png";
import dotBigger from "@/assets/images/dot-bigger.png";
import girlsWithFlower from "@/assets/images/girls-with-flower.jpg";
import girlsLeftView from "@/assets/images/girls-left-view.jpg";
import darkRightArrow from "@/assets/images/dark-right-arrow.png";

const Cta2 = () => {
  return (
    <section className="xl:py-24 2xl:py-44 bg-primary relative">
      <div className="container relative">
        <Image
          src={dotSmall}
          className="hidden lg:block max-w-14 absolute -top-16 -left-2"
          alt="Dot 3*3"
          width={56}
          height={56}
        />

        <div className="space-y-6 text-center w-full md:w-[80%] lg:w-[65%] xl:w-4/6 mx-auto">
          <h2 className="d2c_subtitle text-[#e6c6c6]">
            Expertise combined with quality The essence of beauty
          </h2>
          <p className="text-[#6E6E6E]">
            beauty and wellness specialists, we share our goal of meeting
            individual needs with beauty products in an innovative way with
            precision that inspires confidence.
          </p>
          <Link
            href="#d2c_contact"
            className="d2c_btn d2c_secondary_btn text-primary"
          >
            Contact with Us
            <Image
              src={darkRightArrow}
              alt="Dark Right Arrow"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <Image
          src={dotBigger}
          className="hidden xl:block max-w-20 absolute -bottom-20 -right-16"
          alt="Dot 4*4"
          width={80}
          height={80}
        />
      </div>

      <Image
        src={girlsWithFlower}
        className="hidden lg:block absolute left-0 bottom-0 lg:w-[200px] 2xl:w-[320px] lg:h-[250px] 2xl:h-[450px] object-cover"
        data-aos="fade-in"
        alt="Girls with flower"
        width={320}
        height={450}
      />

      <Image
        src={girlsLeftView}
        className="hidden lg:block absolute top-0 right-0 lg:w-[200px] 2xl:w-[320px] lg:h-[250px] 2xl:h-[450px] object-cover"
        data-aos="fade-in"
        alt="Girls with flower"
        width={320}
        height={450}
      />
    </section>
  );
};

export default Cta2;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
