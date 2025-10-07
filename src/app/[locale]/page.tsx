import CeoHistory from "@/components/pages/about/ceo-history";
import About from "@/components/pages/home/about";
import Cta from "@/components/pages/home/cta";
import Cta2 from "@/components/pages/home/Cta2";
import Features from "@/components/pages/home/features";
import Hero from "@/components/pages/home/hero";
import Portfolio from "@/components/pages/home/portfolio";
import Pricing from "@/components/pages/home/pricing";
import Testimonial from "@/components/pages/home/testimonial";
import WhyChooseUs from "@/components/pages/home/why-chose-us";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Homepage.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <>
      <Hero
        title={t("Hero.title")}
        paragraph={t("Hero.paragraph")}
        cta={t("Hero.cta")}
      />
      <Features />
      <About />
      <Cta />
      <Pricing />
      <WhyChooseUs />
      <Cta2 />
      <Portfolio />
      <CeoHistory />
      <Testimonial />
    </>
  );
}
