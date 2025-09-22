import Image from "next/image";
import React from "react";
import featureImg1 from "@/assets/images/Features-04.jpg";
import featureImg2 from "@/assets/images/Features-05.jpg";
import featureImg3 from "@/assets/images/Features-06.jpg";

const featuresData = [
  {
    image: featureImg1.src,
    title: "Face",
    description: "Facial Treatments",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    image: featureImg2.src,
    title: "Body",
    description: "Body remodeling",
    gridClass:
      "col-start-1 md:col-start-7 col-span-12 md:col-span-6 lg:col-start-5 lg:col-span-4",
  },
  {
    image: featureImg3.src,
    title: "Laser",
    description: "Depilación láser",
    gridClass:
      "col-span-12 md:col-start-4 md:col-span-6 lg:col-start-9 lg:col-span-4",
  },
];

const Features = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-6 justify-center">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`d2c_features_card ${feature.gridClass}`}
            >
              <Image
                src={feature.image}
                alt="Features Image"
                className="w-auto h-auto"
                width={500}
                height={500}
              />
              <div className="d2c_features_content bg-gradient-to-r from-transparent via-30% via-transparent to-white p-4">
                <h5 className="d2c_subtitle">{feature.title}</h5>
                <p className="uppercase text-primary text-sm-1 w-full text-right">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
