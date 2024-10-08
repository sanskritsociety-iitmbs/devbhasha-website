import Navbar from "../components/navigation/Navbar/Navbar";
import Footer from "../components/navigation/Footer/Footer";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Deva Bhasha Sanskrit Society",
  description: "Deva Bhasha Sanskrit Society, IIT Madras BS Degree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
