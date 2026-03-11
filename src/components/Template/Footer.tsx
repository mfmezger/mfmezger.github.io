import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href="/" className="footer-avatar">
            <ThemePortrait width={80} height={80} />
          </Link>
          <div className="footer-info">
            <h3>Marc Fabian Mezger</h3>
            <p className="footer-role">AI Engineer</p>
            <p className="footer-copyright">
              <span title="The Emperor protects.">&copy;</span> {new Date().getFullYear()} ·{' '}
              <a
                href="https://github.com/mfmezger/mfmezger.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="footer-links-label">
              Explore
            </h4>
            <div className="footer-links-grid">
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <h4 id="footer-social-heading" className="footer-social-label">
              Connect
            </h4>
            <ContactIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
