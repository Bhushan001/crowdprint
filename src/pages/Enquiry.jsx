import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Globe } from 'lucide-react'

const WA_NUMBER = '917385537511'
const WA_MESSAGE = encodeURIComponent(
  'Hi CrowdPrints! I would like to enquire about your products. Please share more details.'
)

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 },
  }),
}

function ContactCard({ icon: Icon, title, body, buttonLabel, href, accentColor }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: '#fff',
        borderRadius: '1.25rem',
        padding: '2.5rem',
        border: hovered
          ? `2px solid ${accentColor}`
          : '2px solid rgba(0,0,0,0.07)',
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.12), 0 0 0 4px ${accentColor}18`
          : '0 4px 24px rgba(0,0,0,0.07)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        textDecoration: 'none',
        cursor: 'pointer',
        flex: 1,
        minWidth: 280,
        maxWidth: 400,
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '1rem',
          background: hovered ? `${accentColor}18` : 'var(--color-gray-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          transition: 'background 0.3s',
        }}
      >
        <Icon size={28} color={hovered ? accentColor : 'var(--color-gray)'} />
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.35rem',
          color: 'var(--color-ink)',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--color-gray)',
          lineHeight: 1.65,
          marginBottom: '2rem',
          flex: 1,
        }}
      >
        {body}
      </p>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: hovered ? accentColor : 'var(--color-ink)',
          color: '#fff',
          padding: '0.75rem 1.75rem',
          borderRadius: 9999,
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'background 0.3s',
          whiteSpace: 'nowrap',
        }}
      >
        {buttonLabel}
        <span style={{ fontSize: '1rem' }}>→</span>
      </span>
    </motion.a>
  )
}

export default function Enquiry() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          background: 'var(--color-ink)',
          padding: '140px 1.5rem 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 400,
            background:
              'radial-gradient(ellipse at center, rgba(59,184,204,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            style={{
              display: 'inline-block',
              background: 'rgba(59,184,204,0.15)',
              border: '1px solid rgba(59,184,204,0.35)',
              color: 'var(--color-teal)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.45rem 1.1rem',
              borderRadius: 9999,
              marginBottom: '1.5rem',
            }}
          >
            We Respond Fast
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              maxWidth: 460,
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Choose how you'd like to reach us — WhatsApp for a quick chat or email for detailed enquiries.
          </motion.p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section
        style={{
          background: 'var(--color-cream)',
          padding: '5rem 1.5rem',
        }}
      >
        <div
          className="enquiry-cards"
          style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ContactCard
            icon={MessageCircle}
            title="Chat on WhatsApp"
            body="Send us your requirements instantly. Share product ideas, quantities, and designs — fastest way to get a quote from us."
            buttonLabel="Open WhatsApp"
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            accentColor="#25D366"
          />

          <ContactCard
            icon={Mail}
            title="Send an Email"
            body="Prefer email? Drop us a detailed message with your requirements and we'll get back to you within 24 hours."
            buttonLabel="Send Email"
            href="mailto:?subject=Product%20Enquiry%20%E2%80%94%20CrowdPrints&body=Hi%20CrowdPrints%20Team%2C%0A%0AI%20would%20like%20to%20enquire%20about%20your%20products.%0A%0APlease%20share%20more%20details."
            accentColor="var(--color-orange)"
          />
        </div>

        {/* Contact details strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={2}
          viewport={{ once: true }}
          style={{
            maxWidth: 900,
            margin: '3rem auto 0',
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <a
            href="tel:+917385537511"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--color-ink)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-orange)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
          >
            <Phone size={16} color="var(--color-teal)" />
            +91 73855 37511
          </a>
          <a
            href="https://www.crowdprints.co.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--color-ink)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-orange)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink)')}
          >
            <Globe size={16} color="var(--color-teal)" />
            www.crowdprints.co.in
          </a>
        </motion.div>
      </section>
    </main>
  )
}
