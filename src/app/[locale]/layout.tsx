import type { Metadata } from "next";
import { Cormorant_Infant, Poppins } from "next/font/google";
import "@/assets/css/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "aos/dist/aos.css";
import AOSInit from "@/components/shared/aos-init";
import glwf from "@/assets/images/logo/glwf.png";
import complg from "@/assets/images/logo/complg.png"; // 🔹 Imagen para compartir el link
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
  icons: {
    icon: glwf.src, // 🔸 Este sigue siendo el favicon del navegador
  },
  title:
    "Glowing Skin Beauty Bar - Luxury Skincare & Aesthetic Treatments in Miami",
  description:
    "From Laser Hair Removal to Microneedling with Exosomes & PRP, experience the best in non-invasive skin rejuvenation in South Florida!",

  // 🔹 Imagen para cuando se comparte el link (Open Graph y redes sociales)
  openGraph: {
    title: "Glowing Skin Beauty Bar - Miami Luxury Skincare",
    description:
      "Experience professional skin rejuvenation and luxury aesthetic treatments in Miami.",
    url: "https://glowingskinbb.com", // ⚠️ Reemplaza con tu dominio real
    siteName: "Glowing Skin Beauty Bar",
    images: [
      {
        url: complg.src,
        width: 1200,
        height: 630,
        alt: "Glowing Skin Beauty Bar Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🔹 También añadimos metadata para Twitter (si compartes en X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Glowing Skin Beauty Bar - Miami Luxury Skincare",
    description:
      "From Laser Hair Removal to Microneedling with Exosomes & PRP, experience the best in non-invasive skin rejuvenation.",
    images: [complg.src],
  },
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
