import Image from "next/image";
import React from "react";
import hairCare from "@/assets/images/hair-care.jpg";
import skinCare from "@/assets/images/skincare.jpg";
import nailArt from "@/assets/images/Nail-Art.jpg";
// import makeup from "@/assets/images/Makeup.jpg";

const servicesData = [
  {
    image: hairCare,
    title: "Laser Hair Removal",
    height: "h-[400px] md:h-[300px] lg:h-[420px]",
    gridClass: "col-span-1",
  },
  {
    image: skinCare,
    title: "Microneedling with Exosomes & Salmon DNA",
    height: "h-[250px] md:h-[200px] lg:h-[285px]",
    gridClass: "space-y-4 md:space-y-6",
  },
  {
    image: nailArt,
    title: "Hydrafacial",
    height: "h-[250px] md:h-[200px] lg:h-[285px]",
    gridClass: "",
  },
];

const Services = () => {
  return (
    <section id="d2c_services">
      <div className="container">
        <div className="d2c_header ml-auto">
          <h3 className="d2c_subtitle md:text-right">
            Experience Luxury & Care
          </h3>
          <h2 className="d2c_title md:text-right">Our Premium Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className={`d2c_services_card ${servicesData[0].height}`}>
            <Image
              src={servicesData[0].image}
              className="w-full h-full object-cover"
              alt={`${servicesData[0].title} Image`}
              width={500}
              height={500}
            />
            <h3 className="d2c_services_title">{servicesData[0].title}</h3>
          </div>

          {/* <div className="space-y-4 md:space-y-6">
            {[1, 2].map((index) => ( */}
          <div className={`d2c_services_card ${servicesData[1].height}`}>
            <Image
              src={servicesData[1].image}
              className="w-full h-full object-cover"
              alt={`${servicesData[1].title} Image`}
              width={500}
              height={500}
            />
            <h3 className="d2c_services_title">{servicesData[1].title}</h3>
          </div>
          {/* ))}
          </div> */}

          <div
            className={`d2c_services_card ${servicesData[2].height} mt-auto`}
          >
            <Image
              src={servicesData[2].image}
              className="w-full h-full object-cover"
              alt={`${servicesData[2].title} Image`}
              width={500}
              height={500}
            />
            <h3 className="d2c_services_title">{servicesData[2].title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
