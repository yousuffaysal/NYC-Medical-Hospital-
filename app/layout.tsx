import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AiChatbot from '@/components/hospital/ai-chatbot'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f4c81',
}

export const metadata: Metadata = {
  title: 'NYC Medical Center - Advanced Healthcare',
  description: 'Premier hospital in New York offering advanced medical care, emergency services, and specialized treatment with a human touch.',
  generator: 'v0.app',
  icons: {
    icon: 'https://ik.imagekit.io/8fky5hetz/Blue%20and%20White%20Geometric%20Health%20Logo%20(1).png',
    apple: 'https://ik.imagekit.io/8fky5hetz/Blue%20and%20White%20Geometric%20Health%20Logo%20(1).png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <AiChatbot />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
