import { Globe, Zap, Cpu, Headphones } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const icons = [Zap, Cpu, Globe, Headphones];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
              {t.whyUs.badge}
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              {t.whyUs.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {t.whyUs.subtitle}
            </motion.p>

            <div className="space-y-6">
              {t.whyUs.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-muted"
            >
              <img
                src="https://picsum.photos/seed/workspace/800/800"
                alt="Modern workspace"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 rtl:left-8 rtl:right-8 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    +24
                  </div>
                  <div>
                    <h4 className="font-bold">Global Presence</h4>
                    <p className="text-sm text-muted-foreground">
                      Rabat, Morocco • Worldwide Reach
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium">
                  ATLAS 1337 — High-performance digital engineering & automation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
