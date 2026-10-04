import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../styles.css';

// Mounts a sub page with the same nav and footer as the main page.
export default function renderPage(path, { eyebrow, title, children }) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Navigation currentPage={path} />
      <main>
        <header id="top" className="page-header">
          <div className="container">
            <div className="hero-eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
          </div>
        </header>
        {children}
      </main>
      <Footer />
    </StrictMode>,
  );
}
