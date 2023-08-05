import './globals.css'
import type { Metadata } from 'next'

import LocalFont from "next/font/local";
const surt = LocalFont({ src: "../assets/fonts/surt.woff" });

const dots = LocalFont({ src: "../assets/fonts/dotso.ttf" });
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${surt.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
