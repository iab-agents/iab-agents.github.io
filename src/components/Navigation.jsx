import { useState } from 'react';
import logo from '../../img/iab-icon.svg';
import neuripsLogo from '../../img/neurips-logo.svg';
import FlameIcon from './FlameIcon';
import { navLinks } from '../data/siteData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container">
        <a className="nav-logo" href="#top" onClick={() => setIsOpen(false)}>
          <img className="logo-mark" src={logo} alt="" />
          IAB
          <img className="neurips-mark" src={neuripsLogo} alt="Workshop at NeurIPS 2026" title="Workshop @ NeurIPS 2026" />
        </a>
        <button
          className={`nav-toggle${isOpen ? ' open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="main-navigation-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div id="main-navigation-links" className={`nav-links${isOpen ? ' open' : ''}`}>
          {navLinks.map(([label, id, hot]) => (
            <a key={id} href={`#${id}`} className={hot ? 'hot' : undefined} onClick={() => setIsOpen(false)}>
              {hot && <FlameIcon />}
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
