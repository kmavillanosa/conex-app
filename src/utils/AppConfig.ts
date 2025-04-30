import type { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode = "as-needed";

// i placed referrences here for the local of three different languages
export const AppConfig = {
  name: "Conferrence explorer",
  locales: ["en", "fi", "dk", "jp"],
  defaultLocale: "en",
  localePrefix,
};
