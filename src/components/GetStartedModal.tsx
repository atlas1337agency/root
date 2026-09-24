import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "initial" | "category" | "platform" | "details" | "contact-form";

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const { language, dir } = useLanguage();
  const isAr = language === "ar";

  const [step, setStep] = useState<Step>("initial");
  const [selection, setSelection] = useState<{
    type?: "invoice" | "contact";
    category?: string;
    platform?: string;
  }>({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    service: "",
    message: ""
  });

  const reset = () => {
    setStep("initial");
    setSelection({});
    setFormData({
      fullName: "",
      email: "",
      country: "",
      service: "",
      message: ""
    });
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleBack = () => {
    switch (step) {
      case "category":
        setStep("initial");
        break;
      case "platform":
        setStep("category");
        break;
      case "details":
        setStep("platform");
        break;
      case "contact-form":
        if (selection.type === "invoice") {
          setStep("details");
        } else {
          setStep("initial");
        }
        break;
      default:
        break;
    }
  };

  const handleInitialSelect = (type: "invoice" | "contact") => {
    setSelection({ ...selection, type });
    if (type === "invoice") {
      setStep("category");
    } else {
      setStep("contact-form");
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelection({ ...selection, category });
    setStep("platform");
  };

  const getSubCategories = (category: string) => {
    switch (category) {
      case "Web Development":
        return ["Woocommerce", "Shopify", "Youcan.shop", "Php script", "Vibe Coding"];
      case "Automation & AI":
        return ["Chatbot", "AI Agent", "AI Automation"];
      case "Digital Marketing":
        return [
          "Social Media Management",
          "Facebook & Instagram Ads",
          "Google Ads",
          "SEO (Search Engine Optimization)",
          "Content Creation",
          "Email Marketing",
        ];
      case "Extra Services":
        return ["Google Maps Optimization", "NFC Cards & Smart Profiles", "Social Media Followers Growth"];
      default:
        return [];
    }
  };

  const handlePlatformSelect = (platform: string) => {
    setSelection({ ...selection, platform });
    setStep("details");
  };

  const getPlatformDetails = (platform: string) => {
    switch (platform) {
      // Web Development
      case "Woocommerce":
        return {
          items: [
            { name: isAr ? "النطاق (Domain)" : "Domain", price: "$10 – $15 / year" },
            { name: isAr ? "الاستضافة (Hosting)" : "Hosting", price: "$40 – $120 / year" },
            { name: isAr ? "قالب مدفوع (Theme)" : "Premium Theme", price: "$30 – $70" },
            { name: isAr ? "إضافات ومكونات (Plugins)" : "Plugins", price: "$0 – $100" },
          ],
          atlasCost: isAr ? "أساسي: 250$ – 600$، متقدم: 600$ – 1,200$" : "Basic: $250 – $600, Advanced: $600 – $1,200",
          totalOverride: "$330 – $1,405"
        };
      case "Shopify":
        return {
          items: [
            { name: isAr ? "اشتراك شوبيفاي" : "Shopify Subscription", price: "$39 – $105 / month" },
            { name: isAr ? "النطاق (Domain)" : "Domain", price: "$10 – $20 / year" },
            { name: isAr ? "قالب مدفوع (اختياري)" : "Premium Theme (Optional)", price: "$0 – $350" },
            { name: isAr ? "تطبيقات مدفوعة (اختياري)" : "Apps (Optional)", price: "$0 – $50 / month" },
          ],
          atlasCost: isAr ? "أساسي: 250$ – 500$، متقدم: 500$ – 1,000$" : "Basic: $250 – $500, Advanced: $500 – $1,000",
          totalOverride: "$300 – $1,500+"
        };
      case "Youcan.shop":
        return {
          items: [
            { name: isAr ? "رصيد / عمولة المنصة" : "Platform Credit", price: "$10 – $50" },
            { name: isAr ? "النطاق (Domain)" : "Domain", price: "$10 – $20 / year" },
            { name: isAr ? "قالب أو تطبيقات" : "Theme / Apps", price: "$0 – $50" },
          ],
          atlasCost: isAr ? "أساسي: 150$ – 300$، متقدم: 300$ – 600$" : "Basic: $150 – $300, Advanced: $300 – $600",
          totalOverride: "$170 – $720"
        };
      case "Php script":
        return {
          items: [
            { name: isAr ? "ترخيص السكريبت" : "Script License", price: "$20 – $100" },
            { name: isAr ? "الاستضافة (Hosting)" : "Hosting (cPanel)", price: "$40 – $100 / year" },
            { name: isAr ? "النطاق (Domain)" : "Domain", price: "$10 – $15 / year" },
          ],
          atlasCost: isAr ? "تنصيب وتهيئة: 100$ – 250$، تخصيص: 250$ – 600$" : "Setup: $100 – $250, Custom: $250 – $600",
          totalOverride: "$170 – $815"
        };
      case "Vibe Coding":
        return {
          items: [
            { name: isAr ? "استضافة سحابية (Vercel/Cloud)" : "Cloud Hosting", price: "$0 – $40 / month" },
            { name: isAr ? "النطاق (Domain)" : "Domain", price: "$10 – $20 / year" },
            { name: isAr ? "خدمات الـ Backend وقواعد البيانات" : "Backend & DB Services", price: "$0 – $50 / month" },
          ],
          atlasCost: isAr ? "أساسي: 400$ – 800$، متقدم: 800$ – 2,000$" : "Basic: $400 – $800, Advanced: $800 – $2,000",
          totalOverride: "$410 – $2,100+"
        };

      // Automation & AI
      case "Chatbot":
        return {
          items: [
            { name: isAr ? "منصة البوت (Voiceflow/Botpress)" : "Bot Platform", price: "$0 – $50 / month" },
            { name: isAr ? "رصيد الذكاء الاصطناعي (OpenAI API)" : "AI Tokens (OpenAI)", price: "$5 – $30 / month" },
          ],
          atlasCost: isAr ? "أساسي: 200$ – 500$، متقدم: 500$ – 1,200$" : "Basic: $200 – $500, Advanced: $500 – $1,200",
          totalOverride: "$205 – $1,280"
        };
      case "AI Agent":
        return {
          items: [
            { name: isAr ? "أدوات السحابة والربط" : "Cloud & AI Infrastructure", price: "$10 – $60 / month" },
            { name: isAr ? "رصيد استهلاك النماذج (API)" : "LLM API Usage", price: "$10 – $50 / month" },
          ],
          atlasCost: isAr ? "أساسي: 350$ – 700$، متقدم: 700$ – 1,800$" : "Basic: $350 – $700, Advanced: $700 – $1,800",
          totalOverride: "$370 – $1,910"
        };
      case "AI Automation":
        return {
          items: [
            { name: isAr ? "منصات الأتمتة (Make / Zapier)" : "Automation Platforms", price: "$0 – $50 / month" },
            { name: isAr ? "أدوات الذكاء الاصطناعي الإضافية" : "Additional AI Tools", price: "$0 – $30 / month" },
          ],
          atlasCost: isAr ? "أساسي: 200$ – 500$، متقدم: 500$ – 1,200$" : "Basic: $200 – $500, Advanced: $500 – $1,200",
          totalOverride: "$200 – $1,280"
        };

      // Digital Marketing
      case "Social Media Management":
        return {
          items: [
            { name: isAr ? "أدوات الجدولة والتصميم" : "Design & Scheduling Tools", price: "$0 – $30 / month" },
          ],
          atlasCost: isAr ? "300$ – 700$ / شهرياً" : "$300 – $700 / month",
          totalOverride: "$300 – $730 / month"
        };
      case "Facebook & Instagram Ads":
      case "Google Ads":
        return {
          items: [
            { name: isAr ? "ميزانية الإعلانات (تُدفع للمنصة مباشرة)" : "Ad Spend (Paid directly to platform)", price: "$10 – $50+ / day" },
            { name: isAr ? "أدوات التتبع والتحليل" : "Tracking & Analytics Tools", price: "$0 – $20 / month" },
          ],
          atlasCost: isAr ? "250$ – 600$ / شهرياً (إدارة وإعداد)" : "$250 – $600 / month (Setup & Management)",
          totalOverride: "$250 – $600/mo + Ad Spend"
        };
      case "SEO (Search Engine Optimization)":
        return {
          items: [
            { name: isAr ? "أدوات الـ SEO والكلمات الدلالية" : "SEO Tools & Subscriptions", price: "$0 – $50 / month" },
          ],
          atlasCost: isAr ? "300$ – 800$ / شهرياً" : "$300 – $800 / month",
          totalOverride: "$300 – $850 / month"
        };
      case "Content Creation":
        return {
          items: [
            { name: isAr ? "أدوات الإنتاج والرسومات" : "Production Tools & Assets", price: "$0 – $30" },
          ],
          atlasCost: isAr ? "200$ – 500$ / شهرياً" : "$200 – $500 / month",
          totalOverride: "$200 – $530"
        };
      case "Email Marketing":
        return {
          items: [
            { name: isAr ? "منصة البريد (Mailchimp/Klaviyo)" : "Email Platform", price: "$0 – $40 / month" },
          ],
          atlasCost: isAr ? "150$ – 400$ / شهرياً" : "$150 – $400 / month",
          totalOverride: "$150 – $440"
        };

      // Extra Services
      case "Google Maps Optimization":
        return {
          items: [
            { name: isAr ? "ملف Google Business الرسمي" : "Google Business Profile", price: isAr ? "مجاناً" : "Free" },
            { name: isAr ? "أدوات فحص الكلمات والـ Local SEO" : "Local SEO Tools", price: "$0 – $30 / month" },
            { name: isAr ? "التحقق والتوثيق الميداني" : "Verification / Local Citations", price: "$0 – $50" },
          ],
          atlasCost: isAr ? "أساسي: 120$ – 250$، متقدم: 250$ – 500$" : "Basic: $120 – $250, Advanced: $250 – $500",
          totalOverride: "$120 – $580"
        };
      case "NFC Cards & Smart Profiles":
        return {
          items: [
            { name: isAr ? "شريحة وبطاقة NFC مع الطباعة" : "NFC Chip Hardware & Card Printing", price: "$20 – $50" },
            { name: isAr ? "استضافة الملف الرقمي ورمز QR" : "Digital Profile Landing Page & QR Hosting", price: "$0 – $20 / year" },
          ],
          atlasCost: isAr ? "تصميم وهوية وبرمجة البطاقة: 80$ – 150$" : "Custom Design & Profile Setup: $80 – $150",
          totalOverride: "$100 – $220"
        };
      case "Social Media Followers Growth":
        return {
          items: [
            { name: isAr ? "ميزانية الإعلانات الترويجية" : "Ads Budget", price: "$10 – $20 / day" },
            { name: isAr ? "أدوات استهداف الجمهور والمحتوى" : "Targeting & Analytics Tools", price: "$0 – $30 / month" },
          ],
          atlasCost: isAr ? "أساسي: 100$ – 300$، متقدم: 300$ – 700$" : "Basic: $100 – $300, Advanced: $300 – $700",
          totalOverride: "$200 – $1200+"
        };

      default:
        return { items: [], atlasCost: "" };
    }
  };

  const calculateTotal = (platform: string) => {
    const details = getPlatformDetails(platform);
    if ('totalOverride' in details && details.totalOverride) {
      return details.totalOverride;
    }
    return "$250 – $1,200";
  };

  const countries = [
    "Morocco", "United States", "United Kingdom", "Canada", "France", "Germany", "Spain", "Italy", "Netherlands", "Belgium", 
    "Switzerland", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Egypt", "Turkey", 
    "India", "China", "Japan", "South Korea", "Australia", "New Zealand", "Brazil", "Argentina", "Mexico", "South Africa",
    "Nigeria", "Kenya", "Ghana", "Senegal", "Ivory Coast", "Algeria", "Tunisia", "Libya", "Mauritania", "Portugal", "Russia",
    "Ukraine", "Poland", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Singapore", "Malaysia", "Indonesia", "Thailand",
    "Vietnam", "Philippines", "Pakistan", "Bangladesh", "Other"
  ];

  const handleProceedToContact = () => {
    if (selection.platform && selection.category) {
      const details = getPlatformDetails(selection.platform);
      const total = calculateTotal(selection.platform);
      
      const autoMessage = isAr
        ? `مرحباً وكالة أطلس 1337،

أنا مهتم ببدء مشروع معكم بالتفاصيل التالية:

*القسم:* ${selection.category}
*المنصة / الخدمة:* ${selection.platform}
*الاستثمار التقديري:* ${total}

*التفاصيل والتكاليف:*
${details.items.map(item => `- ${item.name}: ${item.price}`).join('\n')}
- تكلفة خدمة أطلس 1337: ${details.atlasCost}

يرجى إفادتي بالخطوات التالية لتنفيذ المشروع.`
        : `Hi ATLAS 1337,

I am interested in starting a project with the following details:

*Category:* ${selection.category}
*Platform/Service:* ${selection.platform}
*Estimated Investment:* ${total}

*Breakdown:*
${details.items.map(item => `- ${item.name}: ${item.price}`).join('\n')}
- ATLAS 1337 Service Cost: ${details.atlasCost}

Please let me know the next steps.`;

      setFormData(prev => ({
        ...prev,
        service: selection.category || "",
        message: autoMessage
      }));
    }
    setStep("contact-form");
  };

  const handleSendToWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    
    const text = isAr
      ? `*طلب استفسار جديد عبر الموقع الإلكتروني*
---------------------------
*الاسم:* ${formData.fullName}
*البريد الإلكتروني:* ${formData.email}
*الدولة:* ${formData.country}
*الخدمة:* ${formData.service || selection.category || "استفسار عام"}
---------------------------
*الرسالة والتفاصيل:*
${formData.message}`
      : `*New Inquiry from Website*
---------------------------
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Country:* ${formData.country}
*Service:* ${formData.service || selection.category || "General Inquiry"}
---------------------------
*Message:*
${formData.message}`;

    const url = `https://wa.me/212723242286?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const getStepTitle = () => {
    if (isAr) {
      switch (step) {
        case "initial": return "ابدأ مشروعك مع أطلس 1337";
        case "category": return "اختر فئة الخدمة المطلوبة";
        case "platform": return "اختر المنصة أو نوع التقنية";
        case "details": return `تكلفة تقديرية لـ ${selection.platform}`;
        case "contact-form": return "التواصل المباشر عبر واتساب";
      }
    }
    switch (step) {
      case "initial": return "Get Started with ATLAS 1337";
      case "category": return "Select a Service Category";
      case "platform": return "Choose Your Platform";
      case "details": return `Estimated Cost for ${selection.platform}`;
      case "contact-form": return "Contact Us";
    }
  };

  const getStepSubtitle = () => {
    if (isAr) {
      switch (step) {
        case "initial": return "اختر الطريقة التي تفضلها للبدء والتواصل معنا.";
        case "category": return "ما هو المجال الرئيسي الذي ترغب في تطويره بمشروعك؟";
        case "platform": return "حدد التقنية أو المنصة الأنسب لعملك للحصول على تفاصيل دقيقة.";
        case "contact-form": return "أدخل بياناتك وسيتم توجيهك فوراً للتحدث مع فريقنا عبر واتساب.";
        case "details": return "";
      }
    }
    switch (step) {
      case "initial": return "Choose how you would like to proceed.";
      case "category": return "What kind of project are you looking for?";
      case "platform": return "Which technology stack do you prefer?";
      case "contact-form": return "Fill out the form below to send us a message via WhatsApp.";
      case "details": return "";
    }
  };

  const categoryLabels: Record<string, string> = {
    "Web Development": isAr ? "تطوير مواقع الويب (Web Development)" : "Web Development",
    "Digital Marketing": isAr ? "التسويق الرقمي (Digital Marketing)" : "Digital Marketing",
    "Automation & AI": isAr ? "الأتمتة والذكاء الاصطناعي (AI & Automation)" : "Automation & AI",
    "Extra Services": isAr ? "خدمات متميزة إضافية (Extra Services)" : "Extra Services",
  };

  const platformLabels: Record<string, string> = {
    "Google Maps Optimization": isAr ? "خرائط جوجل والبحث المحلي (Google Maps)" : "Google Maps Optimization",
    "NFC Cards & Smart Profiles": isAr ? "بطاقات NFC والملفات الذكية (NFC Cards)" : "NFC Cards & Smart Profiles",
    "Social Media Followers Growth": isAr ? "تنمية المتابعين والتفاعل (Followers Growth)" : "Social Media Followers Growth",
    "Chatbot": isAr ? "روبوتات الدردشة الذكية (AI Chatbots)" : "Chatbot",
    "AI Agent": isAr ? "وكلاء الذكاء الاصطناعي (AI Agents)" : "AI Agent",
    "AI Automation": isAr ? "أتمتة العمليات والمهام (AI Automation)" : "AI Automation",
    "Social Media Management": isAr ? "إدارة وسائل التواصل (Social Management)" : "Social Media Management",
    "Facebook & Instagram Ads": isAr ? "إعلانات فيسبوك وإنستغرام (Meta Ads)" : "Facebook & Instagram Ads",
    "Google Ads": isAr ? "إعلانات جوجل الممولة (Google Ads)" : "Google Ads",
    "SEO (Search Engine Optimization)": isAr ? "تحسين محركات البحث (SEO)" : "SEO (Search Engine Optimization)",
    "Content Creation": isAr ? "صناعة وتصميم المحتوى (Content Creation)" : "Content Creation",
    "Email Marketing": isAr ? "التسويق عبر البريد الإلكتروني (Email Marketing)" : "Email Marketing",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            dir={dir}
            className="fixed left-[50%] top-[50%] z-[70] w-[95vw] max-w-lg translate-x-[-50%] translate-y-[-50%] border border-border bg-card shadow-2xl rounded-2xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex-none p-5 sm:p-6 pb-2 border-b border-border/40">
              <div className="flex items-center justify-between mb-3">
                {step !== "initial" ? (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors bg-muted/60 hover:bg-muted px-3 py-1.5 rounded-lg"
                  >
                    <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                    <span>{isAr ? "رجوع" : "Back"}</span>
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={handleClose}
                  className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <h2 className="text-lg sm:text-xl font-bold leading-tight text-foreground text-start">
                {getStepTitle()}
              </h2>
              {getStepSubtitle() && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 text-start leading-relaxed">
                  {getStepSubtitle()}
                </p>
              )}

              {step === "details" && (
                <div className="text-xs sm:text-sm p-3 mt-2 bg-muted/50 rounded-xl border border-border/50 text-start leading-relaxed">
                  <strong className="text-foreground">{isAr ? "كيفية الحساب:" : "How to calculate:"}</strong>{" "}
                  <span className="text-foreground">{isAr ? "المجموع" : "Total"}</span> ={" "}
                  <span className="text-primary">{isAr ? "التكاليف الخارجية" : "External Costs"}</span>{" "}
                  {isAr ? "(الاستضافة، النطاق)" : "(Hosting, Domain)"} +{" "}
                  <span className="text-primary">{isAr ? "تكلفة خدمة أطلس 1337" : "ATLAS 1337 Service Fee"}</span>.
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-5 sm:p-6 pt-3">
              {step === "initial" && (
                <div className="grid gap-3 sm:gap-4">
                  <button
                    onClick={() => handleInitialSelect("invoice")}
                    className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-start"
                  >
                    <div>
                      <div className="font-bold text-sm sm:text-base group-hover:text-primary transition-colors">
                        {isAr ? "حساب تكلفة تقديرية / فاتورة سريعة" : "Free Invoice / Estimate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {isAr ? "اختر خدمتك واكتشف التكلفة الخارجية وتكلفة الخدمة" : "Select service and calculate initial costs"}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform rtl:rotate-180" />
                  </button>

                  <button
                    onClick={() => handleInitialSelect("contact")}
                    className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-start"
                  >
                    <div>
                      <div className="font-bold text-sm sm:text-base group-hover:text-primary transition-colors">
                        {isAr ? "التواصل المباشر مع خبرائنا" : "Direct WhatsApp Inquiry"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {isAr ? "أرسل رسالة وتحدث مع فريقنا فوراً عبر واتساب" : "Send a message directly via WhatsApp"}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform rtl:rotate-180" />
                  </button>
                </div>
              )}

              {step === "category" && (
                <div className="grid gap-3">
                  {["Web Development", "Digital Marketing", "Automation & AI", "Extra Services"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-start"
                    >
                      <span className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">
                        {categoryLabels[cat] || cat}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform rtl:rotate-180" />
                    </button>
                  ))}
                </div>
              )}

              {step === "platform" && selection.category && (
                <div className="grid gap-2.5">
                  {getSubCategories(selection.category).map((plat) => (
                    <button
                      key={plat}
                      onClick={() => handlePlatformSelect(plat)}
                      className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group text-start"
                    >
                      <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                        {platformLabels[plat] || plat}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform rtl:rotate-180" />
                    </button>
                  ))}
                </div>
              )}

              {step === "details" && selection.platform && (
                <div className="space-y-4 sm:space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="font-bold text-primary text-sm sm:text-base text-start">
                      {isAr ? "التكاليف الخارجية (أطراف ثالثة)" : "External Costs (Third-party)"}
                    </h3>
                    {getPlatformDetails(selection.platform).items.length > 0 ? (
                      <ul className="space-y-2 bg-muted/40 p-3.5 rounded-xl border border-border/40">
                        {getPlatformDetails(selection.platform).items.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="text-muted-foreground">{item.name}</span>
                            <span className="font-bold font-mono">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs sm:text-sm text-muted-foreground italic text-start">
                        {isAr ? "لا توجد تكاليف خارجية ثابتة أو تختلف حسب الاستهلاك." : "No fixed external costs or varies by usage."}
                      </p>
                    )}
                  </div>
                  
                  <div className="pt-3 border-t border-border/50">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base text-start">
                      {isAr ? "تكلفة خدمة وكالة أطلس 1337" : "ATLAS 1337 Service Fee"}
                    </h3>
                    <div className="flex justify-between items-center p-3.5 bg-primary/10 rounded-xl border border-primary/20">
                      <span className="font-medium text-xs sm:text-sm">
                        {isAr ? "النطاق التقديري" : "Estimated Range"}
                      </span>
                      <span className="font-extrabold text-sm sm:text-base text-primary">
                        {getPlatformDetails(selection.platform).atlasCost}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    <h3 className="font-bold text-primary mb-2 text-sm sm:text-base text-start">
                      {isAr ? "إجمالي الاستثمار التقديري" : "Total Estimated Investment"}
                    </h3>
                    <div className="flex justify-between items-center p-3.5 bg-accent rounded-xl border border-border/50">
                      <div className="flex flex-col text-start">
                        <span className="font-bold text-sm">
                          {isAr ? "المجموع التقريبي" : "Approx. Total"}
                        </span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">
                          {isAr ? "(التكاليف الخارجية + تكلفة الخدمة)" : "(External + Service Cost)"}
                        </span>
                      </div>
                      <span className="font-extrabold text-base sm:text-lg text-primary font-mono">
                        {calculateTotal(selection.platform)}
                      </span>
                    </div>
                  </div>

                  {(selection.category === "Digital Marketing" || selection.category === "Extra Services") && (
                    <div className="p-3 bg-muted/40 border border-border/40 rounded-xl text-xs text-muted-foreground text-start leading-relaxed">
                      <p className="mb-1">
                        <strong className="text-foreground">
                          {isAr ? "ملاحظة بخصوص الإعلانات الممولة:" : "Note on Paid Ads:"}
                        </strong>{" "}
                        {isAr
                          ? "ميزانية الإعلانات تُدفع مباشرة من حساب العميل ولا تشملها باقاتنا. تغطي خدماتنا إعداد وإدارة الحملات."
                          : "Ad spend is paid directly from the client’s account and is not included in our package. Our service only covers campaign setup and management."}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                    <button
                      onClick={() => setStep("platform")}
                      className="w-full sm:flex-1 py-2.5 rounded-xl border border-border hover:bg-accent transition-colors text-xs sm:text-sm font-semibold"
                    >
                      {isAr ? "اختيار منصة أخرى" : "Choose Another"}
                    </button>
                    <button
                      onClick={handleProceedToContact}
                      className="w-full sm:flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center flex items-center justify-center text-xs sm:text-sm font-bold shadow-sm"
                    >
                      {isAr ? "متابعة الطلب عبر واتساب" : "Proceed to WhatsApp"}
                    </button>
                  </div>
                </div>
              )}

              {step === "contact-form" && (
                <form onSubmit={handleSendToWhatsApp} className="space-y-3.5">
                  <div className="space-y-3">
                    <div className="space-y-1 text-start">
                      <label htmlFor="fullName" className="text-xs sm:text-sm font-semibold text-foreground">
                        {isAr ? "الاسم الكامل" : "Full Name"}
                      </label>
                      <input
                        id="fullName"
                        required
                        className="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-start"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder={isAr ? "مثال: كريم العلمي" : "John Doe"}
                      />
                    </div>
                    <div className="space-y-1 text-start">
                      <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-foreground">
                        {isAr ? "البريد الإلكتروني" : "Email Address"}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-start"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="space-y-1 text-start">
                      <label htmlFor="country" className="text-xs sm:text-sm font-semibold text-foreground">
                        {isAr ? "الدولة / البلد" : "Country"}
                      </label>
                      <select
                        id="country"
                        required
                        className="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-start"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="">{isAr ? "اختر الدولة..." : "Select a country"}</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1 text-start">
                      <label htmlFor="service" className="text-xs sm:text-sm font-semibold text-foreground">
                        {isAr ? "الخدمة المطلوبة" : "Service Interest"}
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-start"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">{isAr ? "اختر نوع الخدمة..." : "Select a service"}</option>
                        <option value="Web Development">{isAr ? "تطوير مواقع الويب" : "Web Development"}</option>
                        <option value="Digital Marketing">{isAr ? "التسويق الرقمي" : "Digital Marketing"}</option>
                        <option value="Automation & AI">{isAr ? "الأتمتة والذكاء الاصطناعي" : "Automation & AI"}</option>
                        <option value="NFC Cards">{isAr ? "بطاقات NFC والملفات الذكية" : "NFC Cards & Smart Profiles"}</option>
                        <option value="Google Maps">{isAr ? "خرائط جوجل والـ SEO المحلي" : "Google Maps Optimization"}</option>
                        <option value="General Inquiry">{isAr ? "استفسار عام" : "General Inquiry"}</option>
                      </select>
                    </div>
                    <div className="space-y-1 text-start">
                      <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-foreground">
                        {isAr ? "تفاصيل المشروع أو الرسالة" : "Project Details"}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full p-2.5 rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-start"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder={isAr ? "أخبرنا باختصار عن فكرة مشروعك وأهدافك..." : "Tell us about your project..."}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(selection.platform ? "details" : "initial")}
                      className="w-full sm:flex-1 py-2.5 rounded-xl border border-border hover:bg-accent transition-colors text-xs sm:text-sm font-semibold"
                    >
                      {isAr ? "رجوع" : "Back"}
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-center flex items-center justify-center text-xs sm:text-sm font-bold gap-2 shadow-sm"
                    >
                      <FaWhatsapp size={16} />
                      <span>{isAr ? "إرسال عبر واتساب" : "Send via WhatsApp"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
