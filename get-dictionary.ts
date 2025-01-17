import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  ru: () => import("./dictionaries/ru/index").then((module) => module.default),
  en: () => import("./dictionaries/en/index").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ru();
