import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
				<body className={inter.className}>{children}</body>
		</html>
	);
}
