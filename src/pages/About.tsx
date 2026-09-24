import { motion } from "motion/react";
import { CheckCircle2, Rocket, Target, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t, language } = useLanguage();

  const roadmapSteps = [
    {
      step: "01",
      title: language === "ar" ? "الاستكشاف وبناء الاستراتيجية" : language === "fr" ? "Découverte & Stratégie" : language === "es" ? "Descubrimiento y Estrategia" : "Discovery & Strategy",
      desc: language === "ar" ? "نبدأ بفهم أهدافك وسوقك المستهدف لوضع خارطة طريق تقنية دقيقة." : language === "fr" ? "Nous analysons vos objectifs et votre marché pour concevoir des fondations solides." : language === "es" ? "Comprendemos tus metas comerciales y mercado para sentar bases sólidas." : "We analyze your business goals, target audience, and market landscape to build a solid foundation.",
    },
    {
      step: "02",
      title: language === "ar" ? "التصميم وبناء النماذج" : language === "fr" ? "Design & Prototypage" : language === "es" ? "Diseño y Prototipado" : "Design & Prototyping",
      desc: language === "ar" ? "نصمم واجهات عصرية تركز على تجربة المستخدم وتعكس هوية علامتك التجارية." : language === "fr" ? "Notre équipe conçoit des interfaces intuitives adaptées à votre identité de marque." : language === "es" ? "Creamos diseños intuitivos centrados en la conversión y experiencia del usuario." : "Our creative team crafts intuitive, user-centric designs that align with your brand identity.",
    },
    {
      step: "03",
      title: language === "ar" ? "التطوير والدمج الذكي" : language === "fr" ? "Développement & Intégration" : language === "es" ? "Desarrollo e Integración" : "Development & Integration",
      desc: language === "ar" ? "نحول التصاميم إلى برمجيات حقيقية باستخدام أحدث التقنيات وأفضل معايير الأداء." : language === "fr" ? "Nous donnons vie aux projets avec des technologies modernes et une performance maximale." : language === "es" ? "Hacemos realidad los diseños con código limpio, seguro y de alto rendimiento." : "We bring designs to life using cutting-edge technologies, ensuring robust performance and speed.",
    },
    {
      step: "04",
      title: language === "ar" ? "الفحص الدقيق والإطلاق" : language === "fr" ? "Tests & Lancement" : language === "es" ? "Pruebas y Lanzamiento" : "Testing & Launch",
      desc: language === "ar" ? "اختبارات شاملة للتأكد من خلو النظام من أي أخطاء قبل النشر الرسمي." : language === "fr" ? "Des tests rigoureux garantissent une expérience parfaite avant le déploiement mondial." : language === "es" ? "Pruebas exhaustivas garantizan un producto impecable antes del despliegue." : "Rigorous testing ensures a flawless experience before deploying your solution to the world.",
    },
    {
      step: "05",
      title: language === "ar" ? "التوسع ومضاعفة العوائد" : language === "fr" ? "Croissance & Optimisation" : language === "es" ? "Crecimiento y Optimización" : "Growth & Optimization",
      desc: language === "ar" ? "مراقبة مستمرة للأداء وتحسين التحويلات لضمان تحقيق أعلى عائد استثماري." : language === "fr" ? "Nous analysons les performances et optimisons les leviers pour stimuler votre ROI." : language === "es" ? "Monitoreamos resultados y optimizamos estrategias para un retorno sostenido." : "Post-launch, we monitor analytics and optimize strategies to drive continuous growth and ROI.",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
            {t.about.badge}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t.about.description}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {t.about.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t.about.missionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t.about.visionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.visionText}
            </p>
          </motion.div>
        </div>

        {/* Roadmap */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            {language === "ar" ? "خارطة طريقنا للنجاح" : language === "fr" ? "Notre Feuille de Route vers le Succès" : language === "es" ? "Nuestra Ruta al Éxito" : "Our Roadmap to Success"}
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>

            {roadmapSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between mb-12 md:mb-24 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-10 border-4 border-background hidden md:flex">
                  {item.step}
                </div>
                <div className="w-full md:w-5/12 bg-card p-6 rounded-xl border border-border/50 shadow-sm relative">
                  <div className="md:hidden absolute -top-5 left-6 rtl:left-auto rtl:right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold border-4 border-background">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 mt-4 md:mt-0">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
