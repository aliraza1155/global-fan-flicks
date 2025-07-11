'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield, 
//   Lock, 
//   Zap, 
//   Users, 
//   Globe, 
//   DollarSign,
  Mail,
  MessageSquare,
  CheckCircle,
  FileText,
  AlertTriangle,
  BarChart2,
  UserCheck,
  CreditCard
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TermsOfService() {
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
      overflow: 'hidden'
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
            transition: 'all 0.3s ease'
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
            <span style={{ fontWeight: 600 }}>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #ff007a, #a100ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            position: 'relative',
            display: 'inline-block'
          }}>
            Terms of Service
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
            fontSize: '1.2rem',
            maxWidth: '800px',
            lineHeight: 1.6
          }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>1. Acceptance of Terms</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            By accessing or using the Global Fan Flicks platform (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
          </p>
          <p>
            These Terms apply to all creators, models, and users who wish to access or use the Service. Your continued use of the Service constitutes acceptance of these Terms.
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>2. Creator Responsibilities</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#a100ff' }}>Content Guidelines</h3>
              <ul style={{ paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Original content you own or have rights to</li>
                <li style={{ marginBottom: '0.5rem' }}>Compliance with all applicable laws</li>
                <li>No prohibited or illegal material</li>
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#a100ff' }}>Account Security</h3>
              <ul style={{ paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Maintain confidentiality of credentials</li>
                <li style={{ marginBottom: '0.5rem' }}>Immediately report unauthorized access</li>
                <li>Use strong, unique passwords</li>
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#a100ff' }}>Legal Compliance</h3>
              <ul style={{ paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Adhere to age verification requirements</li>
                <li style={{ marginBottom: '0.5rem' }}>Follow tax obligations in your jurisdiction</li>
                <li>Comply with all local regulations</li>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>3. Content Ownership</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>Creators retain full ownership of all content they upload to the Service. By uploading content, you grant Global Fan Flicks a worldwide, non-exclusive license to host, display, and distribute your content through the Service.</p>
          <p>We will never claim ownership of your content or use it for purposes beyond providing the Service unless explicitly authorized by you.</p>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>4. Payments & Earnings</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>100% Earnings</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Creators receive 100% of earnings from subscribers with no platform cuts</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Direct Payments</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Payments processed directly to you with no middleman</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Payment Partners</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Subject to terms of our payment processing partners</p>
            </div>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>5. Privacy & Security</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Faceless Options</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>AI overlays and privacy tools to protect your identity</p>
            </div>
            
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Data Protection</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Enterprise-grade encryption for all sensitive data</p>
            </div>
            
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Geoblocking</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Restrict content by geographic region as needed</p>
            </div>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>6. Termination</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>7. Changes to Terms</h2>
          </div>
          <p style={{ marginBottom: '1rem' }}>We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
          <p>Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. You are advised to review this page periodically for any changes.</p>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>8. Contact Us</h2>
          </div>
          <p style={{ marginBottom: '1.5rem' }}>If you have any questions about these Terms, please contact us at:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href="mailto:je@globalfanflicks.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#a100ff',
              textDecoration: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              background: 'rgba(161, 0, 255, 0.1)',
              border: '1px solid rgba(161, 0, 255, 0.3)',
              transition: 'all 0.3s ease'
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
              je@globalfanflicks.com
            </a>
            <a href="https://t.me/GlobalFanFlicks" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#a100ff',
              textDecoration: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              background: 'rgba(161, 0, 255, 0.1)',
              border: '1px solid rgba(161, 0, 255, 0.3)',
              transition: 'all 0.3s ease'
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
              Telegram Support
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}