import { useState } from 'react';
import logo from '../../img/iab-icon.svg';
import { navLinks } from '../data/siteData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container">
        <a className="nav-logo" href="#top" onClick={() => setIsOpen(false)}>
          <img className="logo-mark" src={logo} alt="" />
          IAB
          <span>Workshop @ NeurIPS 2026</span>
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
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
