import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins font with all needed weights
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Global Fan Flicks | Own Your Platform, Keep 100%",
  description: "Premium NSFW creator platform with full earnings, privacy, and managed growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}