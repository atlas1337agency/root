import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
            {t.contact.badge}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">{t.contact.infoTitle}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.contact.emailUs}</h3>
                    <div className="flex flex-col space-y-1">
                      <a href="mailto:atlas1337agency@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                        atlas1337agency@gmail.com
                      </a>
                      <a href="mailto:support@atlas1337agency.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                        support@atlas1337agency.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary flex-shrink-0">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.contact.callUs}</h3>
                    <a href="https://wa.me/212723242286" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors font-mono">
                      +212 723 242 286
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t.contact.visitUs}</h3>
                    <a
                      href="https://maps.app.goo.gl/v77v4HRfkv9hEfjZ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">ATLAS 1337 - Digital Agency</span>
                      <br />
                      <span>{t.contact.locationText}</span>
                      <span className="mt-1.5 flex items-center gap-1 text-xs text-primary font-semibold group-hover:underline">
                        {language === "ar" ? "عرض على خرائط Google ↗" : language === "fr" ? "Voir sur Google Maps ↗" : language === "es" ? "Ver en Google Maps ↗" : "View on Google Maps ↗"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">{t.contact.workingHours}</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.contact.workingHoursText}
              </p>
              <div className="mt-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                {language === "ar" ? "نقدم الدعم والرد الفوري لجميع العملاء عبر واتساب 24/7." : language === "fr" ? "Assistance rapide et continue disponible via WhatsApp 24/7." : language === "es" ? "Soporte rápido y continuo disponible por WhatsApp 24/7." : "Rapid response and continuous support available via WhatsApp 24/7."}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full min-h-[450px] bg-muted rounded-2xl overflow-hidden border border-border/50 shadow-sm"
          >
            <div className="px-4 py-2.5 bg-card border-b border-border/40 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                ATLAS 1337 Agency
              </span>
              <a
                href="https://maps.app.goo.gl/v77v4HRfkv9hEfjZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold flex items-center gap-1"
              >
                {language === "ar" ? "فتح في خرائط Google ↗" : language === "fr" ? "Ouvrir dans Google Maps ↗" : language === "es" ? "Abrir en Google Maps ↗" : "Open in Google Maps ↗"}
              </a>
            </div>
            <div className="flex-1 w-full min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.4957643038676!2d-6.831663!3d34.031219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21389a2d4ab0608b%3A0xc7cf2163e7a46453!2sATLAS%201337%20Agency!5e0!3m2!1sen!2sma!4v1772996838985!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ATLAS 1337 Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
