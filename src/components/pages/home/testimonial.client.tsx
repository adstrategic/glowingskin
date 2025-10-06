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

type TestimonialItem = {
  profession: string;
  name: string;
  testimonial: string;
};

export type TestimonialClientProps = {
  header: { subtitle: string; title: string };
  items: TestimonialItem[];
  alts: { double: string; right: string };
};

const images = [client1, client2, client1, client2];

export default function TestimonialClient({
  header,
  items,
  alts,
}: TestimonialClientProps) {
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
          <h3 className="d2c_subtitle">{header.subtitle}</h3>
          <h2 className="d2c_title">{header.title}</h2>
        </div>

        <div className="relative">
          <div className="bg-secondary md:w-[200px] lg:w-[250px] xl:w-[350px] h-full xl:h-[557px] absolute left-0 top-0 -z-10 hidden md:block"></div>

          <div className="swiper d2c_testimonial_slider !pt-0 !py-10 md:!py-16 relative md:max-w-[90%] xl:max-w-[85%]">
            <div className="swiper-wrapper">
              {items.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="flex flex-wrap items-center !w-full md:!w-[90%] lg:!w-[95%] xl:!w-5/6 mx-auto">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <Image
                        src={images[index % images.length]}
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
                        alt={alts.double}
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
            alt={alts.right}
            width={224}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}
