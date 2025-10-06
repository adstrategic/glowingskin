import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import AnimatedCounter from "@/components/ui/animated-counter";
import aboutUsImage from "@/assets/images/Why-Choose-01.jpg";
import missionImage from "@/assets/images/Why-Choose-02.jpg";
import valuesImage from "@/assets/images/Why-Choose-03.jpg";
import cardImage1 from "@/assets/images/Features-01.jpg";
import cardImage2 from "@/assets/images/Features-02.jpg";
import cardImage3 from "@/assets/images/Features-03.jpg";
import cardImage4 from "@/assets/images/Features-04.jpg";
import dotSmall from "@/assets/images/dot-small.png";
import dotBigger from "@/assets/images/dot-bigger.png";

const AboutUsSection = () => {
  const t = useTranslations("AboutPage.AboutUs");
  return (
    <section className="py-20 md:py-28 lg:py-32" id="d2c_about_us">
      <div className="container relative">
        <Image
          src={dotSmall}
          className="hidden lg:block max-w-14 absolute -top-16 -left-2"
          alt={t("decor.dotSmallAlt")}
          width={56}
          height={56}
        />

        {/* Header */}
        <div className="d2c_header">
          <h2 className="d2c_subtitle">{t("header.subtitle")}</h2>
          <p className="text-lg">{t("header.paragraph")}</p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="space-y-6 text-center">
            <div className="relative overflow-hidden h-[300px]">
              <Image
                src={aboutUsImage}
                className="w-full h-full object-cover"
                alt={t("mission.imageAlt")}
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-secondary text-2xl xl:text-3xl font-semibold">
              {t("mission.title")}
            </h3>
            <p className="text-base">{t("mission.paragraph")}</p>
          </div>

          {/* Vision */}
          <div className="space-y-6 text-center">
            <div className="relative overflow-hidden h-[300px]">
              <Image
                src={missionImage}
                className="w-full h-full object-cover"
                alt={t("vision.imageAlt")}
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-secondary text-2xl xl:text-3xl font-semibold">
              {t("vision.title")}
            </h3>
            <p className="text-base">{t("vision.paragraph")}</p>
          </div>

          {/* Values */}
          <div className="space-y-6 text-center md:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden h-[300px]">
              <Image
                src={valuesImage}
                className="w-full h-full object-cover"
                alt={t("values.imageAlt")}
                width={400}
                height={300}
              />
            </div>
            <h3 className="text-secondary text-2xl xl:text-3xl font-semibold">
              {t("values.title")}
            </h3>
            <p className="text-base">{t("values.paragraph")}</p>
          </div>
        </div>

        {/* Why Choose Us Statistics Section */}
        <div className="mt-16 lg:mt-24 bg-primary py-16 lg:py-20 px-8 lg:px-12 text-white text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-secondary rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-secondary rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-secondary rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
                {t("whyChoose.badge")}
              </span>
            </div>

            <h3 className="text-[#e6c6c6] text-4xl lg:text-5xl xl:text-6xl font-light mb-4 font-primary">
              {t("whyChoose.title")}
            </h3>

            <p className="text-[#b8b8b8] text-lg max-w-4xl mx-auto mb-12">
              {t("whyChoose.paragraph")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Happy Clients Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage1}
                  alt={t("cards.happyClients.imageAlt")}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={30} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      {t("cards.happyClients.label")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Years Experience Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage2}
                  alt={t("cards.yearsExperience.imageAlt")}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      {t("cards.yearsExperience.label")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Offered Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage3}
                  alt={t("cards.servicesOffered.imageAlt")}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={35} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      {t("cards.servicesOffered.label")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Awards Won Card */}
              <div className="relative rounded-2xl overflow-hidden h-[280px] lg:h-[320px] group cursor-pointer">
                <Image
                  src={cardImage4}
                  alt={t("cards.awardsWon.imageAlt")}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={320}
                />
                {/* Overlay solo en la parte inferior */}
                <div className="absolute bottom-2 rounded-4xl left-2 right-2 h-32 bg-black/25 backdrop-blur-[2px]"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex items-end justify-between">
                  <div className="flex-1">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-1 font-primary">
                      <AnimatedCounter end={18} suffix="+" />
                    </div>
                    <p className="text-white text-sm font-medium opacity-90">
                      {t("cards.awardsWon.label")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={dotBigger}
          className="hidden xl:block max-w-20 absolute -bottom-20 -right-16"
          alt={t("decor.dotBiggerAlt")}
          width={80}
          height={80}
        />
      </div>
    </section>
  );
};

export default AboutUsSection;

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
