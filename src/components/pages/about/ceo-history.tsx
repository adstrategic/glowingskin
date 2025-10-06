import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import ceoImage from "@/assets/images/about.jpg";

const CeoHistory = () => {
  const t = useTranslations("AboutPage.CeoHistory");
  return (
    <section className="py-20 md:py-28 lg:py-32 " id="d2c_ceo_history">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-10 lg:gap-6">
          <div className="space-y-4 xl:space-y-10 col-start-1 col-span-12 md:col-span-6 lg:col-span-5">
            <h2 className="text-secondary text-[32px] xl:text-[40px] leading-tight">
              {t("title")}
            </h2>
            <p className="text-sm-1 xl:text-lg">{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <div className="mt-8 bg-primary p-6 text-white">
              <blockquote className="text-lg italic">{t("quote")}</blockquote>
              <cite className="block mt-4 text-secondary font-semibold">
                {t("cite")}
              </cite>
            </div>
          </div>

          <div className="col-start-1 md:col-start-7 lg:col-start-8 col-span-12 md:col-span-6 lg:col-span-7 gap-6 relative">
            <div className="w-full lg:w-10/12 xl:w-full mx-auto relative">
              <Image
                src={ceoImage}
                className="h-[400px] lg:h-[500px] xl:h-[630px] w-full object-cover"
                alt={t("imageAlt")}
                width={800}
                height={630}
                priority
              />
              <h2 className="d2c_title text-4xl lg:text-5xl xl:text-9xl absolute -bottom-0 left-0 right-0 leading-none text-black bg-gradient-to-b from-transparent to-[#e6c6c6]">
                {t("nameOverlay")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoHistory;
