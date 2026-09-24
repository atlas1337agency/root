import { Home, Briefcase, Star, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function BottomNavbar() {
  const { t } = useLanguage();

  const navItems = [
    { name: t.bottomNav.home, href: "/", icon: Home },
    { name: t.bottomNav.about, href: "/about", icon: Briefcase },
    { name: "Logo", href: "/", isLogo: true },
    { name: t.bottomNav.projects, href: "/projects", icon: Star },
    { name: t.bottomNav.pricing, href: "/pricing", icon: DollarSign },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border/40 pb-2 pt-1"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          if (item.isLogo) {
            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex flex-col items-center justify-center w-full h-full -mt-8"
                aria-label="Home"
              >
                <div className="w-16 h-16 bg-background p-2 rounded-full border-2 border-primary/40 shadow-2xl ring-4 ring-background/90 relative flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                  <img
                    src="/images/favicon.png"
                    alt="ATLAS 1337"
                    className="w-12 h-12 object-contain"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </Link>
            );
          }

          const Icon = item.icon!;

          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
