import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import { MenuProvider } from "./context/MenuContext"

// Font setup with static subsets for better performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Default Title",
    template: "%s | Site Name",
  },
  description: "Your site description",
  metadataBase: new URL("https://yourdomain.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-neutral-950 text-neutral-50">
        <MenuProvider>
          <main className="min-h-[calc(100dvh)]">{children}</main>
        </MenuProvider>
      </body>
    </html>
  )
}