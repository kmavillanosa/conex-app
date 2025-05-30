import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18nNavigation';

// Using internationalization in Server Components
export default getRequestConfig(async ({ requestLocale }) => {
  // maps `[locale]` segment
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});