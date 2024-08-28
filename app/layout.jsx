"use client";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import PageTransition from "./Component/PageTransition";
import StairTransition from "./Component/StairTransition";
import Home from "./page";
import { usePathname } from "next/navigation";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export const metdata = {
  title: "dharshana portfolio",
  description: "",
};
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        {pathname === "/" && <Home />}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
