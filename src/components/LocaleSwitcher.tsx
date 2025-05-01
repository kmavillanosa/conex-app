"use client";

import type { ChangeEventHandler } from "react";
import { routing, usePathname } from "@/libs/i18nNavigation";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}${pathname}`);
    router.refresh();
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      aria-label="lang-switcher"
      style={{
        fontSize: "18px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {routing.locales.map((elt) => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitcher;
