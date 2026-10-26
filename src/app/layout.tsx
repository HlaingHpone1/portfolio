import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const title = "Hlaing Hpone — Frontend Developer";
const description =
  "Next.js & TypeScript Frontend Developer based in Yangon, Myanmar. Building scalable, responsive web applications with modern UI frameworks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hlainghpone.com"),
  title,
  description,
  keywords: [
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Yangon",
    "Myanmar",
    "Hlaing Hpone",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Hlaing Hpone",
    title,
    description,
    url: "https://www.hlainghpone.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

/* ── Anti-flash: apply saved/system theme before React hydrates ── */
const ANTI_FLASH = `(function(){
  try{
    var s=localStorage.getItem('theme');
    if(s==='dark'){document.documentElement.classList.add('dark');}
    else if(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.documentElement.classList.add('dark');
    }
  }catch(e){}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Runs before paint — prevents flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: ANTI_FLASH }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-white dark:bg-neutral-950 text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
