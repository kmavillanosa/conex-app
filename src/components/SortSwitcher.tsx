"use client";

import type { ChangeEventHandler } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const SortSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const params = new URLSearchParams();
    params.set("filter", event.target.value);
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  const items: {
    label: string;
    value: string;
  }[] = [
    {
      label: "Date",
      value: "date",
    },
    {
      label: "Location",
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
