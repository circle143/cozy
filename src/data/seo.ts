import { social } from "./social";

/** Production URL. Keep in sync with `site` in astro.config.mjs. */
export const SITE_URL = "https://cozylounge.in";

export const SITE_NAME = "Cozy - The Casual Lounge";

export const DEFAULT_DESCRIPTION =
	"Cozy - The Casual Lounge in Spectrum Metro Mall, Sector 75, Noida. Tandoori platters, signature cocktails, live music and party venues. Open daily 12 PM - 1 AM. Book a table online.";

export const business = {
	name: SITE_NAME,
	alternateName: "Cozy Lounge",
	phone: "+91-9266158606",
	email: "info@cozylounge.in",
	priceRange: "₹₹",
	cuisines: ["North Indian", "Mughlai", "Chinese", "Continental", "Cocktails"],
	address: {
		streetAddress: "4th Floor, Tower-C, Spectrum Metro Mall, Sector-75",
		addressLocality: "Noida",
		addressRegion: "Uttar Pradesh",
		postalCode: "201301",
		addressCountry: "IN",
	},
	geo: {
		latitude: 28.572858,
		longitude: 77.376941,
	},
	mapUrl: "https://maps.google.com/?cid=13886179833247965580",
	opens: "12:00",
	closes: "01:00",
	sameAs: [
		social.instagram,
		"https://www.zomato.com/ncr/cozy-the-casual-lounge-sector-75-noida",
	],
};
