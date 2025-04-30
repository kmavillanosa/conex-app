import createNextIntlPlugin from "next-intl/plugin";
import "./src/libs/Env";

const withNextIntl = createNextIntlPlugin("./src/libs/i18n.ts");

/** @type {import('next').NextConfig} */
export default withNextIntl({
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  reactStrictMode: true,
});
