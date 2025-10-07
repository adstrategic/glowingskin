import Cta from "@/components/pages/home/cta";
import Cta2 from "@/components/pages/home/Cta2";
import Features from "@/components/pages/home/features";
import Portfolio from "@/components/pages/home/portfolio";
import Pricing from "@/components/pages/home/pricing";
import WhyChooseUs from "@/components/pages/home/why-chose-us";
import ServicesHero from "@/components/pages/services/hero";
import { Metadata } from "next";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ServicesPage.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Services() {
  const t = useTranslations("ServicesPage.Hero");

  return (
    <>
      <ServicesHero
        title={t("title")}
        paragraph={t("description")}
        cta={t("cta")}
      />
      <Pricing />
      <Cta />
      <Features />
      <WhyChooseUs />
      <Portfolio />
      <Cta2 />
    </>
  );
}

/* 
    Template Name: PureGlamy - Beauty Salon Next.js Template for Modern Salons
    Template URL: https://designtocodes.com/product/pureglamy-beauty-salon-next-js-template-for-modern-salons
    Description: Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: PureGlamy | Next.js | Portfolio Template
*/
