import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionContainer, SectionItem } from "./SectionReveal";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import interior5 from "@/assets/interior-5.jpg";

const galleryImages = [
  { src: clinic1, alt: "White Sapphire Dental Clinic exterior in Pondicherry", label: "Clinic Exterior" },
  { src: clinic2, alt: "Reception area at White Sapphire Dental Clinic", label: "Reception" },
  { src: clinic3, alt: "Doctor's consultation desk at White Sapphire Dental", label: "Consultation Room" },
  { src: clinic4, alt: "Dental treatment chair and equipment", label: "Treatment Room" },
  { src: heroBg, alt: "Full treatment room with dental chair and consultation desk", label: "Treatment Suite" },
  { src: interior5, alt: "Advanced dental equipment and instruments", label: "Dental Equipment" },
];

const ClinicGallery = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <SectionContainer className="text-center mb-14">
          <SectionItem>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Space</p>
          </SectionItem>
          <SectionItem>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Clinic</h2>
          </SectionItem>
          <SectionItem>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Modern facility, sterilized environment, comfortable experience
            </p>
          </SectionItem>
        </SectionContainer>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImg(i)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground text-sm font-semibold p-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  {img.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            <motion.img
              key={selectedImg}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedImg].src}
              alt={galleryImages[selectedImg].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClinicGallery;
