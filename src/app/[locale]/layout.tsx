import type { Metadata } from "next";
import { Cormorant_Infant, Poppins } from "next/font/google";
import "@/assets/css/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "aos/dist/aos.css";
import AOSInit from "@/components/shared/aos-init";
import favIcon from "@/assets/images/logo/favicon.png";
import WhatsappButton from "@/components/shared/whatsapp-button";

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
  openGraph: {
    title: "PureGlamy - Beauty Salon Next.js Template for Modern Salons",
    description:
      "Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!",
    images: [
      {
        url: "https://designtocodes.com/wp-content/uploads/2025/04/PureGlamy-Beauty-Salon-Next.js-Template-for-Modern-Salons.jpg",
      },
    ],
  },
  title: "PureGlamy - Beauty Salon Next.js Template for Modern Salons",
  description:
    "Beauty salon Next.JS template that upgrades your beauty salon's website with PureGlamy - Beauty Salon Next.js Template for Modern Salons. Purchase the best!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${cormorantInfant.className} ${poppins.className}`}
      >
        <AOSInit />
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
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
