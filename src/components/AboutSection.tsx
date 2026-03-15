import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users, Zap } from "lucide-react";
import { SectionContainer, SectionItem } from "./SectionReveal";
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
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <motion.img
                src={doctorImg}
                alt="Dr. Karthika - Dentist at White Sapphire Dental Clinic Pondicherry"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10"
            />
          </motion.div>

          {/* Content */}
          <SectionContainer>
            <SectionItem>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About the Doctor</p>
            </SectionItem>
            <SectionItem>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Dr. Karthika
              </h2>
            </SectionItem>
            <SectionItem>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Karthika, BDS, Root Canal Specialist (C.C), is a passionate dental professional dedicated to delivering pain-free, patient-centered care. With expertise in General, Cosmetic, and Orthodontic Dentistry, she combines modern techniques with a gentle approach to help every patient achieve their dream smile.
              </p>
            </SectionItem>
            <SectionItem>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At White Sapphire Dental Clinic, we believe in making dentistry approachable, transparent, and comfortable for families, young adults, and professionals across Pondicherry.
              </p>
            </SectionItem>

            <SectionItem>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={cred.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2 bg-accent rounded-lg px-3 py-2.5"
                  >
                    <cred.icon className="text-primary shrink-0" size={18} />
                    <span className="text-sm font-medium text-foreground">{cred.label}</span>
                  </motion.div>
                ))}
              </div>
            </SectionItem>
          </SectionContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
