import { useLocale, useTranslations } from "next-intl";
import HeaderClient, { HeaderClientProps } from "./header.client";
import { LanguageToggle } from "./language-toggle";

const navConfig = [
  { id: "", key: "home" },
  { id: "about", key: "about" },
  { id: "services", key: "services" },
] as const;

const Header = () => {
  const t = useTranslations("Shared.Header");
  const locale = useLocale();

  const navItems: HeaderClientProps["navItems"] = navConfig.map((item) => ({
    id: item.id,
    label: t(`nav.${item.key}`),
  }));

  const alts: HeaderClientProps["alts"] = {
    logo: t("alts.logo"),
    mobileLogo: t("alts.mobileLogo"),
  };

  return (
    <HeaderClient
      navItems={navItems}
      alts={alts}
      switcher={<LanguageToggle locale={locale} />}
    />
  );
};

export default Header;
