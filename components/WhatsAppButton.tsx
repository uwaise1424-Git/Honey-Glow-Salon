import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917449223356?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20salon%20appointment%20at%20Honey%20Glow."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="WhatsApp Enquiry"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300 -z-10"></span>
    </a>
  );
}
