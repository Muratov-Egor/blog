export const i18n = {
  defaultLocale: "ru",
  //todo ENGLISH
  // locales: ["ru", "en"],
  locales: ["ru"],
} as const;
export type Locale = (typeof i18n)["locales"][number];

