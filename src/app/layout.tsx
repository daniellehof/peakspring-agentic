import type { Metadata } from "next";
import "./globals.css";

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
    images: [{ url: "https://cdn.prod.website-files.com/69798387493c019bcbc16fc7/69798387493c019bcbc17034_logo.webp", width: 179, height: 40, alt: "PeakSpring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakSpring® | Hydrogen-Rich Water",
    description: "Hydrogen-rich water, engineered to medical-grade standards.",
    images: ["https://cdn.prod.website-files.com/69798387493c019bcbc16fc7/69798387493c019bcbc17034_logo.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
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
      <body className="min-h-screen bg-[#fafafa] font-body antialiased" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}