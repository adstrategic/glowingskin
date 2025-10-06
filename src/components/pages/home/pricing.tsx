import Image, { StaticImageData } from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import price1 from "@/assets/images/Price-01.jpg";
import price2 from "@/assets/images/Price-02.jpg";
import price3 from "@/assets/images/Price-03.jpg";
import price4 from "@/assets/images/Price-04.jpg";

type SectionKey = "facials" | "body" | "laser" | "other";
type SectionService = { name: string; price: string };
type Section = { title: string; imageAlt: string; services: SectionService[] };

// Keep only presentational data here (images, order/classnames). All text comes from i18n.
const servicesData: {
  key: SectionKey;
  image: StaticImageData;
  order: { image: string; content: string };
}[] = [
  {
    key: "facials",
    image: price1,
    order: { image: "order-1", content: "order-2" },
  },
  {
    key: "body",
    image: price2,
    order: { image: "order-3 md:order-4", content: "order-4 md:order-3" },
  },
  {
    key: "laser",
    image: price3,
    order: { image: "order-5", content: "order-6" },
  },
  {
    key: "other",
    image: price4,
    order: { image: "order-7 md:order-8", content: "order-8 md:order-7" },
  },
];

const ServiceList = ({
  services,
  fromLabel,
}: {
  services: { name: string; price: string }[];
  fromLabel: string;
}) => (
  <ul className="space-y-1 mt-6 overflow-hidden">
    {services.map((service, index) => (
      <li key={index} className="flex justify-between items-center gap-2">
        <span className="d2c_service_name">{service.name}</span>
        <div className="d2c_dotted"></div>
        <div className="flex items-center justify-between space-x-4">
          <span className="text-sm-1 text-[#8a8984] font-primary">
            {fromLabel}
          </span>
          <span className="font-secondary font-normal text-base text-primary">
            ${service.price}
          </span>
        </div>
      </li>
    ))}
  </ul>
);

const Pricing = () => {
  const t = useTranslations("Homepage.Pricing");
  const tSections = useTranslations("Homepage.Pricing.sections");
  const fromLabel = t("fromLabel");
  const sections = (["facials", "body", "laser", "other"] as const).reduce(
    (acc, key) => {
      acc[key] = tSections.raw(key as never) as Section;
      return acc;
    },
    {} as Record<SectionKey, Section>
  );

  return (
    // <section className="border border-y-primary" id="d2c_pricing">
    <section className="" id="d2c_pricing">
      <div className="container">
        <div className="d2c_header">
          <h3 className="d2c_subtitle">{t("header.subtitle")}</h3>
          <h2 className="d2c_title">{t("header.title")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
          {servicesData.map((service, index) => (
            <React.Fragment key={index}>
              <div className={service.order.image}>
                <Image
                  src={service.image}
                  className="w-full h-full object-cover"
                  data-aos="fade-in"
                  alt={sections[service.key].imageAlt}
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
                <h3>{sections[service.key].title}</h3>
                {/* description reserved if needed: t(`sections.${service.key}.description`) */}
                <ServiceList
                  services={sections[service.key].services}
                  fromLabel={fromLabel}
                />
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
