import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users, Zap } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";

const credentials = [
  { icon: Award, label: "BDS Certified" },
  { icon: Sparkles, label: "Root Canal Specialist (C.C)" },
  { icon: Zap, label: "10+ Years Experience" },
  { icon: Users, label: "500+ Happy Smiles" },
  { icon: Heart, label: "Modern Equipment" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={doctorImg}
                alt="Dr. Karthika - Dentist at White Sapphire Dental Clinic Pondicherry"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About the Doctor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Dr. Karthika
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Karthika, BDS, Root Canal Specialist (C.C), is a passionate dental professional dedicated to delivering pain-free, patient-centered care. With expertise in General, Cosmetic, and Orthodontic Dentistry, she combines modern techniques with a gentle approach to help every patient achieve their dream smile.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At White Sapphire Dental Clinic, we believe in making dentistry approachable, transparent, and comfortable for families, young adults, and professionals across Pondicherry.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-2 bg-accent rounded-lg px-3 py-2.5"
                >
                  <cred.icon className="text-primary shrink-0" size={18} />
                  <span className="text-sm font-medium text-foreground">{cred.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
