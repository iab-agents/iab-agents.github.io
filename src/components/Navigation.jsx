import { useState } from 'react';
import logo from '../../img/iab-icon.svg';
import neuripsLogo from '../../img/neurips-logo.svg';
import FlameIcon from './FlameIcon';
import { navLinks, pageLinks } from '../data/siteData';

// `currentPage` is the path of the sub page being shown, or undefined on the main page.
// Section anchors only resolve on the main page, so sub pages link back to it.
export default function Navigation({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const home = currentPage ? '/' : '';

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container">
        <a className="nav-logo" href={`${home}#top`} onClick={close}>
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
            <a key={id} href={`${home}#${id}`} className={hot ? 'hot' : undefined} onClick={close}>
              {hot && <FlameIcon />}
              {label}
            </a>
          ))}
          {pageLinks.map(([label, path]) => (
            <a key={path} href={path} aria-current={path === currentPage ? 'page' : undefined} onClick={close}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
