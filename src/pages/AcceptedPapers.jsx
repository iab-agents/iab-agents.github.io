import { acceptedPapers, reviewStats } from '../data/siteData';
import renderPage from './renderPage';

function ReviewStats() {
  const accepted = acceptedPapers.length;
  if (!accepted) return null;
  const stats = [
    ['Submissions', reviewStats.submissions],
    ['Accepted', accepted],
    ['Acceptance rate', `${((accepted / reviewStats.submissions) * 100).toFixed(2)}%`],
  ];

  return (
    <dl className="paper-stats">
      {stats.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

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
          {authors && <span className="paper-authors">{authors}</span>}
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
        <ReviewStats />
        <p className="lead">Congratulations to all authors. Papers will be presented at the workshop in Sydney on December 12, 2026.</p>
        <PaperList />
      </div>
    </section>
  ),
});
