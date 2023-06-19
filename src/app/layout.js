import Navbar from "@/components/navigation/Navbar/Navbar";
import Footer from "@/components/navigation/Footer/Footer";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Dev Bhasha Sanskrit Society",
  description: "DevBhasha Sanskrit Society, IIT Madras",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <img
          title="bg-image"
          alt="bg-image"
          loading="lazy"
          className="bg-image"
          src="/bg.png"
        /> */}
        <Image
        className="bg-image"
          src="/bg.png"
          alt="bg-image"
          fill="true"
          quality={10}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
