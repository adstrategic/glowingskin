import Image from "next/image";
import React from "react";
import price1 from "@/assets/images/Price-01.jpg";
import price2 from "@/assets/images/Price-02.jpg";
import price3 from "@/assets/images/Price-03.jpg";
import price4 from "@/assets/images/Price-04.jpg";

const servicesData = [
  {
    title: "Tratamientos faciales",
    description: "Velit in dui dictum arcu felis tempor in",
    image: price1,
    order: { image: "order-1", content: "order-2" },
    imageAlt: "Make Up girl",
    services: [
      { name: "Hydrafacial", price: "150" },
      { name: "Microneedling con suero", price: "180" },
      { name: "PRP Microneedling (Plasma)", price: "220+" },
      { name: "RF Microneedling PRP", price: "300+" },
      //   { name: "Television make up", price: "70" },
    ],
  },
  {
    title: "Remodelación corporal",
    description: "Velit in dui dictum arcu felis tempo",
    image: price2,
    order: { image: "order-3 md:order-4", content: "order-4 md:order-3" },
    imageAlt: "Hair Styling girl",
    services: [
      { name: "EMS Body Shaping / Muscle Building", price: "100" },
      { name: "Mesotherapy (Fat Burners)", price: "50" },
      //   { name: "Full hair color", price: "99" },
      //   { name: "Protein treatment", price: "50" },
      //   { name: "Hair mask", price: "15" },
    ],
  },
  {
    title: "Depilación láser",
    description: "Velit in dui dictum arcu felis tempor in",
    image: price3,
    order: { image: "order-5", content: "order-6" },
    imageAlt: "Nail care girl",
    services: [
      {
        name: "Laser Hair Removal (Candela GentleYAG)",
        price: "100+",
      },
      //   { name: "Pedicure", price: "35" },
      //   { name: "French manicure", price: "20" },
      //   { name: "Manicure & gel nails", price: "40" },
      //   { name: "Gel polish+reaplication", price: "25" },
    ],
  },
  {
    title: "Otros servicios mencionados en IG / reviews",
    description: "Velit in dui dictum arcu felis tempor in fe",
    image: price4,
    order: { image: "order-7 md:order-8", content: "order-8 md:order-7" },
    imageAlt: "Cosmetology girl",
    services: [
      { name: "Inyecciones de B12 shots", price: "80" },
      { name: "PRP therapy", price: "75" },
      { name: "Body sculpting", price: "50" },
      //   { name: "Laser Hair Removal", price: "25" },
      //   { name: "Tattoo Removal", price: "25" },
    ],
  },
];

const ServiceList = ({
  services,
}: {
  services: { name: string; price: string }[];
}) => (
  <ul className="space-y-1 mt-6 overflow-hidden">
    {services.map((service, index) => (
      <li key={index} className="flex justify-between items-center gap-2">
        <span className="d2c_service_name">{service.name}</span>
        <div className="d2c_dotted"></div>
        <div className="flex items-center justify-between space-x-4">
          <span className="text-sm-1 text-[#8a8984] font-primary">from</span>
          <span className="font-secondary font-normal text-base text-primary">
            ${service.price}
          </span>
        </div>
      </li>
    ))}
  </ul>
);

const Pricing = () => {
  return (
    // <section className="border border-y-primary" id="d2c_pricing">
    <section className="" id="d2c_pricing">
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">See Our</h3>
          <h2 className="d2c_title">Service Prices</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
          {servicesData.map((service, index) => (
            <React.Fragment key={index}>
              <div className={service.order.image}>
                <Image
                  src={service.image}
                  className="w-full h-full object-cover"
                  data-aos="fade-in"
                  alt={service.imageAlt}
                  width={800}
                  height={600}
                />
              </div>
              <div
                className={`${
                  index % 2 === 0
                    ? "pl-0 md:pl-10 xl:pl-20"
                    : "pl-0 md:pr-10 xl:pr-20"
                } ${service.order.content}`}
              >
                <h3>{service.title}</h3>
                {/* <p className="mt-4 text-sm-1 lg:text-lg">{service.description}</p> */}
                <ServiceList services={service.services} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
