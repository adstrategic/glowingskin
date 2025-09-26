import Image from "next/image";
import React from "react";
import portfolio1 from "@/assets/images/Portfolio-01.jpg";
import portfolio2 from "@/assets/images/Portfolio-02.jpg";
import portfolio3 from "@/assets/images/Portfolio-03.jpg";
import portfolio4 from "@/assets/images/Portfolio-04.jpg";

const portfolioData = [
  {
    image: portfolio1,
    description:
      "Elegant bridal hair and makeup, tailored to perfection for your special day",
    imageOrder: "order-1",
    textOrder: "order-2",
  },
  {
    image: portfolio2,
    description:
      "A peek inside our luxurious salon space, where beauty and relaxation meet",
    imageOrder: "order-3 md:order-4",
    textOrder: "order-4 md:order-3",
  },
  {
    image: portfolio3,
    description: "Bold and glamorous nail art designed to make a statement",
    imageOrder: "order-5",
    textOrder: "order-6",
  },
  {
    image: portfolio4,
    description:
      "Classic French manicure with a modern twist of style and grace",
    imageOrder: "order-7 md:order-8",
    textOrder: "order-8 md:order-7",
  },
];

const Portfolio = () => {
  return (
    <section
      className="bg-[url('../images/flower-left.png'),_url('../images/flower-right.png')] bg-no-repeat bg-[position:0px_100%,100%_4%]"
      id="d2c_portfolio"
    >
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">See the Magic We Create</h3>
          <h2 className="d2c_title">Our Glamorous Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-2 bg-secondary text-white">
          {portfolioData.map((item, index) => (
            <React.Fragment key={index}>
              <div className={item.imageOrder}>
                <Image
                  src={item.image}
                  className="h-[350px] lg:h-[532px] w-full object-cover"
                  data-aos="fade-in"
                  alt={`Portfolio Image ${index + 1}`}
                  width={800}
                  height={532}
                />
              </div>
              <div className={`p-10 flex items-end ${item.textOrder}`}>
                <p className="d2c_portfolio_description text-white ">
                  {item.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
