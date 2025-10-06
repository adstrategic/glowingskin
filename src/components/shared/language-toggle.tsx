"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import usaflag from "@/assets/images/usaflag.svg";
import spainflag from "@/assets/images/spainflag.svg";
// import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  const isEnglishDisabled = locale === "en";

  const isSpanishDisabled = locale === "es";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <Button className="w-max mx-auto" variant="ghost">
          <span className="sr-only">
            {locale === "en" ? "Toggle Language" : "Cambiar Lenguaje"}
          </span>
          {locale === "en" ? (
            <div className="flex items-center gap-2">
              <Image src={usaflag} alt="" width={40} />
              {/* <p className="xl:text-lg">En</p> */}
              {/* <ChevronDown /> */}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Image src={spainflag} alt="" width={40} />
              {/* <p className="xl:text-lg">Es</p> */}
              {/* <ChevronDown /> */}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#e6c6c6]" align="end">
        <DropdownMenuItem
          disabled={isEnglishDisabled}
          className="cursor-pointer"
          onClick={() => onSelectChange("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={isSpanishDisabled}
          className="cursor-pointer"
          onClick={() => onSelectChange("es")}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
