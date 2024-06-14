import type { Metadata } from "next";
import { Dosis, Playfair_Display, Poiret_One } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";

const pd = Dosis({
  weight: "200",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F1rst Class Events",
  description: "Premiere Event Services: DJ, MC, Audio, Decoration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pd.className}>
        <div className="main-background pointer-events-none">
          <video  autoPlay loop muted className="bg-video" playsInline>
            <source src="/videos/bg-vid.mp4" type="video/mp4" />
          </video>
        </div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
