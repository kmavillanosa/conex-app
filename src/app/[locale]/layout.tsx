import type { Metadata } from "next";
import { routing } from "@/libs/i18nNavigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "@/styles/globals.css";
import "@/styles/styles.scss";
import { ApolloProvider } from "@/graphql/graphQLClient";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Index(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <title>{"Conferrence explorer"}</title>
      <body suppressHydrationWarning>
        <ApolloProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {props.children}
          </NextIntlClientProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
