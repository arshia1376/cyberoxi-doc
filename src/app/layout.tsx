import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
