import { Link } from 'react-router-dom'
import { Phone, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#060F0F' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '3.5rem 1.5rem 1.5rem',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <img
            src="/images/logo.png"
            alt="CrowdPrints"
            style={{ height: 48, width: 'auto' }}
          />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}
          >
            Your Print Partner For Every Occasion
          </p>

          {/* Contact */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a
              href="tel:+917385537511"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-teal)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Phone size={15} />
              +91 73855 37511
            </a>
            <a
              href="https://www.crowdprints.co.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-teal)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Globe size={15} />
              crowdprints.co.in
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.25rem' }}
        >
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.25)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
            }}
          >
            © {new Date().getFullYear()} CrowdPrints. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
