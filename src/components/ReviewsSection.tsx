import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    text: "Dr. Karthika is amazing! She made my root canal completely painless. The clinic is clean, modern, and the staff is so friendly. Highly recommend!",
  },
  {
    name: "Raj M.",
    text: "Best dental clinic in Pondicherry! Got my teeth whitening done here and the results are incredible. Very professional and affordable.",
  },
  {
    name: "Anitha K.",
    text: "My daughter was scared of dentists, but Dr. Karthika was so gentle and patient. Now she actually looks forward to check-ups!",
  },
  {
    name: "Vikram R.",
    text: "Transparent pricing, no hidden charges. Got my ceramic braces here and couldn't be happier with the treatment and care.",
  },
  {
    name: "Lakshmi P.",
    text: "Clean clinic, latest equipment, and Dr. Karthika explains everything clearly. Felt confident and comfortable throughout my treatment.",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Patients Say</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
          </div>
          <p className="text-muted-foreground">Trusted by families across Pondicherry</p>
        </motion.div>

        {/* Desktop: show 3 cards, Mobile: carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {reviews.slice(3).map((review, i) => (
            <ReviewCard key={i + 3} review={review} index={i + 3} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{reviews[current].text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{reviews[current].name}</p>
                  <p className="text-xs text-muted-foreground">Google Review</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="p-2 rounded-full bg-accent hover:bg-primary/10 text-foreground"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
                className="p-2 rounded-full bg-accent hover:bg-primary/10 text-foreground"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow"
  >
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
      ))}
    </div>
    <p className="text-foreground mb-4 leading-relaxed text-sm">"{review.text}"</p>
    <div>
      <p className="font-semibold text-foreground text-sm">{review.name}</p>
      <p className="text-xs text-muted-foreground">Google Review</p>
    </div>
  </motion.div>
);

export default ReviewsSection;
