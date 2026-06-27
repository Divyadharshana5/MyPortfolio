import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import PageTransition from "./Component/PageTransition";
import StairTransition from "./Component/StairTransition";
import Cursor from "./Component/Cursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Dharshana Portfolio",
  description: "",
  icons: {
    icon: "/icon.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Cursor />
        <Header />
        <StairTransition />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
