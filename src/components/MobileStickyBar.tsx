import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const MobileStickyBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <div className="bg-secondary/95 backdrop-blur-md border-t border-border/50 px-4 py-3 flex gap-3">
        <a
          href="tel:+917598000829"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-foreground font-semibold text-sm py-3 rounded-xl transition-colors hover:bg-accent/80"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="https://wa.me/7598000829?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm py-3 rounded-xl transition-colors hover:bg-primary/90"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default MobileStickyBar;
