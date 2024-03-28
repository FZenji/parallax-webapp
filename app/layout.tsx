import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "800"],
});

export const metadata: Metadata = {
  title: "Travelo",
  description: "Parallax Webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-neutral-900 " + poppins.className}>{children}</body>
    </html>
  );
}
