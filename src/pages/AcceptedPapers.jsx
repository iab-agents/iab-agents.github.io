import { acceptedPapers } from '../data/siteData';
import renderPage from './renderPage';

function PaperList() {
  if (!acceptedPapers.length) {
    return <p className="muted-note">The list of accepted papers will be posted here soon.</p>;
  }

  return (
    <ol className="paper-list">
      {acceptedPapers.map(({ title, authors, track, url }) => (
        <li key={title}>
          <span className="paper-title">
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title}
          </span>
          <span className="paper-authors">{authors}</span>
          {track && <span className="paper-track">{track}</span>}
        </li>
      ))}
    </ol>
  );
}

renderPage('/accepted-papers/', {
  eyebrow: 'IAB @ NeurIPS 2026',
  title: 'Accepted Papers',
  children: (
    <section>
      <div className="container">
        <p className="lead">Congratulations to all authors. Papers will be presented at the workshop in Sydney on December 12, 2026.</p>
        <PaperList />
      </div>
    </section>
  ),
});
