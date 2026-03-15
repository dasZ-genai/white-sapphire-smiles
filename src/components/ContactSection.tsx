import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer, SectionItem } from "./SectionReveal";

const contactItems = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <p className="text-muted-foreground text-sm">
        #21D, Rodier Mill Street<br />
        Mudaliyarpet, Pondicherry<br />
        India - 605004
      </p>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a href="tel:+917598000829" className="text-muted-foreground text-sm hover:text-primary transition-colors">
        +91 7598 000 829
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:whitesapphiredentalclinic@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
        whitesapphiredentalclinic@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    content: (
      <p className="text-muted-foreground text-sm">
        Monday - Saturday<br />
        Morning: 10:00 AM - 1:30 PM<br />
        Evening: 5:00 PM - 9:00 PM<br />
        Sunday: By Appointment Only
      </p>
    ),
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionContainer className="text-center mb-14">
          <SectionItem>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          </SectionItem>
          <SectionItem>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us</h2>
          </SectionItem>
          <SectionItem>
            <p className="text-muted-foreground">Conveniently located in Mudaliyarpet, Pondicherry</p>
          </SectionItem>
        </SectionContainer>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
          <SectionContainer className="flex flex-col gap-6">
            {contactItems.map((item) => (
              <SectionItem key={item.title}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0"
                  >
                    <item.icon className="text-primary" size={20} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    {item.content}
                  </div>
                </motion.div>
              </SectionItem>
            ))}

            <SectionItem>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
            </SectionItem>
          </SectionContainer>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
