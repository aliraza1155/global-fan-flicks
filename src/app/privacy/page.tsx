'use client';
import { motion } from 'framer-motion';
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
//   Globe,
//   Zap,
  Check,
  Settings
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>1. Information We Collect</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#a100ff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={18} /> Creator Information
              </h3>
              <ul style={{ paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Stage name/alias</li>
                <li style={{ marginBottom: '0.5rem' }}>Contact email</li>
                <li>Payment details (processed securely)</li>
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#a100ff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <EyeOff size={18} /> Content Metadata
              </h3>
              <ul style={{ paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Upload timestamps</li>
                <li style={{ marginBottom: '0.5rem' }}>Content access logs</li>
                <li>Engagement analytics</li>
              </ul>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(20, 20, 20, 0.5)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#a100ff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={18} /> Technical Data
              </h3>
              <ul style={{ paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Device information</li>
                <li style={{ marginBottom: '0.5rem' }}>IP address (anonymized)</li>
                <li>Browser type/version</li>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>2. How We Use Your Data</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Platform Operation</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>To provide and maintain our services, process payments, and ensure platform security</p>
            </div>
            
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Content Delivery</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>To host and distribute your content according to your specified access rules</p>
            </div>
            
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Marketing Support</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>To promote your content across platforms as per your preferences</p>
            </div>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>3. Data Security</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Encryption</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>All data is encrypted in transit and at rest using AES-256 encryption</p>
            </div>
            
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Anonymity</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Faceless creator options with AI overlays to protect identity</p>
            </div>
            
            <div style={{
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#fff' }}>Access Control</h3>
              <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Strict role-based access with multi-factor authentication</p>
            </div>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>4. Your Rights</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>Access & Portability</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Request a copy of your data in machine-readable format</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>Correction</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Update or correct inaccurate personal information</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>Deletion</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Request deletion of your personal data where applicable</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'rgba(161, 0, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(161, 0, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>Restriction</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Limit how we use your data in certain circumstances</p>
            </div>
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>5. Contact Us</h2>
          </div>
          
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
            
            <a href="https://t.me/GlobalFanFlicksSupport" target="_blank" rel="noopener noreferrer" style={{
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