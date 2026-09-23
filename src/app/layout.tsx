import type { Metadata } from "next";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

const SITE_URL = "https://uncleyoon.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Uncle Yoon Korean Restaurant | Korean Restaurant in Melbourne",
  description:
    "Discover Uncle Yoon Korean Restaurant on Russell Street, Melbourne, serving Korean favourites, comforting classics and dishes made to share.",
  openGraph: {
    title: "Uncle Yoon Korean Restaurant | Korean Restaurant in Melbourne",
    description:
      "Discover Uncle Yoon Korean Restaurant on Russell Street, Melbourne, serving Korean favourites, comforting classics and dishes made to share.",
    url: SITE_URL,
    siteName: "Uncle Yoon Korean Restaurant",
    images: ["/media/hero-poster.jpg"],
    locale: "en_AU",
    type: "website",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Uncle Yoon Korean Restaurant",
  servesCuisine: "Korean",
  telephone: "+61406824200",
  address: {
    "@type": "PostalAddress",
    streetAddress: "205–207 Russell St",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3000",
    addressCountry: "AU",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "12:00",
    closes: "22:00",
  },
  hasMap: "https://maps.app.goo.gl/ZJ3NibjazkBm3WoN7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="bg-parchment text-midnight antialiased">{children}</body>
    </html>
  );
}
