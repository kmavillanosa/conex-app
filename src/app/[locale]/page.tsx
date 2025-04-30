import Layout from "@/app/[locale]/conference/layout";

import ConferenceList from "@/components/ConferenceList";
import { getTranslations, setRequestLocale } from "next-intl/server";

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export default async function Index({ params }: IIndexProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale: locale, namespace: "common" });

  return (
    <Layout params={params}>
      <ConferenceList
        translations={{
          pleaseWait: t("isLoading"),
        }}
      />
    </Layout>
  );
}
