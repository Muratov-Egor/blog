import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  ru: () => import("./dictionaries/ru/index.json").then((module) => module.default),
  en: () => import("./dictionaries/en/index.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.ru();
