import ConferenceList from "@/components/ConferenceList";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useSearchParams } from 'next/navigation'
type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export default async function Index({ params }: IIndexProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale: locale, namespace: "common" });

  return (
    <ConferenceList
      translations={{
        pleaseWait: t("isLoading"),
      }}
    />
  );
}
