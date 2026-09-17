import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Playfair_Display, Lora, Montserrat, Open_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Honey Glow Men's Salon",
  description: "Walajapet's premier destination for bespoke haircuts and styling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}