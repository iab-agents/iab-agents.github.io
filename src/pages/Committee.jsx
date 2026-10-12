import { pcAndReviewers } from '../data/siteData';
import renderPage from './renderPage';

renderPage('/committee/', {
  eyebrow: 'IAB @ NeurIPS 2026',
  title: 'Program Committee & Reviewers',
  children: (
    <section>
      <div className="container">
        <p className="lead">We sincerely thank all our program committee members and reviewers for their time and thoughtful reviews.</p>
        <ul className="name-list">
          {pcAndReviewers.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  ),
});
