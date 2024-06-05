import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const pd = Playfair_Display({ subsets: ["latin"] });

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
        <div className="main-background">
          <video autoPlay loop muted className="bg-video">
            <source src="/videos/bg-vid.mp4" type="video/mp4" />
          </video>
        </div>
        {children}
      </body>
    </html>
  );
}
