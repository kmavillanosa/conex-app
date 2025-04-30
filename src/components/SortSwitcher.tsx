"use client";

import type { ChangeEventHandler } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const SortSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const locale = searchParams.get("locale");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const params = new URLSearchParams();
    params.set("filter", event.target.value);
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  const t = useTranslations();

  const items: {
    label: string;
    value: string;
  }[] = [
    {
      label: t("sort.date"),
      value: "date",
    },
    {
      label: t("sort.location"),
      value: "location",
    },
  ];

  return (
    <select
      defaultValue={filter ?? "date"}
      onChange={handleChange}
      aria-label="lang-switcher"
      style={{
        fontSize: "18px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {items.map((elt) => (
        <option key={elt.value} value={elt.value}>
          {elt.label.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
