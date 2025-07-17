'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield,
  Mail,
  MessageSquare,
  CheckCircle,
  FileText,
  AlertTriangle,
  BarChart2,
  UserCheck,
  CreditCard,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

// Language content
const termsContent = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated",
    sections: {
      acceptance: "1. Acceptance of Terms",
      responsibilities: "2. Creator Responsibilities",
      ownership: "3. Content Ownership",
      payments: "4. Payments & Earnings",
      privacy: "5. Privacy & Security",
      termination: "6. Termination",
      changes: "7. Changes to Terms",
      contact: "8. Contact Us"
    },
    acceptanceText: [
      "By accessing or using the Global Fan Flicks platform ('Service'), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.",
      "These Terms apply to all creators, models, and users who wish to access or use the Service. Your continued use of the Service constitutes acceptance of these Terms."
    ],
    responsibilities: {
      content: {
        title: "Content Guidelines",
        items: [
          "Original content you own or have rights to",
          "Compliance with all applicable laws",
          "No prohibited or illegal material"
        ]
      },
      security: {
        title: "Account Security",
        items: [
          "Maintain confidentiality of credentials",
          "Immediately report unauthorized access",
          "Use strong, unique passwords"
        ]
      },
      legal: {
        title: "Legal Compliance",
        items: [
          "Adhere to age verification requirements",
          "Follow tax obligations in your jurisdiction",
          "Comply with all local regulations"
        ]
      }
    },
    ownershipText: [
      "Creators retain full ownership of all content they upload to the Service. By uploading content, you grant Global Fan Flicks a worldwide, non-exclusive license to host, display, and distribute your content through the Service.",
      "We will never claim ownership of your content or use it for purposes beyond providing the Service unless explicitly authorized by you."
    ],
    payments: [
      {
        title: "90% Earnings",
        description: "Creators receive 90% of earnings from subscribers with no platform cuts"
      },
      {
        title: "Direct Payments",
        description: "Payments processed directly to you by Global Fan Flicks"
      },
      {
        title: "Payment Partners",
        description: "Subject to terms of our payment processing partners"
      }
    ],
    privacy: [
      {
        title: "Faceless Options",
        description: "AI overlays and privacy tools to protect your identity"
      },
      {
        title: "Data Protection",
        description: "Enterprise-grade encryption for all sensitive data"
      },
      {
        title: "Geoblocking",
        description: "Restrict content by geographic region as needed"
      }
    ],
    terminationText: [
      "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service."
    ],
    changesText: [
      "We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms on this page.",
      "Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. You are advised to review this page periodically for any changes."
    ],
    contact: {
      email: "je@globalfanflicks.com",
      telegram: "@GlobalFanFlicks"
    },
    backButton: "Back to Home"
  },
  es: {
    title: "Términos de Servicio",
    lastUpdated: "Última actualización",
    sections: {
      acceptance: "1. Aceptación de los Términos",
      responsibilities: "2. Responsabilidades del Creador",
      ownership: "3. Propiedad del Contenido",
      payments: "4. Pagos y Ganancias",
      privacy: "5. Privacidad y Seguridad",
      termination: "6. Terminación",
      changes: "7. Cambios en los Términos",
      contact: "8. Contacto"
    },
    acceptanceText: [
      "Al acceder o utilizar la plataforma Global Fan Flicks ('Servicio'), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al Servicio.",
      "Estos Términos se aplican a todos los creadores, modelos y usuarios que deseen acceder o utilizar el Servicio. Tu uso continuado del Servicio constituye la aceptación de estos Términos."
    ],
    responsibilities: {
      content: {
        title: "Directrices de Contenido",
        items: [
          "Contenido original que poseas o tengas derechos para usar",
          "Cumplimiento con todas las leyes aplicables",
          "Sin material prohibido o ilegal"
        ]
      },
      security: {
        title: "Seguridad de la Cuenta",
        items: [
          "Mantén la confidencialidad de tus credenciales",
          "Reporta inmediatamente cualquier acceso no autorizado",
          "Usa contraseñas seguras y únicas"
        ]
      },
      legal: {
        title: "Cumplimiento Legal",
        items: [
          "Adhiérete a los requisitos de verificación de edad",
          "Sigue las obligaciones fiscales en tu jurisdicción",
          "Cumple con todas las regulaciones locales"
        ]
      }
    },
    ownershipText: [
      "Los creadores conservan la propiedad total de todo el contenido que suben al Servicio. Al subir contenido, otorgas a Global Fan Flicks una licencia mundial, no exclusiva para alojar, mostrar y distribuir tu contenido a través del Servicio.",
      "Nunca reclamaremos propiedad de tu contenido ni lo usaremos para fines más allá de proporcionar el Servicio a menos que tú lo autorices explícitamente."
    ],
    payments: [
      {
        title: "90% de Ganancias",
        description: "Los creadores reciben el 90% de las ganancias de los suscriptores sin recortes de la plataforma"
      },
      {
        title: "Pagos Directos",
        description: "Pagos procesados directamente por Global Fan Flicks"
      },
      {
        title: "Socios de Pago",
        description: "Sujeto a los términos de nuestros socios de procesamiento de pagos"
      }
    ],
    privacy: [
      {
        title: "Opciones Sin Rostro",
        description: "Superposiciones de IA y herramientas de privacidad para proteger tu identidad"
      },
      {
        title: "Protección de Datos",
        description: "Encriptación de grado empresarial para todos los datos sensibles"
      },
      {
        title: "Bloqueo Geográfico",
        description: "Restringe el contenido por región geográfica según sea necesario"
      }
    ],
    terminationText: [
      "Podemos terminar o suspender el acceso a nuestro Servicio inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluido, entre otros, si incumples los Términos.",
      "Al terminar, tu derecho a usar el Servicio cesará inmediatamente. Si deseas terminar tu cuenta, simplemente puedes dejar de usar el Servicio."
    ],
    changesText: [
      "Nos reservamos el derecho de modificar estos términos en cualquier momento. Notificaremos cualquier cambio publicando los nuevos Términos en esta página.",
      "Tu uso continuado del Servicio después de dichos cambios constituye tu aceptación de los nuevos Términos. Se te recomienda revisar esta página periódicamente para ver cualquier cambio."
    ],
    contact: {
      email: "soporte@globalfanflicks.com",
      telegram: "@GlobalFanFlicks"
    },
    backButton: "Volver al Inicio"
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TermsOfService() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const currentContent = termsContent[lang];

  return (
    <div className="terms-container" style={{
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
            fontFamily: "'Poppins', sans-serif"
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
            fontFamily: "'Poppins', sans-serif"
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
        {/* Acceptance of Terms Section */}
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
              <CheckCircle size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.acceptance}
            </h2>
          </div>
          <p style={{ marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.acceptanceText[0]}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.acceptanceText[1]}
          </p>
        </motion.section>

        {/* Creator Responsibilities Section */}
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
              <UserCheck size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.responsibilities}
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
                fontFamily: "'Poppins', sans-serif"
              }}>
                {currentContent.responsibilities.content.title}
              </h3>
              <ul style={{ paddingLeft: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.responsibilities.content.items.map((item, index) => (
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
                fontFamily: "'Poppins', sans-serif"
              }}>
                {currentContent.responsibilities.security.title}
              </h3>
              <ul style={{ paddingLeft: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.responsibilities.security.items.map((item, index) => (
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
                fontFamily: "'Poppins', sans-serif"
              }}>
                {currentContent.responsibilities.legal.title}
              </h3>
              <ul style={{ paddingLeft: '1rem', fontFamily: "'Poppins', sans-serif" }}>
                {currentContent.responsibilities.legal.items.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Content Ownership Section */}
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
              <FileText size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.ownership}
            </h2>
          </div>
          <p style={{ marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.ownershipText[0]}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.ownershipText[1]}
          </p>
        </motion.section>

        {/* Payments & Earnings Section */}
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
              <CreditCard size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.payments}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            {currentContent.payments.map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: 'rgba(161, 0, 255, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(161, 0, 255, 0.3)'
              }}>
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

        {/* Privacy & Security Section */}
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
              <Shield size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.privacy}
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            {currentContent.privacy.map((item, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: 'rgba(20, 20, 20, 0.5)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
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

        {/* Termination Section */}
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
              <AlertTriangle size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.termination}
            </h2>
          </div>
          <p style={{ marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.terminationText[0]}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.terminationText[1]}
          </p>
        </motion.section>

        {/* Changes to Terms Section */}
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
              <BarChart2 size={24} />
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              color: '#fff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {currentContent.sections.changes}
            </h2>
          </div>
          <p style={{ marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.changesText[0]}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>
            {currentContent.changesText[1]}
          </p>
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
          <p style={{ marginBottom: '1.5rem', fontFamily: "'Poppins', sans-serif" }}>
            {lang === 'en' 
              ? "If you have any questions about these Terms, please contact us at:" 
              : "Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en:"}
          </p>
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