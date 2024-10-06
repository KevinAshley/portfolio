import type { MetadataRoute } from "next";
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/"],
            },
        ],
        sitemap: `${websiteUrl}/sitemap.xml`,
    };
}
