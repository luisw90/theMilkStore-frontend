import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Kanit } from "next/font/google";
import { CartContextProvider } from "../Context/context";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["200"],
  subsets: ["latin"],
});

export const metadata = {
  title: "The milk store",
  description: "The nr1 place for milk products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.className} ${kanit.className}`}
      >
        <CartContextProvider>
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
