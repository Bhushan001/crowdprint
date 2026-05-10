import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const onDarkBg = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(13,27,27,0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(0,0,0,0.08)'
            : '0 1px 0 rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.3 }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 1.5rem',
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="CrowdPrints"
              style={{ height: 44, width: 'auto' }}
            />
          </Link>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '2.5rem' }}
          >
            <NavLink to="/#products" dark={onDarkBg} label="Products" />
            <NavLink to="/#why-us" dark={onDarkBg} label="Why Us" />
            <Link
              to="/enquiry"
              style={{
                background: 'var(--color-orange)',
                color: '#fff',
                padding: '0.55rem 1.4rem',
                borderRadius: 9999,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-orange-dark)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-orange)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: onDarkBg ? '#fff' : 'var(--color-ink)',
              display: 'flex',
              padding: 4,
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              background: '#fff',
              zIndex: 49,
              padding: '1.5rem',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <MobileLink to="/#products" label="Products" />
            <MobileLink to="/#why-us" label="Why Us" />
            <Link
              to="/enquiry"
              style={{
                background: 'var(--color-orange)',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: 9999,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                textAlign: 'center',
              }}
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ to, label, dark }) {
  return (
    <a
      href={to}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: '0.95rem',
        color: dark ? 'rgba(255,255,255,0.85)' : 'var(--color-ink)',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-orange)')}
      onMouseLeave={e =>
        (e.currentTarget.style.color = dark
          ? 'rgba(255,255,255,0.85)'
          : 'var(--color-ink)')
      }
    >
      {label}
    </a>
  )
}

function MobileLink({ to, label }) {
  return (
    <a
      href={to}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: '1.05rem',
        color: 'var(--color-ink)',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {label}
    </a>
  )
}
