import ConferenceDetails from "@/components/ConferenceDetails";
import { getTranslations, setRequestLocale } from "next-intl/server";

type IIndexProps = {
  params: Promise<{ locale: string; id: string }>;
};

type Labels = {
  back: string;
  loading: string;
  headline: string;
  datesLabel: string;
  locationLabel: string;
  organizerLabel: string;
  seriesLabel: string;
  visitWebsiteLabel: string;
};

export default async function ConferenceDetailsPage(props: IIndexProps) {
  const { locale, id } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale: locale });

  return (
    <ConferenceDetails
      id={id}
      labels={{
        back: t("common.back"),
        loading: t("common.isLoading"),
        headline: t("details.headline"),
        datesLabel: t("details.datesLabel"),
        locationLabel: t("details.locationLabel"),
        organizerLabel: t("details.organizerLabel"),
        seriesLabel: t("details.seriesLabel"),
        visitWebsiteLabel: t("details.websiteLabel"),
      }}
    />
  );
}
