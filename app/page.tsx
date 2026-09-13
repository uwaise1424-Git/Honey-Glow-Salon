import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}