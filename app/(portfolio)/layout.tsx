import "@/styles/globals.scss"
import { Metadata } from "next/types"
import ReduxProvider from "@/core/redux/ReduxProvider"
import { HydrationOverlay } from "@builder.io/react-hydration-overlay"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "sonner"

import { siteConfig } from "@/core/config/site"
import { fontSora } from "@/core/lib/fonts"
import { cn } from "@/core/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import SiteHeader from "@/components/core/SiteHeader"
import { AuthUserProvider } from "@/components/kanban/AuthUserProvider"
import ShellLayout from "@/components/layout/MainLayoutShell"
import { ThemeProvider } from "@/components/theme-provider"

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
export default function RootLayout({ children }) {
  return (
    <HydrationOverlay>
      <AuthUserProvider>
        <ReduxProvider>
          <TooltipProvider>
            <html lang="en" suppressHydrationWarning>
              <head />
              <link rel="canonical" href={siteConfig.url} />
              <TooltipProvider>
                <body
                  className={cn(
                    "overflow-y-hidden body-gradient min-h-screen bg-background font-sans antialiased",
                    fontSora.variable
                  )}
                >
                  <NextTopLoader color="#2dd4bf" height={5} />
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                  >
                    <ShellLayout header={<SiteHeader />}>
                      <div className="transition-all duration-300 sm:max-w-[854px]">
                        {children}
                      </div>
                    </ShellLayout>
                    <Toaster invert className="tex-[30px]" />
                  </ThemeProvider>
                  <SpeedInsights />
                  <Analytics />
                </body>
              </TooltipProvider>
            </html>
          </TooltipProvider>
        </ReduxProvider>
      </AuthUserProvider>
    </HydrationOverlay>
  )
}
