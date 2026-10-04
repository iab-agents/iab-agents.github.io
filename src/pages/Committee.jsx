import PeopleList from '../components/PeopleList';
import { programCommittee, reviewers } from '../data/siteData';
import renderPage from './renderPage';

renderPage('/committee/', {
  eyebrow: 'IAB @ NeurIPS 2026',
  title: 'Program Committee & Reviewers',
  children: (
    <>
      <section>
        <div className="container">
          <h2>Program Committee</h2>
          <p className="lead">We thank our program committee members from many different communities.</p>
          <PeopleList people={programCommittee} linked />
        </div>
      </section>
      <section className="alt">
        <div className="container">
          <h2>Reviewers</h2>
          <p className="lead">We thank our reviewers from many different communities.</p>
          {reviewers.length ? <PeopleList people={reviewers} linked /> : <p className="muted-note">To be announced.</p>}
        </div>
      </section>
    </>
  ),
});
