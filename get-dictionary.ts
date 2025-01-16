import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  ru: () => import("./dictionaries/ru/common.json").then((module) => module.default),
  en: () => import("./dictionaries/en/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ru();
