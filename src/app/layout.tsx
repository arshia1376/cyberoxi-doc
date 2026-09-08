import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import { LocaleProvider } from "@/i18n/locale";
import "./globals.css";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberoxi.com"),
  title: "CYBEROXI | آترین آذین فن‌آور",
  description:
    "شرکت دانش‌بنیان آترین آذین فن‌آور — بینایی ماشین، نرم‌افزار شهری و ماشین‌سازی صنعتی. مشکل کارخانه را بگویید؛ از صفر تا صد طراحی و تولید می‌کنیم.",
  keywords: [
    "CYBEROXI",
    "آترین آذین فن‌آور",
    "بینایی ماشین",
    "ماشین‌سازی",
    "دانش‌بنیان",
    "همدان",
  ],
  openGraph: {
    title: "CYBEROXI | آترین آذین فن‌آور",
    description:
      "بینایی ماشین، نرم‌افزار عملیاتی و ماشین صنعتی کاستوم — از خط تولید تا شهر.",
    url: "https://cyberoxi.com",
    siteName: "CYBEROXI",
    locale: "fa_IR",
    type: "website",
    images: [{ url: "/cyberoxi-mark.png" }],
  },
  icons: {
    icon: "/cyberoxi-mark.png",
    apple: "/cyberoxi-mark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const localeBoot = `(function(){try{var l=localStorage.getItem("cyberoxi-lang");if(l==="en"){var d=document.documentElement;d.lang="en";d.dir="ltr";d.classList.add("locale-en");}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBoot }} />
      </head>
      <body className="min-h-full max-w-full font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
