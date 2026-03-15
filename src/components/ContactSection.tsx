import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-copper font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us</h2>
          <p className="text-muted-foreground">Conveniently located in Mudaliyarpet, Pondicherry</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-card h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Dr.Karthika's+White+Sapphire+Dental+Clinic+Mudaliyarpet+Pondicherry&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="White Sapphire Dental Clinic location on Google Maps"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin className="text-copper" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">
                  #21D, Rodier Mill Street<br />
                  Mudaliyarpet, Pondicherry<br />
                  India - 605004
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Phone className="text-copper" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+917598000829" className="text-muted-foreground text-sm hover:text-copper transition-colors">
                  +91 7598 000 829
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Mail className="text-copper" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:whitesapphiredentalclinic@gmail.com" className="text-muted-foreground text-sm hover:text-copper transition-colors">
                  whitesapphiredentalclinic@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Clock className="text-copper" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Clinic Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Saturday<br />
                  Morning: 10:00 AM - 1:30 PM<br />
                  Evening: 5:00 PM - 9:00 PM<br />
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>

            <Button asChild variant="whatsapp" size="lg" className="mt-2 w-full text-base">
              <a
                href="https://wa.me/7598000829?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 Book Appointment via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;