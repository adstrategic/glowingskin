"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import client1 from "@/assets/images/client-1.jpg";
import client2 from "@/assets/images/client-2.jpg";
import doubleQuotation from "@/assets/images/double-quotation.png";
import quotationRight from "@/assets/images/quotation-right.png";

const testimonialData = [
  {
    image: client1,
    profession: "Artist",
    name: "Maria Davis",
    testimonial:
      "Angie is amazing at what she does! She takes the time to really look at your skin and talk through what it needs. Not only is the facial itself relaxing, but Angie also gives great suggestions. Highly recommend her!",
  },
  {
    image: client2,
    profession: "Artist",
    name: "Luna park",
    testimonial:
      "It was a pleasure getting a hydrafacial with Angie. She is so nice and great to talk to. My skin is clean, hydrated, and glowing!",
  },
  {
    image: client1,
    profession: "Artist",
    name: "Maria Davis",
    testimonial: "Angie's amazing! I got a hydra facial & my skin is glowing.",
  },
  {
    image: client2,
    profession: "Artist",
    name: "Maria Davis",
    testimonial:
      "Angelica is very professional, knowledgeable and patient. She explains every procedure very thoroughly. I'm very happy with my treatment and results.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    const swiper = new Swiper(".d2c_testimonial_slider", {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section
      className="bg-[url('../images/star-der.png')] bg-no-repeat bg-[position:100%_15%]"
      id="d2c_testimonial"
    >
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">Our Client</h3>
          <h2 className="d2c_title">Testimonials</h2>
        </div>

        <div className="relative">
          <div className="bg-secondary md:w-[200px] lg:w-[250px] xl:w-[350px] h-full xl:h-[557px] absolute left-0 top-0 -z-10 hidden md:block"></div>

          <div className="swiper d2c_testimonial_slider !pt-0 !py-10 md:!py-16 relative md:max-w-[90%] xl:max-w-[85%]">
            <div className="swiper-wrapper">
              {testimonialData.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="flex flex-wrap items-center !w-full md:!w-[90%] lg:!w-[95%] xl:!w-5/6 mx-auto">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <Image
                        src={item.image}
                        className="block w-full md:h-[280px] lg:h-[350px] xl:h-[440px] object-cover"
                        alt={`${item.name} - Client Image`}
                        width={400}
                        height={440}
                      />
                    </div>

                    <div className="w-full md:w-2/3 md:px-10 lg:px-20 mt-6 md:mt-0">
                      <Image
                        src={doubleQuotation}
                        className="max-w-12 max-h-12 object-contain mb-2"
                        alt="Double quotation"
                        width={48}
                        height={48}
                      />
                      <p>{item.profession}</p>
                      <h3>{item.name}</h3>
                      <p className="mt-10 text-base md:text-sm xl:text-lg">
                        {item.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-pagination"></div>
          </div>

          <Image
            src={quotationRight}
            className="absolute right-0 top-10 max-w-56 max-h-[380px]"
            alt="Right Quotation"
            width={224}
            height={380}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
