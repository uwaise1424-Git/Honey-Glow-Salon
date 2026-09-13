import { MapPin, Clock, MessageCircle, Phone, Info } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-surface/80 relative border-t border-gold/20 pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16">

          {/* Brand & Policy Column */}
          <div className="flex flex-col">
            <Link href="/" className="font-serif font-light text-4xl text-gold tracking-tight mb-6 block">
              Honey Glow
            </Link>
            <p className="text-text-muted font-light leading-relaxed mb-6 max-w-sm tracking-wide">
              Premium men&apos;s grooming where high-end expertise meets personalized care.
            </p>

            {/* Clear Booking Policy Box */}
            <div className="bg-background/50 border border-gold/10 p-4 rounded-xl mb-8 max-w-sm shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-gold" />
                <p className="text-sm text-text-primary font-medium tracking-wide">Booking Policy</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Walk-ins are always welcome. <strong className="text-text-primary font-medium">No online booking.</strong>
              </p>
            </div>

            <div className="flex gap-4">
              {/* Updated WhatsApp Link with new enquiry message */}
              <a
                href="https://wa.me/917449223356?text=Hi%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+917449223356"
                className="w-12 h-12 rounded-full bg-surface border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visit Us Column */}
          <div className="flex flex-col">
            <h3 className="text-text-primary font-serif font-light text-2xl tracking-wide mb-6 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              Location
            </h3>
            <p className="text-text-muted font-light mb-6 leading-loose tracking-wide">
              Thoppaichetty Street,<br />
              Walajapet, Ranipet Dist,<br />
              Tamil Nadu
            </p>

            {/* Google Maps Embed */}
            <div className="w-full rounded-xl overflow-hidden border border-gold/20 shadow-lg group">
              <iframe
                src="https://maps.google.com/maps?q=Honey+Glow+Mens+Salon,+Thoppaichetty+Street,+Walajapet,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[50%] contrast-125 group-hover:grayscale-[20%] transition-all duration-500"
                title="Honey Glow Salon Location"
              />
            </div>
          </div>

          {/* Hours Column */}
          <div className="flex flex-col">
            <h3 className="text-text-primary font-serif font-light text-2xl tracking-wide mb-6 flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold" />
              Working Hours
            </h3>
            <ul className="space-y-4 text-text-muted font-light tracking-wide">
              <li className="flex justify-between border-b border-dashed border-gold/20 pb-3">
                <span>Mon, Wed–Sun</span>
                <span className="text-text-primary font-medium">7:30 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between pb-3 text-gold/80">
                <span>Tuesday</span>
                <span>Closed (except festivals)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-8 border-t border-gold/10 text-text-muted/60 text-xs tracking-widest uppercase">
          <p>© {currentYear} Honey Glow Men&apos;s Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}