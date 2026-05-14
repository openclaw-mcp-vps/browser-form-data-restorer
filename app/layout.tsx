import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormGuard – Auto-restore lost form data across browser crashes",
  description: "Browser extension that continuously backs up form data and restores it after crashes, tab closures, or navigation errors. Never lose your work again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a329ddec-21ec-477f-b5f3-d94ccdd04366"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
