"use client";

import * as en from "@/data/en";
import * as fa from "@/data/site";
import { useLocale } from "@/i18n/locale";

export function useContent() {
  const { locale, dir, setLocale } = useLocale();
  return {
    ...(locale === "en" ? en : fa),
    locale,
    dir,
    setLocale,
  };
}
