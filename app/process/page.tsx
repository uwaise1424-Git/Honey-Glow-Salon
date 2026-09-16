import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessShowcase from "@/components/ProcessShowcase";

export const metadata = {
  title: "Our Process | Honey Glow Men's Salon",
  description: "Explore our methodical approach to superior men's grooming at Honey Glow Men's Salon.",
};

export default function ProcessPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-10 bg-background/black">
        <ProcessShowcase />
      </div>
      <Footer />
    </main>
  );
}
