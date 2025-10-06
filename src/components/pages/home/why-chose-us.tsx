import Image, { StaticImageData } from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import whyChoose1 from "@/assets/images/Why-Choose-05.jpg";
import whyChoose2 from "@/assets/images/Why-Choose-07.jpg";
import whyChoose3 from "@/assets/images/Why-Choose-06.jpg";
import whyChoose4 from "@/assets/images/Why-Choose-08.jpg";

type ItemKey = "expert" | "technology" | "personalized" | "houseCalls";
type WhyItem = { title: string };

// Keep only presentational data (images, delays). Titles come from i18n.
const whyChooseData: { image: StaticImageData; key: ItemKey; delay: number }[] =
  [
    {
      image: whyChoose1,
      key: "expert",
      delay: 100,
    },
    {
      image: whyChoose2,
      key: "technology",
      delay: 200,
    },
    {
      image: whyChoose3,
      key: "personalized",
      delay: 300,
    },
    {
      image: whyChoose4,
      key: "houseCalls",
      delay: 400,
    },
  ];

const WhyChooseUs = () => {
  const t = useTranslations("Homepage.WhyChoose");
  const tItems = useTranslations("Homepage.WhyChoose.items");
  const items = (
    ["expert", "technology", "personalized", "houseCalls"] as const
  ).reduce((acc, key) => {
    acc[key] = tItems.raw(key as never) as WhyItem;
    return acc;
  }, {} as Record<ItemKey, WhyItem>);
  return (
    <section className="lg:bg-[url('../images/star-izq.png'),_url('../images/star-der.png')] bg-no-repeat bg-[position:0px_100%,100%_4%]">
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">{t("header.subtitle")}</h3>
          <h2 className="d2c_title">{t("header.title")}</h2>
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
                  alt={`${items[item.key].title} Image`}
                  width={800}
                  height={532}
                />
                <h3 className="text-secondary pt-6 text-center md:text-left">
                  {items[item.key].title}
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
                  alt={`${items[item.key].title} Image`}
                  width={800}
                  height={532}
                />
                <h3 className="text-secondary pt-6 text-center md:text-left">
                  {items[item.key].title}
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
