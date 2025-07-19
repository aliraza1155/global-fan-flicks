"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
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
import Image from "next/image";

// Global Models Data
const globalModels = [
  {
    id: 1,
    name: "Ashley",
    category: "Glamour",
    country: "USA 🇺🇸",
    location: "Los Angeles",
    image: "/images/Ashley-model-image.png",
    bio: "Glamour queen from Los Angeles with a bold heart and seductive eyes.",
  },
  {
    id: 2,
    name: "Amélie",
    category: "Fashion",
    country: "France 🇫🇷",
    location: "Paris",
    image: "/images/Amelie-model-image.png",
    bio: "Parisian elegance with sensual curves and bold style.",
  },
  {
    id: 3,
    name: "Malia",
    category: "Tropical Exotic",
    country: "Fiji 🇫🇯",
    location: "Coral Coast",
    image: "/images/Malia-model-image.jpg",
    bio: "Island breeze and fierce grace — Malia brings the tropics to life.",
  },
  {
    id: 4,
    name: "Camila",
    category: "Fitness",
    country: "Brazil 🇧🇷",
    location: "Rio de Janeiro",
    image: "/images/Camila-model-image.png",
    bio: "Rio’s hottest — passion, rhythm, and fire in every curve.",
  },
  {
    id: 5,
    name: "Jisoo",
    category: "Faceless AI",
    country: "South Korea 🇰🇷",
    location: "Seoul",
    image: "/images/Jisoo-model-image.png",
    bio: "Seoul's beauty — innocence with a secret fire.",
  },
 
  {
    id: 8,
    name: "Chloe",
    category: "Beach",
    country: "Australia 🇦🇺",
    location: "Gold Coast",
    image: "/images/Chloe-model-image.png",
    bio: "Sun-kissed Aussie babe with endless curves and confidence.",
  },
  {
    id: 9,
    name: "Sakura",
    category: "Cultural",
    country: "Japan 🇯🇵",
    location: "Tokyo",
    image: "/images/Sakura-model-image.png",
    bio: "A modern twist on timeless Tokyo elegance.",
  },

  {
    id: 10,
    name: "Isla",
    category: "Tropical",
    country: "Australia 🇦🇺",
    location: "Whitsunday Islands",
    image: "/images/Isla-model-image.png",
    bio: "Golden-hour glow and tropical fire — Isla owns every wave she walks past.",
  },
  {
    id: 11,
    name: "Hana",
    category: "Urban Chic",
    country: "South Korea 🇰🇷",
    location: "Busan",
    image: "/images/Hana-model-iamge.jpg",
    bio: "Bold attitude meets flawless beauty — Hana redefines Korean edge.",
  },
  {
    id: 12,
    name: "Zara",
    category: "Beach Exotic",
    country: "Jamaica 🇯🇲",
    location: "Montego Bay",
    image: "/images/Zara-model-image.jpg",
    bio: "Sun-drenched curves and island soul — Zara lights up every shoreline.",
  },
  
];

// Global Models Showcase Component
const GlobalModelsShowcase = ({ lang }: { lang: "en" | "es" }) => {
  return (
    <div style={{ width: "100%", padding: "2rem 0" }}>
      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
          background: "linear-gradient(90deg, #ff007a, #a100ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {lang === "en"
          ? "🌍 Global Models. Global Reach."
          : "🌍 Modelos Globales. Alcance Global."}
      </h3>
      <p style={{ color: "#ccc", maxWidth: "800px", margin: "0 auto 2rem" }}>
        {lang === "en"
          ? "Our creators come from every corner of the world — and rule their platforms with style, power, and purpose."
          : "Nuestros creadores vienen de todos los rincones del mundo y dominan sus plataformas con estilo, poder y propósito."}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          margin: "2rem 0",
        }}
      >
        {globalModels.map((model) => (
          <motion.div
            key={model.id}
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
                <p style={{ color: "#aaa" }}>
                  {model.category} • {model.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Why Models Rule Section
const WhyModelsRule = ({ lang }: { lang: "en" | "es" }) => {
  const items = [
    {
      icon: "👑",
      title:
        lang === "en"
          ? "Models Are the Priority"
          : "Las Modelos Son la Prioridad",
      text:
        lang === "en"
          ? "This is their domain—where their talent sets the tone."
          : "Este es su dominio, donde su talento marca el tono.",
    },
    {
      icon: "💥",
      title: lang === "en" ? "Confidence & Power" : "Confianza y Poder",
      text:
        lang === "en"
          ? "We walk in, we own it. Because here? We rule."
          : "Entramos, lo poseemos. Porque aquí? Nosotras mandamos.",
    },
    {
      icon: "📈",
      title:
        lang === "en"
          ? "A Place to Build Careers"
          : "Un Lugar para Construir Carreras",
      text:
        lang === "en"
          ? "Where ambition meets opportunity."
          : "Donde la ambición se encuentra con la oportunidad.",
    },
    {
      icon: "🤝",
      title:
        lang === "en" ? "Respect & Representation" : "Respeto y Representación",
      text:
        lang === "en"
          ? "We uplift, protect, and partner with our creators."
          : "Elevamos, protegemos y colaboramos con nuestros creadores.",
    },
  ];

  return (
    <motion.section style={{ ...sectionStyle, padding: "4rem 1.5rem" }}>
      <p style={subheadingStyle}>
        {lang === "en"
          ? "👑 Why Models Rule Here"
          : "👑 Por Qué Las Modelos Mandan Aquí"}
      </p>
      <h2 style={headingStyle}>
        {lang === "en"
          ? "High-Standard, High-Impact Vibe"
          : "Ambiente de Alto Nivel y Alto Impacto"}
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
        {items.map((item, index) => (
          <motion.div key={index} whileHover={{ y: -5 }}>
            <GradientCard
              style={{ height: "100%", padding: "1.5rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  background: "linear-gradient(90deg, #fff, #aaa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#aaa" }}>{item.text}</p>
            </GradientCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
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

// Language toggle component
const LanguageToggle = ({
  currentLang,
  onChange,
  visible,
}: {
  currentLang: "en" | "es";
  onChange: (lang: "en" | "es") => void;
  visible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
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


// Logo Component with scroll behavior
const Logo = ({ visible }: { visible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        boxShadow: visible
          ? [
              "0 0 12px rgba(161, 0, 255, 0.4)",
              "0 0 24px rgba(161, 0, 255, 0.6)",
              "0 0 12px rgba(161, 0, 255, 0.4)",
            ]
          : "none",
      }}
      transition={{
        duration: 0.3,
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 36px rgba(161, 0, 255, 0.7)",
      }}
      style={{
        position: "fixed",
        top: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 998,
        width: "clamp(70px, 12vw, 100px)", // ⬆️ increased size
        height: "clamp(70px, 12vw, 100px)", // ⬆️ increased size
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Global Fan Flicks"
        width={105}
        height={105}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: "drop-shadow(0 0 8px rgba(161, 0, 255, 0.5))",
          userSelect: "none",
        }}
      />
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

// Reusable Button component
const Button = ({
  icon,
  text,
  onClick,
  variant = "primary",
  size = "medium",
}: {
  icon?: React.ReactNode;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
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

// ApplyForm component
const ApplyForm = ({ lang }: { lang: "en" | "es" }) => {
  interface FormData {
    name: string;
    age: number;
    country: string;
    email: string;
    comfort?: string;
    links?: string;
    telegram: string;
    whatsapp?: string;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();
  
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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

  const formContent = {
    en: {
      name: "Name (Stage)",
      age: "Age",
      country: "Country",
      comfort: "Comfort Level",
      links: "Links (Instagram, TikTok)",
      email: "Email Address",
      telegram: "Telegram Username",
      whatsapp: "WhatsApp Number",
      submit: "Submit Application",
      successTitle: "Application Submitted!",
      successMessage:
        "We'll review your application and get back to you within 48 hours.",
      telegramButton: "Message Us on Telegram",
    },
    es: {
      name: "Nombre (Artístico)",
      age: "Edad",
      country: "País",
      comfort: "Nivel de comodidad",
      links: "Enlaces (Instagram, TikTok)",
      email: "Correo Electrónico",
      telegram: "Usuario de Telegram",
      whatsapp: "Número de WhatsApp",
      submit: "Enviar solicitud",
      successTitle: "¡Solicitud Enviada!",
      successMessage:
        "Revisaremos tu solicitud y nos pondremos en contacto contigo en 48 horas.",
      telegramButton: "Escríbenos en Telegram",
    },
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
            {formContent[lang].successTitle}
          </h3>
          <p style={{ color: "#aaa", marginBottom: "1rem" }}>
            {formContent[lang].successMessage}
          </p>
          <Button
            icon={<MessageSquare size={18} />}
            text={formContent[lang].telegramButton}
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
              {formContent[lang].name}:
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
                {formContent[lang].age}:
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
                {formContent[lang].country}:
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
              {formContent[lang].email}:
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
              {formContent[lang].comfort}:
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
              {formContent[lang].links}:
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
              {formContent[lang].telegram}:
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
              {formContent[lang].whatsapp}:
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
                {formContent[lang].submit}
              </>
            )}
          </motion.button>
        </form>
      )}
    </GradientCard>
  );
};

// Section styles
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
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Handle scroll for logo visibility
  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollPosition = mainRef.current.scrollTop;
        setIsScrolled(scrollPosition > 50);
      }
    };

    if (mainRef.current) {
      mainRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Close mobile menu when language changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [lang]);

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Content
  const content = {
    en: {
      hero: {
        title: "🪩 Models Rule.",
        subtitle:
          "Your Brand. Your Rules.\nWe build it — you own it.\nLaunch your own platform. Stay private. Earn more.\nOnlyFans. Fansly. Your Own Website.",
        cta1: "Apply to Join",
        cta2: "Explore Benefits",
        cta3: "Contact Us",
      },
      about: {
        title: "About Global Fan Flicks",
        description:
          "Built by real creators, digital strategists, and tech experts — Global Fan Flicks (a division of The Elite Vibe, LLC) empowers NSFW and fitness creators to launch and own their platforms, keep 100% creative control, and grow globally.",
      },
      benefits: {
        title: "What You Get",
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
          {
            icon: <Globe size={20} />,
            text: "Multi-language (EN/ES) community",
          },
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
          {
            icon: <Rocket size={18} />,
            text: "Your platform is launched by us",
          },
          { icon: <Camera size={18} />, text: "You create content" },
          { icon: <Zap size={18} />, text: "We promote & manage everything" },
          { icon: <DollarSign size={18} />, text: "You track & earn" },
        ],
      },
      apply: {
        title: "Apply to Join",
        subtitle: "Start your journey in just a few steps",
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
      contact: {
        title: "Support & Contact",
        email: "je@globalfanflicks.com",
        telegram: "@GlobalFanFlicks",
        whatsapp: "+1 (726) 242-5583",
      },
      footer: {
        text: "Global Fan Flicks® is a division of The Elite Vibe, LLC",
        links: ["Terms", "Privacy", "Telegram"],
      },
    },
    es: {
      hero: {
        title: "🪩 Las Modelos Mandan.",
        subtitle:
          "Tu Marca. Tus Reglas.\nNosotros lo construimos — tú lo posees.\nLanza tu propia plataforma. Mantén tu privacidad. Gana más.\nOnlyFans. Fansly. Tu Propio Sitio Web.",
        cta1: "Aplicar para Unirse",
        cta2: "Explorar Beneficios",
        cta3: "Contáctanos",
      },
      about: {
        title: "Acerca de Global Fan Flicks",
        description:
          "Creado por creadores reales, estrategas digitales y expertos en tecnología — Global Fan Flicks (una división de The Elite Vibe, LLC) empodera a los creadores NSFW y de fitness para que lancen y posean sus plataformas, mantengan el 100% de control creativo y crezcan globalmente.",
      },
      benefits: {
        title: "Lo Que Obtienes",
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
        title: "Cómo Funciona",
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
      apply: {
        title: "Solicita Unirte",
        subtitle: "Comienza tu viaje en solo unos pasos",
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
      contact: {
        title: "Soporte y Contacto",
        email: "soporte@globalfanflicks.com",
        telegram: "@GlobalFanFlicks",
        whatsapp: "+1 (726) 242-5583",
      },
      footer: {
        text: "Global Fan Flicks® es una división de The Elite Vibe, LLC",
        links: ["Términos", "Privacidad", "Telegram"],
      },
    },
  };

  const currentContent = content[lang];

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
      </Head>

      <main
        ref={mainRef}
        style={{
          fontFamily: "'Poppins', sans-serif",
          background:
            "radial-gradient(circle at top left, #0a0420 0%, #1a1a2e 50%, #0a0420 100%)",
          color: "#fff",
          overflowX: "hidden",
          height: "100vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {/* Logo and Language Toggle */}
        <Logo visible={!isScrolled} />
        <LanguageToggle
          currentLang={lang}
          onChange={setLang}
          visible={!isScrolled}
        />

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
                whiteSpace: "pre-line",
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
                icon={<MessageSquare size={20} />}
                text={currentContent.hero.cta3}
                onClick={() =>
                  window.open("https://t.me/GlobalFanFlicks", "_blank")
                }
                variant="ghost"
                size="large"
              />
            </motion.div>
          </motion.div>

          {/* Global Models Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ marginTop: "4rem", padding: "0 1rem" }}
          >
            <GlobalModelsShowcase lang={lang} />
          </motion.div>
        </motion.section>

        {/* WHY MODELS RULE SECTION */}
        <WhyModelsRule lang={lang} />

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
              whiteSpace: "pre-line",
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
            {currentContent.benefits.quote}
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
                {lang === "en" ? "Terms" : "Términos"}
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
                {lang === "en" ? "Privacy" : "Privacidad"}
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
