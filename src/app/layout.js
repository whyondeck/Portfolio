import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AlertDialogDemo } from "@/components/contact/contact-us";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Whyondeck</title>
        <link rel="icon" href="/assets/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white font-sans`}
      >
        {/* Page content wrapper */}
        <main className="max-w-[1500px] mx-auto">{children}</main>

        {/* AlertDialog fixed to viewport */}
        <div className="fixed md:bottom-20 md:right-20 bottom-15 right-15">
          <AlertDialogDemo />
        </div>
      </body>
    </html>
  );
}
