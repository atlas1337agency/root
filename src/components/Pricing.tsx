import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.pricing.title} <span className="text-primary">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {t.pricing.plans.map((plan, index) => {
            const isHighlighted = index === 1;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl ${
                  isHighlighted
                    ? "bg-primary text-primary-foreground shadow-xl scale-105 z-10"
                    : "bg-background border border-border/50 shadow-sm"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute top-0 right-8 rtl:right-auto rtl:left-8 transform -translate-y-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      {t.pricing.mostPopular}
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-3">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm ml-1 rtl:ml-0 rtl:mr-1 ${isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={`h-5 w-5 mr-3 rtl:mr-0 rtl:ml-3 shrink-0 ${
                            isHighlighted ? "text-primary-foreground" : "text-primary"
                          }`}
                        />
                        <span className="text-sm leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-get-started'));
                  }}
                  className={`mt-auto w-full inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium transition-colors ${
                    isHighlighted
                      ? "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {t.pricing.getStarted}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t.collection.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.collection.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t.collection.items.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-background p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors group flex flex-col justify-between"
              >
                <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto p-6 bg-muted/30 border border-border/50 rounded-xl text-sm text-muted-foreground"
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
    </section>
  );
}
