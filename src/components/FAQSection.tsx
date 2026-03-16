import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionContainer, SectionItem } from "./SectionReveal";

const faqs = [
  { q: "Is root canal treatment painful?", a: "Modern root canal treatment is virtually painless. Dr. Karthika uses local anesthesia, gentle techniques, and modern equipment to ensure your comfort. Most patients report less discomfort than with a regular filling." },
  { q: "How much does dental treatment cost in Pondicherry?", a: "Treatment costs vary by procedure. Routine cleanings start from ₹500, fillings from ₹800, teeth whitening from ₹3,000, and root canal treatment from ₹3,000-8,000. We offer transparent pricing with no hidden charges." },
  { q: "Do you accept walk-in patients?", a: "Yes, walk-ins are welcome! However, we recommend booking via WhatsApp (7598-000-829) to minimize waiting time and ensure Dr. Karthika's availability." },
  { q: "What are your clinic hours?", a: "Monday to Saturday — Morning: 10:00 AM - 1:30 PM, Evening: 5:00 PM - 9:00 PM. Sunday: By Appointment Only. We're conveniently located in Mudaliyarpet, Pondicherry." },
  
  { q: "Are braces painful?", a: "There may be slight discomfort for the first few days after braces are fitted or adjusted, but it's manageable. Dr. Karthika's gentle approach makes the orthodontic journey comfortable for all ages." },
  { q: "What should I do in a dental emergency?", a: "Call or WhatsApp us immediately at 7598-000-829. For severe pain, swelling, knocked-out tooth, or dental trauma, we provide same-day emergency appointments." },
  { q: "Is White Sapphire Dental Clinic safe and hygienic?", a: "Absolutely. We follow strict sterilization protocols, use modern equipment, and maintain international hygiene standards. Your safety is our top priority." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl">
        <SectionContainer className="text-center mb-14">
          <SectionItem>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          </SectionItem>
          <SectionItem>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Questions Answered</h2>
          </SectionItem>
          <SectionItem>
            <p className="text-muted-foreground">Common dental questions from our Pondicherry patients</p>
          </SectionItem>
        </SectionContainer>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
