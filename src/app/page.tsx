"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  Globe,
  Rocket,
  UserPlus,
  CheckCircle,
  Mail,
  MessageSquare,
  X,
  Menu,
  ArrowRight,
  Star,
  Shield,
  Zap,
  DollarSign,
  Users,
  BarChart2,
  Camera,
  Smile,
  ChevronDown,
  Phone,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";

// Updated model data with only 2 models
// Updated model data with Ana and Evely from Colombia
const modelData = [
  {
    id: 1,
    name: "Ana",
    category: "Fitness",
    country: "Colombia",
    image: "/images/Ana-model-image.jpg",
  },
  {
    id: 2,
    name: "Evely",
    category: "Glamour",
    country: "Colombia",
    image: "/images/Evely-model-image.jpg",
  },
];

// Profiles Showcase Component (Replacing 3D Model Preview)
const ProfilesShowcase = () => {
  const models = [
    {
      name: "Ana",
      country: "Brazil",
      age: 24,
      link: "https://scrile.com/ana-model",
      image: "/images/Ana-model-image.jpg", // Assuming the image is in the public folder
    },
    {
      name: "Evely",
      country: "USA",
      age: 22,
      link: "https://scrile.com/evely-model",
      image: "images/Evely-model-image.jpg", // Assuming the image is in the public folder
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        margin: "2rem 0",
      }}
    >
      {models.map((model, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          style={{
            background: "rgba(30, 30, 30, 0.7)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              height: "300px",
              backgroundImage: `url(${model.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {model.name}
              </h3>
            </div>
          </div>
          <div style={{ padding: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <div>
                <p style={{ color: "#aaa", fontSize: "0.9rem" }}>Country</p>
                <p style={{ color: "#fff", fontWeight: 500 }}>
                  {model.country}
                </p>
              </div>
              <div>
                <p style={{ color: "#aaa", fontSize: "0.9rem" }}>Age</p>
                <p style={{ color: "#fff", fontWeight: 500 }}>{model.age}</p>
              </div>
            </div>
            <motion.a
              href={model.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.8rem",
                borderRadius: "8px",
                background: "linear-gradient(45deg, #ff007a, #a100ff)",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "1rem",
              }}
            >
              View Scrile Profile
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Stats Component
const StatsCounter = ({
  target,
  label,
  suffix = "",
}: {
  target: number;
  label: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();
    const startValue = 0;
    const endValue = target;

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(
        progress * (endValue - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        key={count}
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #ff007a, #a100ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "0.5rem",
        }}
      >
        {count}
        {suffix}
      </motion.div>
      <div style={{ color: "#aaa", fontSize: "0.9rem" }}>{label}</div>
    </div>
  );
};

// Animated Gradient Border Card
const GradientCard = ({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "16px",
        padding: "2px",
        background: "linear-gradient(45deg, #ff007a, #a100ff)",
        ...style,
      }}
    >
      <div
        style={{
          background: "#111",
          borderRadius: "14px",
          padding: "1.5rem",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        marginBottom: "1rem",
        borderRadius: "8px",
        overflow: "hidden",
        background: "rgba(30,30,30,0.5)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "1rem",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: "linear-gradient(45deg, #ff007a, #a100ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Smile size={14} />
          </span>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 1rem 1rem 3rem",
                color: "#ccc",
                lineHeight: 1.6,
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Language toggle component with animations
const LanguageToggle = ({
  currentLang,
  onChange,
}: {
  currentLang: "en" | "es";
  onChange: (lang: "en" | "es") => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{
        position: "fixed",
        top: "1.5rem",
        right: "1.5rem",
        zIndex: 1000,
        display: "flex",
        gap: "0.5rem",
        background: "rgba(20,20,20,0.7)",
        backdropFilter: "blur(10px)",
        borderRadius: "999px",
        padding: "0.3rem",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <motion.button
        onClick={() => onChange("en")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background:
            currentLang === "en"
              ? "linear-gradient(45deg, #ff007a, #a100ff)"
              : "transparent",
          color: currentLang === "en" ? "#fff" : "#999",
          padding: "0.3rem 1rem",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "all 0.3s ease",
        }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => onChange("es")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background:
            currentLang === "es"
              ? "linear-gradient(45deg, #ff007a, #a100ff)"
              : "transparent",
          color: currentLang === "es" ? "#fff" : "#999",
          padding: "0.3rem 1rem",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "all 0.3s ease",
        }}
      >
        ES
      </motion.button>
    </motion.div>
  );
};

// Mobile Menu Component
const MobileMenu = ({
  isOpen,
  onClose,
  lang,
  setLang,
}: {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
}) => {
  // const currentContent = content[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "80%",
            maxWidth: "300px",
            height: "100vh",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            zIndex: 999,
            padding: "2rem",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            onClick={onClose}
            style={{
              alignSelf: "flex-end",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              marginBottom: "2rem",
            }}
          >
            <X size={24} />
          </button>

          <nav
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <a
              href="#about"
              onClick={onClose}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRight size={16} /> {lang === "en" ? "About" : "Acerca de"}
            </a>
            <a
              href="#benefits"
              onClick={onClose}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRight size={16} />{" "}
              {lang === "en" ? "Benefits" : "Beneficios"}
            </a>
            <a
              href="#how-it-works"
              onClick={onClose}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRight size={16} />{" "}
              {lang === "en" ? "How It Works" : "Cómo Funciona"}
            </a>
            <a
              href="#models"
              onClick={onClose}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRight size={16} /> {lang === "en" ? "Models" : "Modelos"}
            </a>
            <a
              href="#apply"
              onClick={onClose}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRight size={16} /> {lang === "en" ? "Apply" : "Aplicar"}
            </a>
            <a
              href="#faqs"
              onClick={onClose}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRight size={16} /> FAQ
            </a>
          </nav>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <button
              onClick={() => setLang("en")}
              style={{
                background:
                  lang === "en"
                    ? "linear-gradient(45deg, #ff007a, #a100ff)"
                    : "rgba(255,255,255,0.1)",
                color: lang === "en" ? "#fff" : "#aaa",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              English
            </button>
            <button
              onClick={() => setLang("es")}
              style={{
                background:
                  lang === "es"
                    ? "linear-gradient(45deg, #ff007a, #a100ff)"
                    : "rgba(255,255,255,0.1)",
                color: lang === "es" ? "#fff" : "#aaa",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Español
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Translation content
// Updated translation content
const content = {
  en: {
    hero: {
      title: "Your Brand. Your Rules.\nWe Build It — You Own It.",
      subtitle:
        "Create your own platform, earn directly from your fans, stay private, and grow with a team behind you.",
      cta1: "Become a Model",
      cta2: "Explore Benefits",
      cta3: "Explore More",
    },
    about: {
      title: "About Global Fan Flicks",
      description:
        "Global Fan Flicks is a division of The Elite Vibe, LLC — built by real creators, digital strategists, and tech experts to empower NSFW and fitness models to launch and own their own platforms. Our mission is simple: creators should earn more, control more, and worry less.",
    },
    benefits: {
      title: "What You Get as a GFF Model",
      items: [
        {
          icon: <Star size={20} />,
          text: "Your own branded site (hosted on Scrile)",
        },
        {
          icon: <DollarSign size={20} />,
          text: "Higher earnings than other platforms",
        },
        {
          icon: <Shield size={20} />,
          text: "Total privacy (faceless options, AI overlays)",
        },
        {
          icon: <Users size={20} />,
          text: "All content uploads & promotions handled by us",
        },
        {
          icon: <BarChart2 size={20} />,
          text: "We grow your fanbase (Reddit, TikTok, Telegram, Twitter, Instagram)",
        },
        {
          icon: <UserPlus size={20} />,
          text: "Human account managers — no bots",
        },
        { icon: <Mail size={20} />, text: "Weekly insights & support" },
        { icon: <Globe size={20} />, text: "Multi-language (EN/ES) community" },
      ],
      quote:
        "You create. We build and grow everything else. Rest, earn, and stay safe — that's our promise.",
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { icon: <UserPlus size={18} />, text: "Apply as a creator" },
        {
          icon: <CheckCircle size={18} />,
          text: "Get approved in 24–48 hours",
        },
        { icon: <Rocket size={18} />, text: "Your platform is launched by us" },
        { icon: <Camera size={18} />, text: "You create content" },
        { icon: <Zap size={18} />, text: "We promote & manage everything" },
        { icon: <DollarSign size={18} />, text: "You track & earn" },
      ],
    },
    models: {
      title: "Imagine Success",
      subtitle:
        "Creators are building brands around the world creating global fans",
    },
    apply: {
      title: "Apply to Join",
      subtitle: "Start your journey in just a few steps",
      form: {
        name: "Name (Stage)",
        age: "Age",
        country: "Country",
        comfort: "Comfort Level",
        links: "Links (Instagram, TikTok)",
        email: "Email Address",
        telegram: "Telegram Username",
        whatsapp: "WhatsApp Number",
        submit: "Submit Application",
      },
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Can I stay faceless?",
          answer:
            "Yes! Many of our models use AI overlays or soft content only. We provide advanced privacy tools to protect your identity while maximizing your earnings.",
        },
        {
          question: "What percentage do I earn?",
          answer:
            "You earn significantly more than traditional platforms. While we don't take a percentage like other sites, we do charge a reasonable fee for our full-service management, profile creation, and marketing campaigns.",
        },
        {
          question: "How long to get approved?",
          answer:
            "Our team reviews applications within 24–48 hours. We prioritize quality and safety for all our creators.",
        },
        {
          question: "Do I need to promote myself?",
          answer:
            "No, our expert marketing team handles all promotion across Reddit, TikTok, Telegram and other platforms to grow your audience.",
        },
        {
          question: "What content can I create?",
          answer:
            "You have full creative freedom — from fitness and glamour to NSFW content. We'll help you find your niche and maximize earnings.",
        },
      ],
    },
    stats: {
      title: "Why Models Choose Us",
      items: [
        { value: 90, display: "80+%", label: "Earnings Kept", suffix: "%" },
        { value: 48, label: "Approval Time", suffix: "hrs" },
        { value: 2, label: "Featured Creators", suffix: "" },
        { value: 24, label: "Support Response", suffix: "hrs" },
      ],
    },
    contact: {
      title: "Support & Contact",
      email: "je@globalfanflicks.com",
      telegram: "@GlobalFanFlicks",
      whatsapp: "+1 (555) 123-4567",
    },
    footer: {
      text: "Global Fan Flicks® is a division of The Elite Vibe, LLC",
      links: ["Terms", "Privacy", "Telegram"],
    },
  },
  es: {
    hero: {
      title: "Tu marca. Tus reglas.\nNosotros lo construimos — Tú lo posees.",
      subtitle:
        "Crea tu propia plataforma, gana directamente de tus fans, mantén tu privacidad y crece con un equipo detrás de ti.",
      cta1: "Conviértete en Modelo",
      cta2: "Explora Beneficios",
      cta3: "Explora Más",
    },
    about: {
      title: "Acerca de Global Fan Flicks",
      description:
        "Global Fan Flicks es una división de The Elite Vibe, LLC — creada por creadores reales, estrategas digitales y expertos en tecnología para empoderar a modelos NSFW y de fitness para que lancen y posean sus propias plataformas. Nuestra misión es simple: los creadores deberían ganar más, controlar más y preocuparse menos.",
    },
    benefits: {
      title: "Lo que obtienes como modelo GFF",
      items: [
        {
          icon: <Star size={20} />,
          text: "Tu propio sitio con marca personal (alojado en Scrile)",
        },
        {
          icon: <DollarSign size={20} />,
          text: "Ganancias más altas que otras plataformas",
        },
        {
          icon: <Shield size={20} />,
          text: "Privacidad total (opciones sin rostro, superposiciones de IA)",
        },
        {
          icon: <Users size={20} />,
          text: "Nos encargamos de todas las cargas de contenido y promociones",
        },
        {
          icon: <BarChart2 size={20} />,
          text: "Hacemos crecer tu base de fans (Reddit, TikTok, Telegram, Twitter, Instagram)",
        },
        {
          icon: <UserPlus size={20} />,
          text: "Gerentes de cuenta humanos — sin bots",
        },
        { icon: <Mail size={20} />, text: "Información y soporte semanal" },
        { icon: <Globe size={20} />, text: "Comunidad multilingüe (EN/ES)" },
      ],
      quote:
        "Tú creas. Nosotros construimos y hacemos crecer todo lo demás. Descansa, gana y mantente segura — esa es nuestra promesa.",
    },
    howItWorks: {
      title: "Cómo funciona",
      steps: [
        { icon: <UserPlus size={18} />, text: "Solicita ser creador" },
        {
          icon: <CheckCircle size={18} />,
          text: "Obtén aprobación en 24–48 horas",
        },
        { icon: <Rocket size={18} />, text: "Lanzamos tu plataforma" },
        { icon: <Camera size={18} />, text: "Tú creas contenido" },
        {
          icon: <Zap size={18} />,
          text: "Nosotros promocionamos y gestionamos todo",
        },
        { icon: <DollarSign size={18} />, text: "Tú rastreas y ganas" },
      ],
    },
    models: {
      title: "Imagina el Éxito",
      subtitle:
        "Los creadores están construyendo marcas en todo el mundo creando fans globales",
    },
    apply: {
      title: "Solicita Unirte",
      subtitle: "Comienza tu viaje en solo unos pasos",
      form: {
        name: "Nombre (Artístico)",
        age: "Edad",
        country: "País",
        comfort: "Nivel de comodidad",
        links: "Enlaces (Instagram, TikTok)",
        email: "Correo Electrónico",
        telegram: "Usuario de Telegram",
        whatsapp: "Número de WhatsApp",
        submit: "Enviar solicitud",
      },
    },
    faqs: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Puedo permanecer sin mostrar mi rostro?",
          answer:
            "¡Sí! Muchas de nuestras modelos usan superposiciones de IA o solo contenido suave. Proporcionamos herramientas avanzadas de privacidad para proteger tu identidad mientras maximizas tus ganancias.",
        },
        {
          question: "¿Qué porcentaje gano?",
          answer:
            "Ganas significativamente más que en plataformas tradicionales. Si bien no tomamos un porcentaje como otros sitios, cobramos una tarifa razonable por nuestra gestión de servicio completo, creación de perfiles y campañas de marketing.",
        },
        {
          question: "¿Cuánto tiempo tarda la aprobación?",
          answer:
            "Nuestro equipo revisa las solicitudes en 24–48 horas. Priorizamos la calidad y seguridad para todas nuestras creadoras.",
        },
        {
          question: "¿Necesito promocionarme?",
          answer:
            "No, nuestro equipo experto en marketing maneja toda la promoción en Reddit, TikTok, Telegram y otras plataformas para hacer crecer tu audiencia.",
        },
        {
          question: "¿Qué contenido puedo crear?",
          answer:
            "Tienes total libertad creativa — desde fitness y glamour hasta contenido NSFW. Te ayudaremos a encontrar tu nicho y maximizar tus ganancias.",
        },
      ],
    },
    stats: {
      title: "Por qué las modelos nos eligen",
      items: [
        { value: 90, display: "80+%", label: "Ganancias conservadas", suffix: "%" },
        { value: 48, label: "Tiempo de aprobación", suffix: "hrs" },
        { value: 2, label: "Creadoras destacadas", suffix: "" },
        { value: 24, label: "Respuesta de soporte", suffix: "hrs" },
      ],
    },
    contact: {
      title: "Soporte y Contacto",
      email: "soporte@globalfanflicks.com",
      telegram: "@GlobalFanFlicks",
      whatsapp: "+1 (555) 123-4567",
    },
    footer: {
      text: "Global Fan Flicks® es una división de The Elite Vibe, LLC",
      links: ["Términos", "Privacidad", "Telegram"],
    },
  },
};

// Reusable Button component with advanced animations
const Button = ({
  icon,
  text,
  onClick,
  variant = "primary",
  size = "medium",
}: {
  icon?: React.ReactNode;
  text: string;
  onClick?: (e: React.MouseEvent) => void; // Updated this line
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
}) => {
  const sizeStyles = {
    small: { padding: "0.5rem 1rem", fontSize: "0.9rem" },
    medium: { padding: "0.7rem 1.4rem", fontSize: "1rem" },
    large: { padding: "1rem 2rem", fontSize: "1.1rem" },
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(45deg, #ff007a, #a100ff)",
      color: "#fff",
      border: "none",
    },
    secondary: {
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.3)",
    },
    ghost: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  };

  return (
    <motion.button
      style={{
        borderRadius: "999px",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 5px 15px rgba(161, 0, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {icon}
      {text}
    </motion.button>
  );
};

// Updated ApplyForm component with proper typing
// Updated ApplyForm component with WhatsApp and email fields
interface FormData {
  name: string;
  age: number;
  country: string;
  comfort?: string;
  links?: string;
  email: string;
  telegram: string;
  whatsapp?: string;
}

const ApplyForm = ({ lang }: { lang: "en" | "es" }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const formContent = content[lang].apply.form;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendToTelegram = async (data: FormData) => {
    const botToken = "7643344349:AAEi7fqqfbXxro8KfJh1M_Heks42DNGfbSY";
    const chatId = "@GlobalFanFlicks";

    const message = `
🌟 *New Model Application* 🌟
*Name (Stage):* ${data.name}
*Age:* ${data.age}
*Country:* ${data.country}
*Email:* ${data.email}
*Comfort Level:* ${data.comfort || "Not specified"}
*Social Links:* ${data.links || "Not provided"}
*Telegram Username:* @${data.telegram}
*WhatsApp:* ${data.whatsapp || "Not provided"}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      const result = await response.json();

      if (!result.ok) {
        throw new Error(
          result.description || "Failed to send message to Telegram"
        );
      }

      return true;
    } catch (error) {
      console.error("Telegram API error:", error);
      throw error;
    }
  };

  const onSubmit = async (data: FormData) => {
    setError(null);

    try {
      await sendToTelegram(data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setError(
        lang === "en"
          ? "Failed to submit application. Please contact us directly on Telegram."
          : "Error al enviar la solicitud. Por favor contáctenos directamente en Telegram."
      );
    }
  };

  return (
    <GradientCard
      style={{ maxWidth: 500, margin: "0 auto", textAlign: "left" }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", padding: "2rem" }}
        >
          <CheckCircle
            size={48}
            style={{ color: "#4ade80", marginBottom: "1rem" }}
          />
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            {lang === "en" ? "Application Submitted!" : "¡Solicitud Enviada!"}
          </h3>
          <p style={{ color: "#aaa", marginBottom: "1rem" }}>
            {lang === "en"
              ? "We'll review your application and get back to you within 48 hours."
              : "Revisaremos tu solicitud y nos pondremos en contacto contigo en 48 horas."}
          </p>
          <Button
            icon={<MessageSquare size={18} />}
            text={
              lang === "en"
                ? "Message Us on Telegram"
                : "Escríbenos en Telegram"
            }
            onClick={() =>
              window.open("https://t.me/GlobalFanFlicks", "_blank")
            }
            variant="secondary"
            size="medium"
          />
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(239, 68, 68, 0.2)",
                color: "#ef4444",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                border: "1px solid rgba(239, 68, 68, 0.3)",
              }}
            >
              {error}
              <div style={{ marginTop: "0.5rem" }}>
                <Button
                  icon={<MessageSquare size={16} />}
                  text={
                    lang === "en"
                      ? "Contact on Telegram"
                      : "Contactar en Telegram"
                  }
                  onClick={() =>
                    window.open("https://t.me/GlobalFanFlicks", "_blank")
                  }
                  variant="ghost"
                  size="small"
                />
              </div>
            </motion.div>
          )}

          <label style={{ display: "block", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#aaa",
              }}
            >
              {formContent.name}:
            </span>
            <input
              {...register("name", { required: true })}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,20,0.5)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <label>
              <span
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#aaa",
                }}
              >
                {formContent.age}:
              </span>
              <input
                type="number"
                {...register("age", { required: true, min: 18 })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(20,20,20,0.5)",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              />
            </label>

            <label>
              <span
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#aaa",
                }}
              >
                {formContent.country}:
              </span>
              <input
                {...register("country", { required: true })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(20,20,20,0.5)",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              />
            </label>
          </div>

          <label style={{ display: "block", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#aaa",
              }}
            >
              {formContent.email}:
            </span>
            <input
              type="email"
              {...register("email", { required: true })}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,20,0.5)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#aaa",
              }}
            >
              {formContent.comfort}:
            </span>
            <input
              {...register("comfort")}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,20,0.5)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#aaa",
              }}
            >
              {formContent.links}:
            </span>
            <input
              {...register("links")}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,20,0.5)",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#aaa",
              }}
            >
              {formContent.telegram}:
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  padding: "0.8rem",
                  background: "rgba(20,20,20,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRight: "none",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  color: "#aaa",
                }}
              >
                @
              </span>
              <input
                {...register("telegram", { required: true })}
                style={{
                  flex: 1,
                  padding: "0.8rem",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(20,20,20,0.5)",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              />
            </div>
          </label>

          <label style={{ display: "block", marginBottom: "2rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#aaa",
              }}
            >
              {formContent.whatsapp}:
            </span>
            <input
              {...register("whatsapp")}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(20,20,20,0.5)",
                color: "#fff",
                fontSize: "1rem",
              }}
              placeholder={
                lang === "en" ? "e.g. +1234567890" : "ej. +1234567890"
              }
            />
          </label>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: "linear-gradient(45deg, #ff007a, #a100ff)",
              padding: "1rem",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontSize: "1.1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                  }}
                />
                {lang === "en" ? "Submitting..." : "Enviando..."}
              </>
            ) : (
              <>
                <UserPlus size={20} />
                {formContent.submit}
              </>
            )}
          </motion.button>
        </form>
      )}
    </GradientCard>
  );
};

// Section styles with responsive design
const sectionStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "4rem 1.5rem",
  textAlign: "center",
};

const headingStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 800,
  marginBottom: "1.5rem",
  lineHeight: 1.2,
  background: "linear-gradient(90deg, #fff, #aaa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const textStyle: React.CSSProperties = {
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  color: "#ccc",
  lineHeight: 1.6,
  maxWidth: "800px",
  margin: "0 auto",
};

const subheadingStyle: React.CSSProperties = {
  fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
  color: "#ff007a",
  fontWeight: 600,
  marginBottom: "1rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModel, setActiveModel] = useState<number | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const currentContent = content[lang];

  // Close mobile menu when language changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [lang]);

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>
          {lang === "en"
            ? "Global Fan Flicks - Model Platform"
            : "Global Fan Flicks - Plataforma para Modelos"}
        </title>
        <meta name="description" content={currentContent.hero.subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <main
        style={{
          fontFamily: "'Poppins', sans-serif",
          background:
            "radial-gradient(circle at top left, #0a0420 0%, #1a1a2e 50%, #0a0420 100%)",
          color: "#fff",
          overflowX: "hidden",
        }}
      >
        {/* Animated Background Elements - Hydration-Safe Version */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          {typeof window === "undefined"
            ? null
            : [...Array(10)].map((_, i) => {
                // Generate stable random values based on index
                const stableRandom = (seed: number) => {
                  const x = Math.sin(i + seed) * 10000;
                  return x - Math.floor(x);
                };

                const initialX = stableRandom(1) * 100;
                const initialY = stableRandom(2) * 100;
                const initialScale = stableRandom(3) * 0.5 + 0.5;
                const targetX = stableRandom(4) * 100 - 50;
                const targetY = stableRandom(5) * 100 - 50;
                const duration = stableRandom(6) * 20 + 10;
                const shadowSize = stableRandom(7) * 50 + 50;
                const shadowSpread = stableRandom(8) * 20 + 10;

                return (
                  <motion.div
                    key={i}
                    initial={{
                      x: initialX,
                      y: initialY,
                      opacity: 0.1,
                      scale: initialScale,
                    }}
                    animate={{
                      x: [null, targetX],
                      y: [null, targetY],
                      transition: {
                        duration: duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "1px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      boxShadow: `0 0 ${shadowSize}px ${shadowSpread}px rgba(161, 0, 255, 0.5)`,
                    }}
                  />
                );
              })}
        </div>

        <LanguageToggle currentLang={lang} onChange={setLang} />

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            top: "1.5rem",
            left: "1.5rem",
            zIndex: 999,
            background: "rgba(20,20,20,0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "0.5rem",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Menu size={24} />
        </motion.button>

        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          lang={lang}
          setLang={setLang}
        />

       {/* Futuristic Logo - Add this right after the MobileMenu button */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: 1,
    scale: 1,
    boxShadow: [
      "0 0 10px rgba(161, 0, 255, 0.5)",
      "0 0 20px rgba(161, 0, 255, 0.7)",
      "0 0 10px rgba(161, 0, 255, 0.5)",
    ],
  }}
  transition={{
    delay: 0.5,
    boxShadow: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }}
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 30px rgba(161, 0, 255, 0.8)",
  }}
  className="futuristic-logo"
  style={{
    position: "fixed",
    top: "1.5rem",
    left: "calc(50% - 30px)",
    zIndex: 998,
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid rgba(161, 0, 255, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(20, 20, 20, 0.7)",
    backdropFilter: "blur(10px)",
    boxShadow:
      "0 0 0 2px rgba(161, 0, 255, 0.3), 0 0 20px rgba(161, 0, 255, 0.5)",
    cursor: "pointer",
    margin: "0 auto",
  }}
>
  <div
    style={{
      position: "absolute",
      top: "-10px",
      left: "-10px",
      right: "-10px",
      bottom: "-10px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(161, 0, 255, 0.2) 0%, transparent 70%)",
      zIndex: -1,
    }}
  />

  <div
    style={{
      width: "90%",
      height: "90%",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="/images/logo.png" // Change this to your logo path
      alt="Logo"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </div>
</motion.div>


        {/* HERO SECTION */}
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            ...sectionStyle,
            paddingTop: "8rem",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animated hero gradient */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle at center, rgba(161,0,255,0.2) 0%, rgba(0,0,0,0) 50%)",
              zIndex: -1,
              opacity: 0.5,
            }}
          ></div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ padding: "0 1rem" }}
          >
            <p style={subheadingStyle}>
              {lang === "en"
                ? "Exclusive Model Platform"
                : "Plataforma Exclusiva para Modelos"}
            </p>
            <h1
              style={{
                ...headingStyle,
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                background: "linear-gradient(90deg, #ff007a, #a100ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              {currentContent.hero.title.split("\n").map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: "block" }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>
            <motion.p
              style={{
                ...textStyle,
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                maxWidth: "800px",
                marginBottom: "3rem",
                padding: "0 1rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {currentContent.hero.subtitle}
            </motion.p>

            <motion.div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "2rem",
                padding: "0 1rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                icon={<UserPlus size={20} />}
                text={currentContent.hero.cta1}
                onClick={() =>
                  document
                    .getElementById("apply")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="large"
              />
              <Button
                icon={<Rocket size={20} />}
                text={currentContent.hero.cta2}
                onClick={() =>
                  document
                    .getElementById("benefits")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="secondary"
                size="large"
              />
              <Button
                icon={<Globe size={20} />}
                text={currentContent.hero.cta3}
                onClick={() => {
                  // Try to open app directly
                  window.location.href =
                    "tg://resolve?domain=GlobalFanFlicksOfficial";

                  // If still on page after timeout, redirect to web
                  setTimeout(() => {
                    if (!document.hidden) {
                      window.open(
                        "https://t.me/GlobalFanFlicksOfficial",
                        "_blank"
                      );
                    }
                  }, 300);
                }}
                variant="ghost"
                size="large"
              />
            </motion.div>
          </motion.div>

          {/* Profiles Showcase Section (Replacing 3D Model Preview) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ marginTop: "4rem", padding: "0 1rem" }}
          >
            <ProfilesShowcase />
          </motion.div>
        </motion.section>

        {/* STATS SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            ...sectionStyle,
            padding: "4rem 1.5rem",
            background:
              "linear-gradient(to right, rgba(161,0,255,0.1), rgba(255,0,122,0.1))",
            borderRadius: "16px",
            margin: "2rem auto",
            maxWidth: "1200px",
          }}
        >
          <h2 style={{ ...headingStyle, marginBottom: "3rem" }}>
            {currentContent.stats.title}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {currentContent.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GradientCard style={{ height: "100%" }}>
                  <StatsCounter
                    target={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                  />
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ ...sectionStyle, padding: "4rem 1.5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={subheadingStyle}>{currentContent.about.title}</p>
            <h2 style={headingStyle}>
              {lang === "en"
                ? "Built By Creators, For Creators"
                : "Creado Por Creadores, Para Creadores"}
            </h2>
            <p style={{ ...textStyle, padding: "0 1rem" }}>
              {currentContent.about.description}
            </p>
          </motion.div>
        </motion.section>

        {/* MODEL BENEFITS */}
        <motion.section
          id="benefits"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ ...sectionStyle, padding: "4rem 1.5rem" }}
        >
          <p style={subheadingStyle}>{currentContent.benefits.title}</p>
          <h2 style={headingStyle}>
            {lang === "en"
              ? "Everything You Need To Succeed"
              : "Todo Lo Que Necesitas Para Triunfar"}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              margin: "3rem auto",
              maxWidth: "1000px",
            }}
          >
            {currentContent.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard style={{ height: "100%", textAlign: "left" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        background: "linear-gradient(45deg, #ff007a, #a100ff)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        background: "linear-gradient(90deg, #fff, #aaa)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.text}
                    </h3>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            style={{
              fontStyle: "italic",
              marginTop: "3rem",
              color: "#fff",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              padding: "1.5rem",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "3px",
                height: "100%",
                background: "linear-gradient(to bottom, #ff007a, #a100ff)",
                borderRadius: "3px",
              }}
            />
            {`&ldquo;${currentContent.benefits.quote}&rdquo;`}
          </motion.blockquote>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section
          id="how-it-works"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ ...sectionStyle, padding: "4rem 1.5rem" }}
        >
          <p style={subheadingStyle}>{currentContent.howItWorks.title}</p>
          <h2 style={headingStyle}>
            {lang === "en"
              ? "Simple Process, Maximum Results"
              : "Proceso Simple, Resultados Máximos"}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              margin: "3rem auto",
              maxWidth: "1000px",
            }}
          >
            {currentContent.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <GradientCard style={{ height: "100%", padding: "1.5rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(45deg, #ff007a, #a100ff)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      color: "#fff",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      marginBottom: "1rem",
                      color: "#fff",
                    }}
                  >
                    {step.text}
                  </h3>
                  <p
                    style={{
                      color: "#aaa",
                      fontSize: "0.9rem",
                    }}
                  >
                    {lang === "en"
                      ? `Step ${index + 1} of ${
                          currentContent.howItWorks.steps.length
                        }`
                      : `Paso ${index + 1} de ${
                          currentContent.howItWorks.steps.length
                        }`}
                  </p>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MODEL WALL */}
        <motion.section
          id="models"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ ...sectionStyle, padding: "4rem 1rem" }}
        >
          <p style={subheadingStyle}>{currentContent.models.title}</p>
          <h2 style={headingStyle}>{currentContent.models.subtitle}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginTop: "3rem",
              padding: "0 1rem",
            }}
          >
            {modelData.map((model) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() =>
                  setActiveModel(activeModel === model.id ? null : model.id)
                }
                style={{
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "16px",
                  height: "350px",
                  backgroundImage: `url(${model.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {model.name}
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    {model.category} • {model.country}
                  </p>
                </div>

                <AnimatePresence>
                  {activeModel === model.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0,0,0,0.7)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2rem",
                        textAlign: "center",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {model.name}
                      </h3>
                      <p style={{ marginBottom: "1rem" }}>
                        {model.category} Model from {model.country}
                      </p>
                      <Button
                        text={lang === "en" ? "View Profile" : "Ver Perfil"}
                        onClick={(e) => {
                          e.stopPropagation();
                          // In production, would link to model's actual profile
                          window.open(
                            "https://unsplash.com/s/photos/model",
                            "_blank"
                          );
                        }}
                        size="small"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* APPLY NOW FORM */}
        <motion.section
          id="apply"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ ...sectionStyle, padding: "4rem 1rem" }}
        >
          <p style={subheadingStyle}>{currentContent.apply.title}</p>
          <h2 style={headingStyle}>{currentContent.apply.subtitle}</h2>
          <ApplyForm lang={lang} />
        </motion.section>

        {/* FAQ SECTION */}
        <motion.section
          id="faqs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ ...sectionStyle, padding: "4rem 1rem" }}
        >
          <p style={subheadingStyle}>{currentContent.faqs.title}</p>
          <h2 style={headingStyle}>
            {lang === "en"
              ? "Have Questions? We Have Answers"
              : "¿Tienes Preguntas? Tenemos Respuestas"}
          </h2>

          <div
            style={{
              maxWidth: 800,
              margin: "3rem auto",
              background: "rgba(20,20,20,0.5)",
              borderRadius: "16px",
              padding: "1.5rem",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {currentContent.faqs.items.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </motion.section>

        {/* CONTACT & FOOTER */}
        {/* CONTACT & FOOTER */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            ...sectionStyle,
            padding: "4rem 1.5rem",
            background:
              "linear-gradient(to bottom, rgba(161,0,255,0.05), rgba(255,0,122,0.05))",
            borderRadius: "16px",
            margin: "2rem auto",
            maxWidth: "1200px",
          }}
        >
          <p style={subheadingStyle}>{currentContent.contact.title}</p>
          <h2 style={headingStyle}>
            {lang === "en"
              ? "Ready To Start Your Journey?"
              : "¿Lista Para Comenzar Tu Viaje?"}
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              margin: "2rem 0 3rem",
              fontSize: "1.1rem",
              color: "#ccc",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Mail size={20} /> {currentContent.contact.email}
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <MessageSquare size={20} /> Telegram:{" "}
              {currentContent.contact.telegram}
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Phone size={20} /> WhatsApp: {currentContent.contact.whatsapp}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              icon={<UserPlus size={20} />}
              text={lang === "en" ? "Apply Now" : "Aplicar Ahora"}
              onClick={() =>
                document
                  .getElementById("apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="large"
            />
            <Button
              icon={<MessageSquare size={20} />}
              text={lang === "en" ? "Chat on Telegram" : "Chatear en Telegram"}
              onClick={() =>
                window.open("https://t.me/GlobalFanFlicks", "_blank")
              }
              variant="secondary"
              size="large"
            />
            <Button
              icon={<Phone size={20} />}
              text={
                lang === "en" ? "Message on WhatsApp" : "Mensaje por WhatsApp"
              }
              onClick={() =>
                window.open(
                  `https://wa.me/${currentContent.contact.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`,
                  "_blank"
                )
              }
              variant="ghost"
              size="large"
            />
          </div>

          <footer
            style={{
              marginTop: "4rem",
              fontSize: "0.9rem",
              color: "#777",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div>{currentContent.footer.text}</div>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link
                href="/terms"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                Terms
              </Link>

              <Link
                href="/privacy"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                Privacy
              </Link>

              <a
                href="https://t.me/GlobalFanFlicks"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#999",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                Telegram
              </a>
            </div>
          </footer>
        </motion.section>
      </main>
    </>
  );
}
