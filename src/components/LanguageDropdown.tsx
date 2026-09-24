import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../translations";

interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
  flag: string;
  country: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeName: "English", flag: "🇺🇸", country: "US" },
  { code: "fr", label: "French", nativeName: "Français", flag: "🇫🇷", country: "FR" },
  { code: "es", label: "Spanish", nativeName: "Español", flag: "🇪🇸", country: "ES" },
  { code: "ar", label: "Arabic", nativeName: "العربية", flag: "🇲🇦", country: "AR" },
];

export function LanguageDropdown() {
  const { language, setLanguage, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`h-9 px-3 rounded-full border transition-all duration-200 flex items-center gap-2 group backdrop-blur-md select-none text-xs sm:text-sm font-semibold shadow-xs ${
          isOpen
            ? "border-primary bg-primary/10 text-primary shadow-sm ring-2 ring-primary/20"
            : "border-border/60 bg-muted/40 hover:bg-muted/90 hover:border-primary/40 text-foreground"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language"
        title="Select language"
      >
        <span className="text-sm leading-none drop-shadow-xs">{currentOption.flag}</span>
        <span className="font-bold tracking-wider text-[11px] sm:text-xs uppercase">
          {currentOption.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-52 rounded-2xl bg-popover/95 backdrop-blur-xl border border-border/80 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-right rtl:origin-top-left ring-1 ring-black/5"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase border-b border-border/40 mb-1">
            <Globe className="w-3 h-3 text-primary" />
            <span>{language === "ar" ? "اللغات المتاحة" : "Language / Langue"}</span>
          </div>

          <div className="space-y-0.5">
            {LANGUAGES.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  onClick={() => handleSelect(item.code)}
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm transition-all duration-150 text-left rtl:text-right ${
                    isSelected
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "text-foreground hover:bg-muted/70 hover:text-foreground active:scale-[0.98]"
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{item.flag}</span>
                    <div className="flex flex-col text-left rtl:text-right">
                      <span className="font-medium">{item.nativeName}</span>
                      <span
                        className={`text-[10px] leading-tight ${
                          isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                  {isSelected ? (
                    <div className="h-5 w-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  ) : (
                    <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                      {item.code}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
