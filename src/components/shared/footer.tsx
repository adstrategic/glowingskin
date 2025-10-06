import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "@/assets/images/glowingskingbbiconwhite.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Shared.Footer");
  return (
    <footer className="bg-primary">
      <div className="container py-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="d2c_footer_content col-start-1 col-span-12 md:col-start-1 md:col-span-6 lg:col-span-4 order-2 lg:order-1">
            <h3 className="d2c_footer_title no-animation">
              {t("contactTitle")}
            </h3>
            <hr className="border-secondary w-16 mt-1 mx-auto border-[2px] mb-5" />
            <p className="break-all no-animation">{t("email")}</p>
            <p className="w-[70%] mx-auto no-animation">{t("address")}</p>
          </div>

          <div className="d2c_footer_content col-start-1 col-span-12 lg:col-start-5 lg:col-span-4 order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="text-center">
              <Link href="./index.html">
                <Image
                  src={footerLogo}
                  className="mx-auto max-w-[290px] inline-block"
                  alt={t("alts.footerLogo")}
                />
              </Link>
            </div>
            <div className="d2c_social_link mt-6">
              <Link href="#">
                <span>
                  <FaFacebookF />
                </span>
              </Link>

              <Link href="#">
                <span>
                  <FaYoutube />
                </span>
              </Link>

              <Link href="#">
                <span>
                  <FaInstagram />
                </span>
              </Link>
            </div>
          </div>

          <div className="d2c_footer_content col-start-1 col-span-12 md:col-start-7 md:col-span-6 lg:col-start-9 lg:col-span-4 order-3">
            <h3 className="d2c_footer_title no-animation">{t("hoursTitle")}</h3>
            <hr className="border-secondary w-28 mx-auto mt-1 border-[2px] mb-5" />
            <p className="no-animation">{t("hours.workingDays")}</p>
            <p className="no-animation">{t("hours.saturday")}</p>
            <p className="no-animation">{t("hours.sunday")}</p>
          </div>
        </div>
      </div>

      <div className="border-t d2c_copyright">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
          <p className="text-[#818080] text-[13px] lg:text-base text-center md:text-left transition-all no-animation">
            {t("copyright.textPrefix")}{" "}
            <Link
              href="#"
              className="font-semibold hover:text-white transition-all"
            >
              {t("copyright.brand")}
            </Link>
            {t("copyright.textSuffix")}
          </p>
          <ul className="flex justify-center md:justify-end gap-5 no-animation">
            <li>
              <Link href="#">{t("links.privacy")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.terms")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
