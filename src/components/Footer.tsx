import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-secondary text-secondary-foreground py-16"
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4">
              <img src={logo} alt="White Sapphire Dental Clinic" className="h-16 w-auto" />
            </div>
            <p className="text-secondary-foreground/60 text-sm mb-2">Your Smile, Our Priority</p>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">
              Dr. Karthika's White Sapphire Dental Clinic — Pondicherry's trusted dental care provider.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-base mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Dr. Karthika", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) =>
                link.href.startsWith("/blog") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-heading font-bold text-base mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              {[
                { href: "https://www.instagram.com/whitesapphiredental", icon: Instagram, label: "Instagram", hoverClass: "hover:bg-primary hover:text-primary-foreground" },
                { href: "https://www.facebook.com/profile.php?id=61577745755577", icon: Facebook, label: "Facebook", hoverClass: "hover:bg-primary hover:text-primary-foreground" },
                { href: "https://wa.me/7598000829", icon: MessageCircle, label: "WhatsApp", hoverClass: "hover:bg-whatsapp hover:text-primary-foreground" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center transition-colors ${social.hoverClass}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:whitesapphiredentalclinic@gmail.com"
              className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
            >
              <Mail size={16} />
              whitesapphiredentalclinic@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center origin-left"
        >
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} White Sapphire Dental Clinic. All Rights Reserved.
          </p>
          <p className="text-secondary-foreground/30 text-xs mt-2">
            Designed & Developed by <span className="font-semibold text-secondary-foreground/50">PRIYAM ENTERPRISES</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
