import type { MetadataRoute } from "next";
import { routesList } from "@/routes";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

export default function sitemap(): MetadataRoute.Sitemap {
    return routesList.map((route) => ({
        url: `${websiteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
    }));
}
