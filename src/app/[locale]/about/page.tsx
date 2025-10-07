import AboutHero from "@/components/pages/about/hero";
import CeoHistory from "@/components/pages/about/ceo-history";
import AboutUsSection from "@/components/pages/about/about-us";
import Cta from "@/components/pages/home/cta";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function About() {
  return (
    <>
      <AboutHero />
      <CeoHistory />
      <AboutUsSection />
      <Cta />
    </>
  );
}
