import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.png";
import ba3 from "@/assets/before-after-3.png";

const transformations = [
  { src: ba1, alt: "Complete Denture smile transformation at White Sapphire Dental", label: "Complete Denture" },
  { src: ba2, alt: "Smile makeover before and after at White Sapphire Dental", label: "Smile Makeover" },
  { src: ba3, alt: "Cosmetic dental treatment before and after at White Sapphire Dental", label: "Cosmetic Treatment" },
];

const BeforeAfterSection = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const navigate = (dir: 1 | -1) => {
    if (selectedImg === null) return;
    setSelectedImg((selectedImg + dir + transformations.length) % transformations.length);
  };

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-copper font-semibold text-sm uppercase tracking-wider mb-2">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Smile Transformations ✨
          </h2>
          <p className="text-secondary-foreground/60 max-w-lg mx-auto">
            Real patients, real results — see the difference expert dental care makes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImg(i)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-background/5"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-4">
                <span className="text-copper font-semibold text-sm">{item.label}</span>
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
            className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-secondary-foreground/70 hover:text-secondary-foreground"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-secondary-foreground/70 hover:text-secondary-foreground"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-secondary-foreground/70 hover:text-secondary-foreground"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
            <motion.img
              key={selectedImg}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={transformations[selectedImg].src}
              alt={transformations[selectedImg].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeforeAfterSection;