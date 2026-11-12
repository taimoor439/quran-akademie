import "./globals.css";
import { assetPath } from "@/lib/asset";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { LocaleProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsConsent from "@/components/AnalyticsConsent";

export const metadata = {
  title: "Online Quran — Online Quran Classes for Families in Germany",
  description:
    "Live 1-to-1 Quran classes online for kids and adults in Germany. Certified tutors, female teachers available, after-school slots in Germany time. Book a free trial class.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="lk9u1pDHscgKwY3Xshevgr3xP0pRkA5y_cp0ASi6kmU"
        />
        <link rel="icon" type="image/svg+xml" href={assetPath("/icon.svg")} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics (GA4) with consent mode: analytics_storage
            defaults to denied, so no analytics cookies are set until
            the visitor accepts in the cookie banner (see
            AnalyticsConsent + CookieBanner). */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','default',{'analytics_storage':'denied'});gtag('config','${GA_MEASUREMENT_ID}');`,
          }}
        />
      </head>
      <body>
        <AnalyticsConsent />
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </LocaleProvider>
      </body>
    </html>
  );
}
