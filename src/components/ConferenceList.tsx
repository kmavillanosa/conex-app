"use client";

import { useQuery } from "@apollo/client";
import { GetConferencesDocument } from "@/graphql/generated/graphql";
import ConferenceCard from "@/components/ConferenceCard";
import { useMemo } from "react";
import Loading from "./Loading";
import { SortSwitcher } from "./SortSwitcher";
import { useSearchParams } from "next/navigation";
import _ from "lodash";

type Props = {
  translations: {
    pleaseWait: string;
  };
};

export default function ConferenceList({ translations }: Props) {
  const { data, loading, error } = useQuery(GetConferencesDocument);
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const sortedList = useMemo(() => {
    const sortedConferences = _.orderBy(
      data?.conferences ?? [],
      [(c) => new Date(c.endDate)],
      ["desc"]
    );

    if (filter === "location") {
      const sortLocations = _.orderBy(
        data?.conferences ?? [],
        [
          (c) => c.locations?.[0]?.country?.name?.toLowerCase() ?? "",
          (c) => c.locations?.[0]?.city?.toLowerCase() ?? "",
          (c) => c.locations?.[0]?.address?.toLowerCase() ?? "",
        ],
        ["asc", "asc", "asc"]
      );

      return {
        conferences: sortLocations,
      };
    }

    return {
      conferences: sortedConferences,
    };
  }, [data, filter]);

  if (loading) return <Loading message={translations.pleaseWait} />;

  return (
    <div>
      <SortSwitcher />
      <div className="conference-card-grid">
        {sortedList.conferences.map((conf, idx) => (
          <ConferenceCard key={idx} {...conf} />
        ))}
      </div>
    </div>
  );
}
