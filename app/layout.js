import { Jost, Cormorant_Garamond } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Navbar from "@/components/Navbar";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Eclaire shop",
  description: "Zealand project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body>
        <StoreProvider>
          <div className="App">
            <Navbar />
            <main className="container">{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
