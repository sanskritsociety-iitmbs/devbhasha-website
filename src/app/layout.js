import Navbar from "@/components/navigation/Navbar/Navbar";
import Footer from "@/components/navigation/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <img title="bg-image" alt="bg-image" loading="lazy" className="bg-image" src="/bg.png" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
