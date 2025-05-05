import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/utils/Helpers";

// added this so that the search engine can easily index this webpage
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${getBaseUrl()}/conference`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
