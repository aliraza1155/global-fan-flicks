'use client';
import { motion} from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Lock, 
  Shield, 
  EyeOff, 
  Database, 
  User, 
  Mail, 
  MessageSquare,
  Check,
  Settings,
  // ChevronDown
} from 'lucide-react';
import { useState } from 'react';

// Language content
const privacyContent = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated",
    sections: {
      information: "1. Information We Collect",
      usage: "2. How We Use Your Data",
      security: "3. Data Security",
      rights: "4. Your Rights",
      contact: "5. Contact Us"
    },
    creatorInfo: {
      title: "Creator Information",
      items: [
        "Stage name/alias",
        "Contact email",
        "Payment details (processed securely)"
      ]
    },
    contentMetadata: {
      title: "Content Metadata",
      items: [
        "Upload timestamps",
        "Content access logs",
        "Engagement analytics"
      ]
    },
    technicalData: {
      title: "Technical Data",
      items: [
        "Device information",
        "IP address (anonymized)",
        "Browser type/version"
      ]
    },
    usageItems: [
      {
        title: "Platform Operation",
        description: "To provide and maintain our services, process payments, and ensure platform security"
      },
      {
        title: "Content Delivery",
        description: "To host and distribute your content according to your specified access rules"
      },
      {
        title: "Marketing Support",
        description: "To promote your content across platforms as per your preferences"
      }
    ],
    securityItems: [
      {
        title: "Encryption",
        description: "All data is encrypted in transit and at rest using AES-256 encryption"
      },
      {
        title: "Anonymity",
        description: "Faceless creator options with AI overlays to protect identity"
      },
      {
        title: "Access Control",
        description: "Strict role-based access with multi-factor authentication"
      }
    ],
    rightsItems: [
      {
        title: "Access & Portability",
        description: "Request a copy of your data in machine-readable format"
      },
      {
        title: "Correction",
        description: "Update or correct inaccurate personal information"
      },
      {
        title: "Deletion",
        description: "Request deletion of your personal data where applicable"
      },
      {
        title: "Restriction",
        description: "Limit how we use your data in certain circumstances"
      }
    ],
    contact: {
      email: "je@globalfanflicks.com",
      telegram: "@GlobalFanFlicksSupport"
    },
    backButton: "Back to Home"
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización",
    sections: {
      information: "1. Información que Recopilamos",
      usage: "2. Cómo Usamos Tus Datos",
      security: "3. Seguridad de Datos",
      rights: "4. Tus Derechos",
      contact: "5. Contacto"
    },
    creatorInfo: {
      title: "Información del Creador",
      items: [
        "Nombre artístico/alias",
        "Correo electrónico de contacto",
        "Detalles de pago (procesados de forma segura)"
      ]
    },
    contentMetadata: {
      title: "Metadatos de Contenido",
      items: [
        "Marcas de tiempo de carga",
        "Registros de acceso al contenido",
        "Analíticas de interacción"
      ]
    },
    technicalData: {
      title: "Datos Técnicos",
      items: [
        "Información del dispositivo",
        "Dirección IP (anonimizada)",
        "Tipo/versión del navegador"
      ]
    },
    usageItems: [
      {
        title: "Operación de la Plataforma",
        description: "Para proporcionar y mantener nuestros servicios, procesar pagos y garantizar la seguridad de la plataforma"
      },
      {
        title: "Distribución de Contenido",
        description: "Para alojar y distribuir tu contenido según las reglas de acceso especificadas"
      },
      {
        title: "Soporte de Marketing",
        description: "Para promocionar tu contenido en varias plataformas según tus preferencias"
      }
    ],
    securityItems: [
      {
        title: "Encriptación",
        description: "Todos los datos se encriptan en tránsito y en reposo usando encriptación AES-256"
      },
      {
        title: "Anonimato",
        description: "Opciones para creadores sin rostro con superposiciones de IA para proteger la identidad"
      },
      {
        title: "Control de Acceso",
        description: "Acceso estricto basado en roles con autenticación multifactor"
      }
    ],
    rightsItems: [
      {
        title: "Acceso y Portabilidad",
        description: "Solicitar una copia de tus datos en formato legible por máquina"
      },
      {
        title: "Corrección",
        description: "Actualizar o corregir información personal inexacta"
      },
      {
        title: "Eliminación",
        description: "Solicitar la eliminación de tus datos personales cuando sea aplicable"
      },
      {
        title: "Restricción",
        description: "Limitar cómo usamos tus datos en ciertas circunstancias"
      }
    ],
    contact: {
      email: "soporte@globalfanflicks.com",
      telegram: "@GlobalFanFlicksSupport"
    },
    backButton: "Volver al Inicio"
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const currentContent = privacyContent[lang];

  return (
    <div className="privacy-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      color: '#fff',
      background: `
        radial-gradient(circle at 20% 30%, rgba(161, 0, 255, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 80% 70%, rgba(255, 0, 122, 0.15) 0%, transparent 30%),
        linear-gradient(to bottom, #0a0420, #1a1a2e)
      `,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Animated background elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.8)',
            boxShadow: `0 0 ${Math.random() * 30 + 20}px ${Math.random() * 10 + 5}px rgba(161, 0, 255, 0.7)`,
            zIndex: -1
          }}
        />
      ))}

      {/* Language Toggle */}
      <div style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.5rem',
        zIndex: 1000,
        display: 'flex',
        gap: '0.5rem',
        background: 'rgba(20,20,20,0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '999px',
        padding: '0.3rem',
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <button
          onClick={() => setLang('en')}
          style={{
            background: lang === 'en' ? 'linear-gradient(45deg, #ff007a, #a100ff)' : 'transparent',
            color: lang === 'en' ? '#fff' : '#999',
            padding: '0.3rem 1rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
          }}
        >
          EN
        </button>
        <button
          onClick={() => setLang('es')}
          style={{
            background: lang === 'es' ? 'linear-gradient(45deg, #ff007a, #a100ff)' : 'transparent',
            color: lang === 'es' ? '#fff' : '#999',
            padding: '0.3rem 1rem',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
          }}
        >
          ES
        </button>
      </div>

      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#a100ff',
            textDecoration: 'none',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            background: 'rgba(20, 20, 20, 0.5)',
            padding: '0.8rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            fontFamily: "'Poppins', sans-serif"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(161, 0, 255, 0.2)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(161, 0, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(20, 20, 20, 0.5)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <ArrowLeft size={20} style={{ marginRight: '0.8rem' }} />
            <span style={{ fontWeight: 600 }}>{currentContent.backButton}</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #ff007a, #a100ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            position: 'relative',
            display: 'inline-block',
            fontFamily: "'Poppins', sans-serif"
          }}>
            {currentContent.title}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #ff007a, #a100ff)',
                borderRadius: '2px'
              }}
            />
          </h1>
          <p style={{
            color: '#aaa',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '800px',
            lineHeight: 1.6,
            fontFamily: "'Poppins', sans-serif"
          }}>
            {currentContent.lastUpdated}: {new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>

      <motion.div 
        style={{ color: '#ddd', lineHeight: 1.7 }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {/* Information Collection Section */}
        <motion.section variants={sectionVariants} style={{ marginBottom: '3rem', background: 'rgba(30, 30, 30, 0.3)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #ff007a, #a100ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Database size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.information}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '1rem', 
                color: '#a100ff', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontFamily: "'Poppins', sans-serif"
              }}>
                <User size={18} /> {currentContent.creatorInfo.title}
              </h3>
              <ul style={{ paddingLeft: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.creatorInfo.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '1rem', 
                color: '#a100ff', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontFamily: "'Poppins', sans-serif"
              }}>
                <EyeOff size={18} /> {currentContent.contentMetadata.title}
              </h3>
              <ul style={{ paddingLeft: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.contentMetadata.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '1rem', 
                color: '#a100ff', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontFamily: "'Poppins', sans-serif"
              }}>
                <Shield size={18} /> {currentContent.technicalData.title}
              </h3>
              <ul style={{ paddingLeft: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.technicalData.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Data Usage Section */}
        <motion.section variants={sectionVariants} style={{ marginBottom: '3rem', background: 'rgba(30, 30, 30, 0.3)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #ff007a, #a100ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Settings size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.usage}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            {currentContent.usageItems.map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: 'rgba(161, 0, 255, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(161, 0, 255, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff007a, #a100ff)'
                }} />
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '1rem', 
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#aaa', 
                  fontSize: '0.95rem',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Data Security Section */}
        <motion.section variants={sectionVariants} style={{ marginBottom: '3rem', background: 'rgba(30, 30, 30, 0.3)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #ff007a, #a100ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Lock size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.security}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            {currentContent.securityItems.map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: 'rgba(20, 20, 20, 0.5)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff007a, #a100ff)'
                }} />
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '1rem', 
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#aaa', 
                  fontSize: '0.95rem',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Your Rights Section */}
        <motion.section variants={sectionVariants} style={{ marginBottom: '3rem', background: 'rgba(30, 30, 30, 0.3)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #ff007a, #a100ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Check size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.rights}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            {currentContent.rightsItems.map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: 'rgba(161, 0, 255, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(161, 0, 255, 0.3)'
              }}>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  marginBottom: '0.5rem', 
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#aaa', 
                  fontSize: '0.9rem',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={sectionVariants} style={{ marginBottom: '3rem', background: 'rgba(30, 30, 30, 0.3)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #ff007a, #a100ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Mail size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.contact}
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href={`mailto:${currentContent.contact.email}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#a100ff',
              textDecoration: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              background: 'rgba(161, 0, 255, 0.1)',
              border: '1px solid rgba(161, 0, 255, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(161, 0, 255, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(161, 0, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(161, 0, 255, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Mail size={18} />
              {currentContent.contact.email}
            </a>
            
            <a href={`https://t.me/${currentContent.contact.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#a100ff',
              textDecoration: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              background: 'rgba(161, 0, 255, 0.1)',
              border: '1px solid rgba(161, 0, 255, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: "'Poppins', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(161, 0, 255, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(161, 0, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(161, 0, 255, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <MessageSquare size={18} />
              {currentContent.contact.telegram}
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}