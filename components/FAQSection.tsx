"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
  id?: string;
  enableSchema?: boolean;
}

export function FAQSection({
  title = "Preguntas Frecuentes",
  subtitle = "Resolvemos las dudas más comunes antes de comenzar a trabajar juntos.",
  items = [],
  className,
  id = "faq",
  enableSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema para Google Rich Snippets (FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id={id} className={cn("py-20 md:py-28 bg-white", className)}>
      {enableSchema && items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4 text-primary-600" />
              <span>FAQ</span>
            </div>
            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden bg-white",
                  isOpen
                    ? "border-primary-200 shadow-sm"
                    : "border-slate-200/80 hover:border-slate-300"
                )}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 cursor-pointer select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-navy group-hover:text-primary-600 transition-colors pr-2">
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "bg-primary-100 text-primary-700 rotate-180"
                        : "bg-slate-100 text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-600"
                    )}
                  >
                    <ChevronDown className="w-4.5 h-4.5 stroke-[2.2]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
