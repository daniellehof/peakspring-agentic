import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PeakSpring® | Hydrogen-Rich Water — Medical Grade Ionizers",
  description:
    "Hydrogen-rich water, engineered to ISO 13485 medical-grade standards. Backed by 3,000+ studies. 15-25 year lifespan. Book a free consultation.",
  keywords: ["hydrogen water", "water ionizer", "Enagic", "ISO 13485", "molecular hydrogen", "health", "longevity", "PeakSpring", "Kangen Water"],
  openGraph: {
    title: "PeakSpring® | Hydrogen-Rich Water",
    description: "Hydrogen-rich water, engineered to medical-grade standards.",
    url: "https://peakspring.nl",
    siteName: "PeakSpring",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PeakSpring",
              url: "https://peakspring.nl",
              description: "Medical-grade hydrogen-rich water ionizers. ISO 13485 certified.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31 30 207 2760",
                contactType: "customer service",
                email: "support@peakspring.nl",
                availableLanguage: ["English", "Dutch"],
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} min-h-screen bg-background font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}