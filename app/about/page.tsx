import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/About";

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-1">
                <AboutComponent />
            </div>
            <Footer />
        </main>
    );
}