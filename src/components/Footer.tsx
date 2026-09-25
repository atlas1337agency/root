import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 group flex-nowrap whitespace-nowrap select-none">
                <img
                  src="/images/logo_dark.png"
                  alt="ATLAS 1337"
                  className="logo-dark-mode h-10 sm:h-12 md:h-14 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />
                <img
                  src="/images/logo_light.png"
                  alt="ATLAS 1337"
                  className="logo-light-mode h-10 sm:h-12 md:h-14 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />
                <span className="font-extrabold text-2xl sm:text-3xl tracking-tight whitespace-nowrap">
                  {language === "ar" ? (
                    <>أطلس <span className="text-primary font-mono">1337</span></>
                  ) : (
                    <>ATLAS <span className="text-primary">1337</span></>
                  )}
                </span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.footer.slogan}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/atlas1337agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg bg-muted/40 hover:bg-muted"
                  aria-label="LinkedIn @atlas1337agency"
                  title="LinkedIn: @atlas1337agency"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://instagram.com/atlas1337agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg bg-muted/40 hover:bg-muted"
                  aria-label="Instagram @atlas1337agency"
                  title="Instagram: @atlas1337agency"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="https://tiktok.com/@atlas1337agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg bg-muted/40 hover:bg-muted"
                  aria-label="TikTok @atlas1337agency"
                  title="TikTok: @atlas1337agency"
                >
                  <FaTiktok size={22} />
                </a>
              </div>
              <p className="text-xs font-mono text-muted-foreground">@atlas1337agency</p>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold mb-6">
              {language === "ar" ? "قانوني" : language === "fr" ? "Légal" : language === "es" ? "Legal" : "Legal"}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "ar" ? "شروط الخدمة" : language === "fr" ? "Conditions d'utilisation" : language === "es" ? "Términos del servicio" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "ar" ? "سياسة الخصوصية" : language === "fr" ? "Politique de confidentialité" : language === "es" ? "Política de privacidad" : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold mb-6">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:atlas1337agency@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    atlas1337agency@gmail.com
                  </a>
                  <a href="mailto:support@atlas1337agency.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    support@atlas1337agency.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-primary mt-0.5">
                  <FaWhatsapp size={20} />
                </div>
                <a href="https://wa.me/212723242286" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  +212 723 242 286
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/v77v4HRfkv9hEfjZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t.contact.locationText}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {language === "ar" ? "أطلس 1337" : "ATLAS 1337"}. {t.footer.rightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
