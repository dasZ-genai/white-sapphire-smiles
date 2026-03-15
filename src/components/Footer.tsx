import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="White Sapphire Dental Clinic" className="h-10 w-10" />
              <span className="font-heading font-bold text-lg">White Sapphire</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm mb-2">Your Smile, Our Priority</p>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">
              Dr. Karthika's White Sapphire Dental Clinic — Pondicherry's trusted dental care provider.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
                    className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/whitesapphiredental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/whitesapphiredental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/7598000829"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-whatsapp hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <a
              href="mailto:whitesapphiredentalclinic@gmail.com"
              className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
            >
              <Mail size={16} />
              whitesapphiredentalclinic@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} White Sapphire Dental Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
