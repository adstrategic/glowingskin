import Image, { StaticImageData } from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import portfolio1 from "@/assets/images/Portfolio-01.jpg";
import portfolio2 from "@/assets/images/Portfolio-02.jpg";
import portfolio3 from "@/assets/images/Portfolio-03.jpg";
import portfolio4 from "@/assets/images/Portfolio-04.jpg";

type ItemKey = "one" | "two" | "three" | "four";
type PortfolioItemText = { description: string };

// Keep only presentational data: images and order classes. Texts via i18n.
const portfolioData: {
  image: StaticImageData;
  key: ItemKey;
  imageOrder: string;
  textOrder: string;
}[] = [
  {
    image: portfolio1,
    key: "one",
    imageOrder: "order-1",
    textOrder: "order-2",
  },
  {
    image: portfolio2,
    key: "two",
    imageOrder: "order-3 md:order-4",
    textOrder: "order-4 md:order-3",
  },
  {
    image: portfolio3,
    key: "three",
    imageOrder: "order-5",
    textOrder: "order-6",
  },
  {
    image: portfolio4,
    key: "four",
    imageOrder: "order-7 md:order-8",
    textOrder: "order-8 md:order-7",
  },
];

const Portfolio = () => {
  const t = useTranslations("Homepage.Portfolio");
  const tItems = useTranslations("Homepage.Portfolio.items");
  const items = (["one", "two", "three", "four"] as const).reduce(
    (acc, key) => {
      acc[key] = tItems.raw(key as never) as PortfolioItemText;
      return acc;
    },
    {} as Record<ItemKey, PortfolioItemText>
  );
  return (
    <section
      className="bg-[url('../images/star-izq.png'),_url('../images/star-der.png')] bg-no-repeat bg-[position:0px_100%,100%_4%]"
      id="d2c_portfolio"
    >
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">{t("header.subtitle")}</h3>
          <h2 className="d2c_title">{t("header.title")}</h2>
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
                  {items[item.key].description}
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
