import type { APIRoute } from "astro";
import { SITE_URL } from "../data/seo";

const pages: { path: string; priority: string; changefreq: string }[] = [
	{ path: "/", priority: "1.0", changefreq: "weekly" },
	{ path: "/menu/", priority: "0.9", changefreq: "monthly" },
	{ path: "/reservation/", priority: "0.9", changefreq: "monthly" },
	{ path: "/gallery/", priority: "0.7", changefreq: "monthly" },
	{ path: "/gallery/food/", priority: "0.6", changefreq: "monthly" },
	{ path: "/gallery/ambiance/", priority: "0.6", changefreq: "monthly" },
	{ path: "/gallery/events/", priority: "0.6", changefreq: "monthly" },
	{ path: "/gallery/kitchen/", priority: "0.5", changefreq: "monthly" },
];

export const GET: APIRoute = ({ site }) => {
	const base = site ?? new URL(SITE_URL);
	const lastmod = new Date().toISOString().split("T")[0];
	const urls = pages
		.map(
			(p) => `  <url>
    <loc>${new URL(p.path, base).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
		)
		.join("\n");

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
		{ headers: { "Content-Type": "application/xml; charset=utf-8" } },
	);
};
