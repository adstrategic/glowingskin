import Image from "next/image";
import React from "react";
import dotSmall from "@/assets/images/dot-small.png";
import dotBigger from "@/assets/images/dot-bigger.png";
import rightArrow from "@/assets/images/right-arrow.png";
import { useTranslations } from "next-intl";

const Cta2 = () => {
  const t = useTranslations("Homepage.CTA2");

  return (
    <section className="xl:py-24 2xl:py-44 bg-primary relative">
      <div className="container relative">
        <Image
          src={dotSmall}
          className="hidden lg:block max-w-14 absolute -top-16 -left-2"
          alt="Dot 3*3"
          width={56}
          height={56}
        />

        <div className="space-y-6 text-center w-full md:w-[80%] lg:w-[65%] xl:w-4/6 mx-auto">
          <h2 className="d2c_subtitle text-[#e6c6c6]">{t("title")}</h2>
          <p className="text-[#6E6E6E]">{t("p")}</p>
          <a
            href="https://glowingskinbar.glossgenius.com/services"
            target="_blank"
            className="d2c_btn d2c_secondary_btn "
          >
            {t("cta")}
            <Image src={rightArrow} alt="Right Arrow" width={24} height={24} />
          </a>
        </div>

        <Image
          src={dotBigger}
          className="hidden xl:block max-w-20 absolute -bottom-20 -right-16"
          alt="Dot 4*4"
          width={80}
          height={80}
        />
      </div>
    </section>
  );
};

export default Cta2;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
