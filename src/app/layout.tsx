import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import { MenuProvider } from "./context/MenuContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Default Title",
    template: "%s | Site Name",
  },
  description: "Your site description",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-neutral-950 font-[var(--font-inter)]">
        <MenuProvider>
          <main className="min-h-[calc(100dvh)]">
            {children}
            <Toaster position="top-right" reverseOrder={false} />
          </main>
        </MenuProvider>
      </body>
    </html>
  );
}