import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {t.pricing.title} <span className="text-primary">{t.pricing.titleHighlight}</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {t.pricing.plans.map((plan, idx) => {
            const isHighlighted = idx === 1;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl border flex flex-col ${
                  isHighlighted
                    ? "border-primary bg-primary/5 shadow-lg scale-105 z-10"
                    : "border-border/50 bg-card shadow-sm"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {t.pricing.mostPopular}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1 rtl:ml-0 rtl:mr-1 text-sm">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-get-started'));
                  }}
                  className={`mt-auto w-full py-3 rounded-lg font-medium transition-colors ${
                    isHighlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {t.pricing.getStarted}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service Pricing */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.pricing.serviceBreakdown}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.collection.items.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-card border border-border/40 rounded-xl hover:border-primary/50 transition-colors"
              >
                <span className="font-medium">{service.name}</span>
                <span className="text-primary font-bold font-mono text-sm">{service.price}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-muted/30 border border-border/50 rounded-xl text-sm text-muted-foreground"
          >
            <p className="mb-2">
              <strong className="text-foreground">{t.collection.adNoteTitle}</strong> {t.collection.adNoteText}
            </p>
            <p className="italic">
              {t.collection.adNoteExample}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
