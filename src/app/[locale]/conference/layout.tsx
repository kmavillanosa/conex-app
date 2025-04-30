import { LocaleSwitcher } from "@/components/LocalSwitcher";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div className="app-layout">
      <header className="app-layout__header">
        <h1 className="app-layout__title">{t("appName")}</h1>
        <div>
          <LocaleSwitcher />
        </div>
      </header>
      <main className="app-layout__main">{props.children}</main>
    </div>
  );
}
