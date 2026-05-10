import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Palette, Package, Truck, Star, ArrowRight } from 'lucide-react'
import { products } from '../data/products'

/* ─── tiny helpers ─────────────────────────────────────────── */

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return [count, ref]
}

/* ─── fade-up variant ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
}

/* ─── Section label ────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '0.78rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--color-teal)',
        marginBottom: '0.75rem',
      }}
    >
      {children}
    </p>
  )
}

/* ─── Product card ─────────────────────────────────────────── */
function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      custom={index % 3}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.14)'
          : '0 4px 24px rgba(0,0,0,0.07)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'box-shadow 0.3s, transform 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image with overlay */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(13,27,27,0.88) 0%, rgba(13,27,27,0.1) 60%, transparent 100%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1.25rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.55,
              transform: hovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'transform 0.35s',
            }}
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div
        style={{
          padding: '1.25rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--color-ink)',
            lineHeight: 1.25,
          }}
        >
          {product.title}
        </h3>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {product.tags.map(tag => (
            <span
              key={tag}
              style={{
                background: 'rgba(59,184,204,0.1)',
                color: '#2a9ab0',
                fontSize: '0.72rem',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                padding: '0.2rem 0.6rem',
                borderRadius: 9999,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to="/enquiry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'var(--color-ink)',
            color: '#fff',
            padding: '0.6rem 1.1rem',
            borderRadius: 9999,
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.82rem',
            width: 'fit-content',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-orange)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-ink)')}
        >
          Enquire Now <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}

/* ─── Stat card ────────────────────────────────────────────── */
function StatCard({ value, suffix, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          color: 'var(--color-orange)',
          lineHeight: 1,
          marginBottom: '0.4rem',
        }}
      >
        {count.toLocaleString()}{suffix}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          color: 'rgba(255,255,255,0.55)',
          fontSize: '0.82rem',
          fontWeight: 500,
        }}
      >
        {label}
      </p>
    </div>
  )
}

/* ─── Feature card ─────────────────────────────────────────── */
function FeatureCard({ icon: Icon, title, desc, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem 1.75rem',
        borderRadius: '1rem',
        border: hovered ? '1.5px solid var(--color-teal)' : '1.5px solid rgba(0,0,0,0.07)',
        boxShadow: hovered ? '0 8px 32px rgba(59,184,204,0.12)' : 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        cursor: 'default',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: '0.75rem',
          background: hovered ? 'var(--color-teal-light)' : 'var(--color-gray-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          transition: 'background 0.25s',
        }}
      >
        <Icon size={24} color={hovered ? 'var(--color-teal)' : 'var(--color-gray)'} />
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1rem',
          marginBottom: '0.5rem',
          color: 'var(--color-ink)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--color-gray)',
          lineHeight: 1.65,
        }}
      >
        {desc}
      </p>
    </motion.div>
  )
}

/* ─── USP Marquee ──────────────────────────────────────────── */
const uspItems = [
  '✦ Premium Quality',
  '✦ Durable Prints',
  '✦ Pan-India Delivery',
  '✦ Bulk Order Discounts',
  '✦ 500+ Happy Clients',
  '✦ Fast Turnaround',
  '✦ Custom Branding',
  '✦ Pan-India Delivery',
]

function Marquee() {
  const repeated = [...uspItems, ...uspItems]
  return (
    <div
      style={{
        background: 'var(--color-orange)',
        overflow: 'hidden',
        padding: '0.875rem 0',
      }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#fff',
              whiteSpace: 'nowrap',
              paddingRight: '3rem',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Home page ────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          background: 'var(--color-ink)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 1.5rem 72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 500,
            background:
              'radial-gradient(ellipse at center, rgba(59,184,204,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: 860,
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span
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
                marginBottom: '1.75rem',
              }}
            >
              Your Print Partner For Every Occasion
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 3.25rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            Custom Bulk Printing —{' '}
            <span style={{ color: 'var(--color-teal)' }}>
              For Corporates, Events
            </span>{' '}
            &amp; Communities
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '2rem',
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.65,
            }}
          >
            Premium quality customized merchandise — delivered pan-India with bulk order discounts.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/enquiry"
              style={{
                background: 'var(--color-orange)',
                color: '#fff',
                padding: '0.875rem 2.25rem',
                borderRadius: 9999,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-orange-dark)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,90,42,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-orange)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Get a Free Quote
            </Link>
            <a
              href="#products"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '0.875rem 2.25rem',
                borderRadius: 9999,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                border: '1.5px solid rgba(255,255,255,0.3)',
                transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Explore Products
            </a>
          </motion.div>
        </div>

      </section>

      {/* ── USP Marquee ── */}
      <Marquee />

      {/* ── Products ── */}
      <section
        id="products"
        style={{ background: 'var(--color-cream)', padding: '6rem 1.5rem' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <SectionLabel>Our Products</SectionLabel>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'var(--color-ink)',
                marginBottom: '0.75rem',
              }}
            >
              Everything You Need, Branded Your Way
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-gray)',
                fontSize: '1rem',
                maxWidth: 480,
                margin: '0 auto',
              }}
            >
              6 product categories. One trusted partner.
            </p>
          </div>

          <div
            className="products-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: 'var(--color-ink)', padding: '5rem 1.5rem' }}>
        <div
          className="stats-grid"
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <StatCard value={500} suffix="+" label="Happy Clients" />
          <StatCard value={10000} suffix="+" label="Orders Delivered" />
          <StatCard value={100} suffix="+" label="Product Varieties" />
          <StatCard value={28} suffix="" label="States Delivered" />
        </div>
      </section>

      {/* ── Why CrowdPrints ── */}
      <section
        id="why-us"
        style={{ background: '#fff', padding: '6rem 1.5rem' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <SectionLabel>Why CrowdPrints</SectionLabel>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'var(--color-ink)',
                marginBottom: '0.75rem',
              }}
            >
              Trusted by Corporates, Events &amp; Communities
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-gray)',
                fontSize: '1rem',
                maxWidth: 520,
                margin: '0 auto',
              }}
            >
              Quality materials, vibrant prints, and reliable delivery — everything your brand deserves.
            </p>
          </div>

          <div
            className="features-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <FeatureCard
              index={0}
              icon={Palette}
              title="Vibrant, Durable Prints"
              desc="High-resolution printing that stays bright wash after wash, use after use."
            />
            <FeatureCard
              index={1}
              icon={Package}
              title="Bulk Order Discounts"
              desc="The more you order, the more you save — perfect for large corporate and event orders."
            />
            <FeatureCard
              index={2}
              icon={Truck}
              title="Pan-India Delivery"
              desc="Reliable shipping from metro cities to tier-2 towns, anywhere in India."
            />
            <FeatureCard
              index={3}
              icon={Star}
              title="Premium Quality Materials"
              desc="Pure Cotton, Steel, Copper, and more — only materials your brand can be proud of."
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        style={{
          background: 'var(--color-ink)',
          padding: '7rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 400,
            background:
              'radial-gradient(ellipse at center, rgba(232,90,42,0.15) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            Ready to Print Your Brand?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.1rem',
              marginBottom: '2.5rem',
            }}
          >
            Get in touch — we respond fast.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={2}
            viewport={{ once: true }}
          >
            <Link
              to="/enquiry"
              style={{
                background: 'var(--color-orange)',
                color: '#fff',
                padding: '1rem 2.75rem',
                borderRadius: 9999,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.05rem',
                display: 'inline-block',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-orange-dark)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(232,90,42,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-orange)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
