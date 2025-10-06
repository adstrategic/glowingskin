import React from "react";
import { useTranslations } from "next-intl";
import TestimonialClient, {
  TestimonialClientProps,
} from "./testimonial.client";

type Item = { profession: string; name: string; testimonial: string };

const Testimonial = () => {
  const t = useTranslations("Homepage.Testimonial");
  const tItems = useTranslations("Homepage.Testimonial.items");

  const header = { subtitle: t("header.subtitle"), title: t("header.title") };
  const alts = { double: t("alts.double"), right: t("alts.right") };
  const keys = ["one", "two", "three", "four"] as const;
  const items: TestimonialClientProps["items"] = keys.map(
    (key) => tItems.raw(key as never) as Item
  );

  return <TestimonialClient header={header} items={items} alts={alts} />;
};

export default Testimonial;
