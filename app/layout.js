import { Inter } from "next/font/google";
import "./globals.css";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Donating Site",
  description: "Help communties to grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <SessionWrapper>
          <Navebar />
          <div className="min-h-screen" >
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}

