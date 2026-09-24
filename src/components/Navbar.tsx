import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "../context/LanguageContext";
import { LanguageDropdown } from "./LanguageDropdown";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { GetStartedModal } from "./GetStartedModal";

export function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsGetStartedOpen(true);
    window.addEventListener('open-get-started', handleOpen);
    return () => window.removeEventListener('open-get-started', handleOpen);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center min-w-0 flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group py-1 flex-nowrap whitespace-nowrap select-none">
                <img
                  src="/images/logo_dark.png"
                  alt="ATLAS 1337"
                  className="logo-dark-mode h-9 sm:h-11 md:h-12 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />
                <img
                  src="/images/logo_light.png"
                  alt="ATLAS 1337"
                  className="logo-light-mode h-9 sm:h-11 md:h-12 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight whitespace-nowrap">
                  {language === "ar" ? (
                    <>أطلس <span className="text-primary font-mono">1337</span></>
                  ) : (
                    <>ATLAS <span className="text-primary">1337</span></>
                  )}
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageDropdown />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={t.nav.toggleTheme}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsGetStartedOpen(true)}
                className="hidden lg:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                {t.nav.getStarted}
              </button>
              
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-border/40 bg-background"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsGetStartedOpen(true);
                  }}
                  className="block w-full text-center mt-4 h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  {t.nav.getStarted}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
    </>
  );
}
