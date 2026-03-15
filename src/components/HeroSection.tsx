import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Modern dental clinic interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-90" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-glow font-semibold text-sm md:text-base tracking-wider uppercase mb-4"
          >
            Pondicherry's Trusted Dental Clinic
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-tight mb-6">
            Your Smile,{" "}
            <span className="text-gradient">Our Priority</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-4 max-w-xl">
            Expert dental care with <strong className="text-primary-foreground">Dr. Karthika BDS</strong>, Root Canal Specialist (C.C)
          </p>
          <p className="text-primary-foreground/50 text-base mb-4">
            Modern treatments • Pain-free procedures • Gentle approach
          </p>
          <a href="tel:+917598000829" className="inline-flex items-center gap-2 text-cyan-glow font-semibold text-lg mb-8 hover:underline">
            <Phone size={20} />
            +91 7598 000 829
          </a>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg" className="text-base px-8">
              <a
                href="https://wa.me/7598000829?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Book via WhatsApp
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="lg" className="text-base px-8">
              <a href="tel:+917598000829">
                <Phone size={18} />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
