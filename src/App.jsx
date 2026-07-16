import heroImage from '../img/hero.png';
import Navigation from './components/Navigation';
import PersonCard from './components/PersonCard';
import TopicIcon from './components/TopicIcon';
import { getPeopleByRole, PERSON_ROLE } from './data/peopleRepository';
import {
  advisors,
  cfpCategories,
  importantDates,
  programCommittee,
  schedule,
  speakerSection,
  submissionFormats,
  topics,
} from './data/siteData';

const speakers = getPeopleByRole(PERSON_ROLE.SPEAKER);
const organizers = getPeopleByRole(PERSON_ROLE.ORGANIZER);

function Hero() {
  return (
    <header id="top" className="hero">
      <img src={heroImage} alt="A Claude Code terminal session analyzing an AI agent runtime trajectory" className="hero-bg" />
      <div className="container">
        <div className="hero-eyebrow">The First Workshop on</div>
        <h1>Interpreting Agent Behavior</h1>
        <div className="subtitle">Human-Centered Interpretation for Understanding Agents, Humans, and Interaction</div>
        <div className="venue-line">
          <strong>
            <a href="https://neurips.cc/Conferences/2026" target="_blank" rel="noopener noreferrer">NeurIPS 2026</a>
          </strong>
          <span className="venue-divider" aria-hidden="true">·</span>
          <span className="venue-location venue-location--full">International Convention Centre, Sydney, Australia</span>
          <span className="venue-location venue-location--short">ICC Sydney, Australia</span>
          <span className="venue-date">December 11–12, 2026</span>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-hook" aria-label="Why interpreting agent behavior matters">
          <p className="line">Agents now run for hours, even days, to finish a single task.</p>
          <p className="line">Along the way they <em>plan, reason, use tools, and recover from errors</em>.</p>
          <p className="line">Every run leaves behind vast behavioral data: logs and interaction traces.</p>
          <p className="line">Yet we still lack the vocabulary, methods, and tools to <em>make sense of it at scale</em>.</p>
          <p className="line">Humans cannot read through thousands of log entries.</p>
          <p className="line">They need patterns, summaries, and explanations, in other words <em>interpretation</em>.</p>
          <p className="line">But we do not yet know how to <em>generate it at scale</em>.</p>
          <p className="line">Our aim with <em>IAB</em> is to turn agent runtime data into human understanding of what agents do and how people work with them.</p>
        </div>
        <div className="about-content">
          <p>
            Commercial autonomous agents such as Claude and Codex now run for hours or even days to complete tasks, and along the way they show complex behavior: they plan, reason, use tools, recover from errors, coordinate with subagents, and communicate with users. We use the word <em>behavior</em>, as in the study of human behavior, for the full range of what an agent does during runtime. This behavior spans <span className="uline">three levels: what agents do and how they do it, what people do in response, and how the two work together</span> through instructions and corrections. All three generate vast behavioral data such as execution logs and interaction traces. Yet existing approaches read this data largely for outcomes: benchmarks tell us <em>whether</em> an agent succeeds or fails, <span className="uline">but not <em>what</em> it did or <em>how</em> it did it</span>.
          </p>
          <p>
            Understanding <em>what</em> and <em>how</em> is what people actually need. It lets agent developers and model trainers debug failures, compare architectures, and filter training data; it lets agent users and deployment engineers watch production agents to understand safety, cost, and reliability risks. For agentic models, the trajectory is both the training data and what the reward scores. Interpreting it therefore sits inside the training loop, deciding which rollouts are safe to reinforce and flagging reward that reflects a verifier exploit rather than real skill. But the field still <span className="uline">lacks the vocabulary, methods, and tools to describe and analyze agent behavior at scale</span>. Humans cannot read through thousands of log entries; they need patterns, summaries, and explanations, in other words <span className="uline"><em>interpretation</em></span>, and we do not yet know how to scale it.
          </p>
          <p>
            <strong>IAB works toward an interpretive science of agent behavior.</strong> It treats behavior across these three levels as the object of study and proceeds in two steps: first gathering the community to identify the problem space and emerging challenges, then bringing the broad set of methods that social scientists have developed — grounded theory, qualitative analysis, error analysis, corpus analysis, trace analysis, and red-teaming — to read meaning from this data, discover categories from it, and count them. <span className="uline">IAB bridges two communities: social science and HCI contribute the interpretation methods, while AI contributes the problem space</span> of evaluation, governance, alignment, and responsible AI.
          </p>
          <p className="paper-callout">
            Read our recent paper{' '}
            <a href="https://arxiv.org/abs/2605.13625" target="_blank" rel="noopener noreferrer">
              “How to Interpret Agent Behavior”
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news">
      <div className="container">
        <h2>News</h2>
        <ul className="news-list">
          <li><span className="date">Coming soon</span><span>Call for Papers will open shortly. Stay tuned.</span></li>
          <li>
            <span className="date">Jul 2026</span>
            <span>🎉 IAB is accepted as a <a href="https://neurips.cc/Conferences/2026" target="_blank" rel="noopener noreferrer">NeurIPS 2026</a> workshop in Sydney.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Scope() {
  return (
    <section id="topics" className="alt">
      <div className="container">
        <h2>Scope</h2>
        <p className="lead">IAB studies agent behavior across three levels, asking three questions.</p>
        <div className="topics-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.type}>
              <h3>
                <TopicIcon type={topic.type} color={topic.color} />
                <span style={{ color: topic.color }}>{topic.label}</span>
                <span>— {topic.question}</span>
              </h3>
              <ul>{topic.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section id="speakers">
      <div className="container">
        <h2>Invited Speakers</h2>
        <p className="lead">{speakerSection.message}</p>
        {speakerSection.showProfiles && (
          <div className="people-grid speakers-grid">
            {speakers.map((speaker) => <PersonCard key={speaker.id} person={speaker} variant="speaker" />)}
          </div>
        )}
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="alt">
      <div className="container">
        <h2>Schedule <span className="status-pill">Tentative</span></h2>
        <p className="lead">Full-day workshop with keynotes, paper presentations, posters, and a panel discussion. The program below is tentative and subject to change.</p>
        <div className="schedule-list">
          {schedule.map((item) => (
            <div className={`sch${item.break ? ' brk' : ''}`} key={`${item.time}-${item.title}`}>
              <span className="sch-time">{item.time}</span>
              <span className="sch-desc">
                {item.title}{' '}
                {item.emphasis && <strong>{item.emphasis}</strong>}{' '}
                {item.suffix && <span>{item.suffix} </span>}
                {item.meta && <em>{item.meta}</em>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallForPapers() {
  return (
    <section id="cfp">
      <div className="container">
        <h2>Call for Papers</h2>
        <p className="lead">We solicit two types of non-archival submissions and welcome empirical studies, datasets, methods papers, tools, and negative results on understanding agent behavior.</p>
        <p className="lead">We particularly welcome contributions across four categories:</p>
        <ul className="lead-list">
          {cfpCategories.map(([name, description]) => (
            <li key={name}><strong>{name}:</strong> {description}</li>
          ))}
        </ul>
        <p className="lead">We also encourage negative results and methodological position papers.</p>
        <div className="cfp-formats">
          {submissionFormats.map(([title, description]) => (
            <article className="cfp-box" key={title}><h3>{title}</h3><p>{description}</p></article>
          ))}
          <article className="cfp-box">
            <h3>Review Process</h3>
            <p>NeurIPS-style formatting, double-blind review, and three reviews per submission via <a href="https://openreview.net" target="_blank" rel="noopener noreferrer">OpenReview</a>.</p>
          </article>
        </div>
        <div className="dates-row">
          {importantDates.map(([label, value]) => (
            <div className="date-card" key={label}><div className="lab">{label}</div><div className="val">{value}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InlinePeople({ people, linked = false }) {
  return people.map(([name, affiliation, url], index) => (
    <span key={name}>
      {linked && url ? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a> : name} ({affiliation})
      {index < people.length - 1 && <span aria-hidden="true"> · </span>}
    </span>
  ));
}

function Organizers() {
  return (
    <section id="organizers" className="alt">
      <div className="container">
        <h2>Organizing Committee</h2>
        <div className="people-grid organizers-grid">
          {organizers.map((organizer) => <PersonCard key={organizer.id} person={organizer} variant="organizer" />)}
        </div>
        <div className="adv">
          <h3>Advisory Board</h3>
          <p className="adv-note">Researchers and collaborators who have supported and advised this workshop.</p>
          <p><InlinePeople people={advisors} linked /></p>
        </div>
        <div className="adv">
          <h3>Program Committee</h3>
          <p className="adv-note">We thank our program committee members from the NLP, HCI, and ML systems communities.</p>
          <p><InlinePeople people={programCommittee} /></p>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section id="sponsors">
      <div className="container">
        <h2>Sponsors</h2>
        <p className="muted-note">To be announced</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p><strong>IAB</strong> · Interpreting Agent Behavior: Human-Centered Interpretation for Understanding Agents, Humans, and Interaction</p>
        <p>Workshop proposal, 2026 · Contact: <a href="mailto:jgao77@jh.edu">jgao77@jh.edu</a></p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <News />
        <Scope />
        <Speakers />
        <Schedule />
        <CallForPapers />
        <Organizers />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
