import Image from "next/image";
import React from "react";
import whyChoose1 from "@/assets/images/Why-Choose-05.jpg";
import whyChoose2 from "@/assets/images/Why-Choose-07.jpg";
import whyChoose3 from "@/assets/images/Why-Choose-06.jpg";
import whyChoose4 from "@/assets/images/Why-Choose-08.jpg";

const whyChooseData = [
  {
    image: whyChoose1,
    title: "Licensed & Certified Expert",
    delay: 100,
  },
  {
    image: whyChoose2,
    title: "Premium Technology",
    delay: 200,
  },
  {
    image: whyChoose3,
    title: "Personalized Care",
    delay: 300,
  },
  {
    image: whyChoose4,
    title: "House Calls Available",
    delay: 400,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="lg:bg-[url('../images/star-izq.png'),_url('../images/star-der.png')] bg-no-repeat bg-[position:0px_100%,100%_4%]">
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">Experience Luxury & Care</h3>
          <h2 className="d2c_title">Why Choose Glowing Skin Beauty Bar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 xl:gap-40">
          <div className="grid gap-6 md:gap-20 xl:gap-40">
            {whyChooseData.slice(0, 2).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  className="h-[350px] lg:h-[532px] w-full object-cover"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  alt={`${item.title} Image`}
                  width={800}
                  height={532}
                />
                <h3 className="text-secondary pt-6 text-center md:text-left">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:gap-20 xl:gap-40 md:mt-20">
            {whyChooseData.slice(2, 4).map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  className="h-[350px] lg:h-[532px] w-full object-cover"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  alt={`${item.title} Image`}
                  width={800}
                  height={532}
                />
                <h3 className="text-secondary pt-6 text-center md:text-left">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
