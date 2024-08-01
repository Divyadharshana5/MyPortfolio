import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "dharshana portfolio",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
