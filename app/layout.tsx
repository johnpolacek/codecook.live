import { Rethink_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const displayFont = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const SHARE_IMAGE = "https://codecook.live/images/screenshot.png"
const APP_ICON = "https://codecook.live/images/icon.png"

export const metadata = {
  title: "CodeCook.live",
  description: "Turn your commits into content and grow your audience while you ship.",
  openGraph: {
    images: SHARE_IMAGE,
  },
  twitter: {
    images: SHARE_IMAGE,
  },
  icons: {
    icon: APP_ICON,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} antialiased font-display`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
