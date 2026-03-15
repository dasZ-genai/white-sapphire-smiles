import { motion } from "framer-motion";
import { Stethoscope, Sparkles, SmilePlus, Hospital, Wrench, Baby } from "lucide-react";
import servicesBanner from "@/assets/services-banner.png";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, scaling, cavity fillings, and extractions for complete oral health.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, smile makeovers, veneers, and bonding for a brighter, confident smile.",
  },
  {
    icon: SmilePlus,
    title: "Orthodontics",
    description: "Braces (ceramic & metal), aligners, and bite correction for perfectly aligned teeth.",
  },
  {
    icon: Hospital,
    title: "Root Canal Treatment",
    description: "Pain-free RCT, endodontic care, and tooth preservation with specialist expertise.",
  },
  {
    icon: Wrench,
    title: "Dental Implants",
    description: "Missing tooth replacement and implant-supported dentures for a natural look and feel.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Child-friendly care, preventive treatments, and fluoride application in a fun environment.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Dental Services</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive care for your entire family</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-xl overflow-hidden shadow-card"
        >
          <img
            src={servicesBanner}
            alt="Complete dental services offered at White Sapphire Dental Clinic Pondicherry"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/7598000829?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Have questions? Chat with us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
