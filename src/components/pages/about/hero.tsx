import React from "react";
import profile from "@/assets/images/profile-bg.jpg";
import Image from "next/image";
import rightArrow from "@/assets/images/right-arrow.png";
import { useTranslations } from "next-intl";

const ComponentName = () => {
  const t = useTranslations("AboutPage.Hero");
  return (
    <div className="">
      <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-purple-900 uppercase">
                {t("brand")}
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                {t("title")}
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                {t("description")}
              </p>

              <a
                href="https://glowingskinbar.glossgenius.com/services"
                target="_blank"
                className="mt-8 d2c_btn d2c_primary_btn"
              >
                {t("cta")}
                <Image
                  src={rightArrow}
                  alt={t("alts.rightArrow")}
                  width={24}
                  height={24}
                />
              </a>
            </div>

            <div>
              <img
                className="w-full max-w-[450px] mx-auto"
                src={profile.src}
                alt={t("alts.profile")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComponentName;
