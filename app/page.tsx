import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}