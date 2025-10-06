import type { Metadata } from "next";
import { Cormorant_Infant, Poppins } from "next/font/google";
import "@/assets/css/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "aos/dist/aos.css";
import AOSInit from "@/components/shared/aos-init";
import favIcon from "@/assets/images/logo/favicon.png";
import WhatsappButton from "@/components/shared/whatsapp-button";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  icons: {
    icon: favIcon.src,
  },
  title: "PureGlamy - Beauty Salon Next.js Template for Modern Salons",
  description:
    "Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning={true}
        className={`${cormorantInfant.className} ${poppins.className}`}
      >
        <NextIntlClientProvider>
          <AOSInit />
          <Header />
          {children}
          <Footer />
          <WhatsappButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
