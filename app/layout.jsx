import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Header";
import PageTransition from "@/Component/PageTransition";
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
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
