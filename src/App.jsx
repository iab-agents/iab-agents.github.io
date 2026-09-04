import { Fragment, useEffect, useState } from 'react';
import abakaLogo from '../img/abaka-logo.svg';
import contraLabsLogo from '../img/contra-labs.png';
import googleLogo from '../img/google.png';
import heroImage from '../img/hero.png';
import salesforceLogo from '../img/Salesforce-Logo.png';
import FlameIcon from './components/FlameIcon';
import Navigation from './components/Navigation';
import PersonCard from './components/PersonCard';
import TopicIcon from './components/TopicIcon';
import { getPeopleByRole, PERSON_ROLE } from './data/peopleRepository';
import {
  advisors,
  cfpCategories,
  competitionCfpUrl,
  competitionOpenReviewUrl,
  competitionTeam,
  competitionUrl,
  ethicsNote,
  importantDates,
  neuripsReviewTrack,
  paperAwards,
  openReviewUrl,
  programCommittee,
  reviewerSignupUrl,
  schedule,
  speakerSection,
  submissionDeadline,
  submissionDeadlineLabel,
  submissionDeadlineWas,
  submissionFormats,
  topics,
  xUrl,
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
          <span className="venue-divider" aria-hidden="true">·</span>
          <span className="venue-date">December 11–12, 2026</span>
        </div>
        <div className="hero-actions">
          <a className="hero-btn hero-btn--primary" href="#cfp">
            <FlameIcon />
            Call for Papers
          </a>
          <a className="hero-btn" href="#competition">
            <FlameIcon />
            Call for Competition Papers
          </a>
        </div>
        <Countdown variant="hero" />
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
          <p className="line">Our aim with <em>IAB</em> is to turn agent runtime data into human understanding of what agents do and how humans work with them.</p>
        </div>
        <div className="about-content">
          <p>
            Commercial autonomous agents such as Claude and Codex now run for hours or even days to complete tasks, and along the way they plan, reason, use tools, recover from errors, coordinate with subagents, and communicate with users. We use the word <em>behavior</em>, as in the study of human behavior, for everything that happens during a run, across <span className="uline">three levels: what agents do and how they do it, what humans do in response, and how the two work together</span> through instructions and corrections. All three leave rich data behind, such as execution logs and interaction traces. Yet this data is read mostly for outcomes: benchmarks tell us <em>whether</em> an agent succeeds, <span className="uline">but not <em>what</em> it did or <em>how</em> it did it</span>.
          </p>
          <p>
            Understanding <em>what</em> and <em>how</em> is what people actually need. It lets agent developers and model trainers debug failures, compare architectures, and filter training data; it lets agent users and deployment engineers watch production agents to understand safety, cost, and reliability risks. For agentic models, the trajectory is both the training data and what the reward scores. Interpreting it therefore sits inside the training loop, deciding which rollouts are safe to reinforce and flagging reward that reflects a verifier exploit rather than real skill. But the field still <span className="uline">lacks the vocabulary, methods, and tools to describe and analyze agent behavior at scale</span>. Humans cannot read through thousands of log entries; they need patterns, summaries, and explanations, in other words <span className="uline"><em>interpretation</em></span>, and we do not yet know how to scale it.
          </p>
          <p>
            <strong>IAB works toward an interpretive science of agent behavior.</strong> It treats behavior across these three levels as the object of study and proceeds in two steps: first gathering the community to identify the problem space and emerging challenges, then bringing the broad set of methods that social scientists have developed, such as grounded theory, qualitative analysis, error analysis, corpus analysis, trace analysis, and red-teaming, to read meaning from this data, discover categories from it, and count them. <span className="uline">IAB bridges two communities: social science and HCI contribute the interpretation methods, while AI contributes the problem space</span> of evaluation, governance, alignment, and responsible AI.
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
          <li>
            <span className="date">Sep 4, 2026</span>
            <span>
              ⏰ New “Submission with NeurIPS reviews” deadline: <strong>Sep 25, 2026</strong>. Another chance to present your NeurIPS 2026 paper, whether it was accepted or rejected. The workshop is non-archival, and we will decide acceptance based on the NeurIPS reviews. Submit it with the reviews and your response on <a href={openReviewUrl} target="_blank" rel="noopener noreferrer">OpenReview</a>.
            </span>
          </li>
          <li>
            <span className="date">Sep 2, 2026</span>
            <span>🐦 We're now on X! Follow <a href={xUrl} target="_blank" rel="noopener noreferrer">@iab_agents</a> for workshop and competition updates.</span>
          </li>
          <li>
            <span className="date">Aug 29, 2026</span>
            <span>
              🔥 <a href={competitionUrl} target="_blank" rel="noopener noreferrer">GLEE competition</a>: in 29 days, 315 humans <TopicIcon type="humans" color="#a07d2a" /> and 542 agents <TopicIcon type="agents" color="#b04a2f" /> from 196 operators played 8,614,601 games and made 177,199,691 decisions. Now it's time to understand what happened in there. Submit a competition paper to the <a href={competitionOpenReviewUrl} target="_blank" rel="noopener noreferrer">Competition Paper Track on OpenReview</a> with an “Agent Behavior Analysis” section.
            </span>
          </li>
          <li>
            <span className="date">Aug 29, 2026</span>
            <span>📣 We are recruiting reviewers. <a href={reviewerSignupUrl} target="_blank" rel="noopener noreferrer">Sign up here</a>.</span>
          </li>
          <li>
            <span className="date">Aug 27, 2026</span>
            <span>
              ⏰ Deadline extended: <strong>Sep 5, 2026 (AoE)</strong>. ☺️ More time to polish your work on interpreting agent behavior. We can't wait to read it!
            </span>
          </li>
          <li>
            <span className="date">Aug 14, 2026</span>
            <span>
              🔥 <a href={competitionUrl} target="_blank" rel="noopener noreferrer">GLEE competition</a> update: so far, 186 humans <TopicIcon type="humans" color="#a07d2a" /> and 230 agents <TopicIcon type="agents" color="#b04a2f" /> (from 91 operators) have played at least one game, 51 participants have operated 146 agents <TopicIcon type="agents" color="#b04a2f" /> that played at least 1,000 games, and 30 participants have operated at least one agent <TopicIcon type="agents" color="#b04a2f" /> that played 10,000+ games.
            </span>
          </li>
          <li>
            <span className="date">Jul 31, 2026</span>
            <span>We're happy to announce the <a href={competitionUrl} target="_blank" rel="noopener noreferrer">GLEE competition</a>, sponsored by <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a> and <a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer">Salesforce</a>, with a $6,000 prize pool and a dedicated Best Competition Paper Award! Competition papers go to the <a href={competitionOpenReviewUrl} target="_blank" rel="noopener noreferrer">Competition Paper Track on OpenReview</a>.</span>
          </li>
          <li>
            <span className="date">Jul 31, 2026</span>
            <span>Happy to announce <a href="https://www.abaka.ai/" target="_blank" rel="noopener noreferrer">Abaka AI</a> and <a href="https://contralabs.com/creative-human-data" target="_blank" rel="noopener noreferrer">Contra Labs</a> as sponsors of the workshop!</span>
          </li>
          <li>
            <span className="date">Jul 22, 2026</span>
            <span>Call for Papers is out. Submission site <a href={openReviewUrl} target="_blank" rel="noopener noreferrer">OpenReview</a> is open.</span>
          </li>
          <li><span className="date">Jul 21, 2026</span><span>Our speakers and panelists are confirmed!</span></li>
          <li>
            <span className="date">Jul 12, 2026</span>
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
        <p className="lead">IAB studies agent behavior at three levels: the agent, the human, and their interaction. At each level we ask what happens and how.</p>
        <div className="topics-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.type}>
              <h3>
                <TopicIcon type={topic.type} color={topic.color} />
                <span><span style={{ color: topic.color }}>{topic.label}</span>: {topic.question}</span>
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
    <section id="speakers" className="alt">
      <div className="container">
        <h2>Invited Speakers &amp; Panelists</h2>
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
    <section id="schedule">
      <div className="container">
        <h2>Schedule <span className="status-pill">Tentative</span></h2>
        <p className="lead">Full-day workshop with keynotes, paper presentations, posters, and a panel discussion. The program below is tentative and subject to change.</p>
        <div className="schedule-list">
          {schedule.map((item) => (
            <div className={`sch${item.break ? ' brk' : ''}`} key={`${item.time}-${item.title}`}>
              <span className="sch-time">{item.time}</span>
              <span className="sch-desc">
                {item.title}{' '}
                {Array.isArray(item.emphasis)
                  ? item.emphasis.map((name, index) => (
                      <Fragment key={name}>
                        <strong>{name}</strong>{index < item.emphasis.length - 1 && ', '}
                      </Fragment>
                    ))
                  : item.emphasis && <strong>{item.emphasis}</strong>}{' '}
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

function CfpCategoryItem({ category }) {
  const { name, description, examples } = category;
  return (
    <li>
      <strong>{name}:</strong> {description}
      {examples?.length ? (
        <ul className="eg-list">
          {examples.map((example) => <li key={example}>{example}</li>)}
        </ul>
      ) : null}
    </li>
  );
}

function CallForPapers() {
  return (
    <section id="cfp">
      <div className="container">
        <h2>Call for Papers</h2>

        <h3 className="cfp-heading">Topics</h3>
        <p className="lead">We call for non-archival submissions on understanding agent behavior. Work can address any level of our <a href="#topics">Scope</a> (what agents do, what humans do in response, or how the two interact). Specific topics include, but are not limited to:</p>
        <ul className="lead-list">
          {cfpCategories.map((category) => <CfpCategoryItem key={category.name} category={category} />)}
        </ul>
        <p className="lead">We also welcome negative results and methodological position papers. NeurIPS-rejected papers may be resubmitted with their reviews, and we will decide on acceptance ourselves. NeurIPS-accepted papers that want more visibility are also welcome to resubmit with their reviews.</p>

        <h3 className="cfp-heading">Submission Format</h3>
        <div className="cfp-formats">
          {submissionFormats.map(([title, description]) => (
            <article className="cfp-box" key={title}><h4>{title}</h4><p>{description}</p></article>
          ))}
          <article className="cfp-box">
            <h4>Review Process</h4>
            <p>NeurIPS-style formatting, double-blind review, submission site: <a href={openReviewUrl} target="_blank" rel="noopener noreferrer">OpenReview</a>.</p>
          </article>
        </div>
        <div className="cfp-tracks">
          <article className="cfp-box">
            <h4>{neuripsReviewTrack.title}</h4>
            <p>{neuripsReviewTrack.intro}</p>
            <span className="track-due">{neuripsReviewTrack.due}</span>
            <p>{neuripsReviewTrack.body}</p>
          </article>
        </div>

        <h3 className="cfp-heading">Important Dates</h3>
        <table className="dates-table">
          <tbody>
            {importantDates.map(({ label, value, was, key }) => (
              <tr key={label} className={key ? 'key' : undefined}>
                <td>{label}</td>
                <td>{was && <s className="date-was">{was}</s>}{was && ' '}{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="cfp-heading">Ethics and LLM Usage</h3>
        <p className="lead">
          {ethicsNote.body}{' '}
          <a href={ethicsNote.url} target="_blank" rel="noopener noreferrer">{ethicsNote.linkText}</a> for details.
        </p>

        <h3 className="cfp-heading">Awards</h3>
        <p className="lead">With our sponsors' support, we will present four awards at the workshop:</p>
        <table className="dates-table">
          <tbody>
            {paperAwards.map(([label, prize]) => (
              <tr key={label}>
                <td>{label}</td>
                <td>{prize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const pad = (n) => String(n).padStart(2, '0');

function timeLeft(deadline) {
  const ms = new Date(deadline).getTime() - Date.now();
  if (ms <= 0) return null;
  const sec = Math.floor(ms / 1000);
  return {
    days: String(Math.floor(sec / 86400)),
    hours: pad(Math.floor((sec % 86400) / 3600)),
    minutes: pad(Math.floor((sec % 3600) / 60)),
    seconds: pad(sec % 60),
  };
}

function Countdown({ variant }) {
  const [left, setLeft] = useState(() => timeLeft(submissionDeadline));
  const className = `countdown${variant === 'hero' ? ' countdown--hero' : ''}`;

  useEffect(() => {
    const timer = setInterval(() => setLeft(timeLeft(submissionDeadline)), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!left) {
    return (
      <div className={className}>
        <div className="cd-label">Submissions are closed<strong>The deadline has passed.</strong></div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="cd-label">Paper submission deadline<strong><s className="date-was">{submissionDeadlineWas}</s> {submissionDeadlineLabel}</strong></div>
      <div className="cd-units">
        {[['Days', left.days], ['Hours', left.hours], ['Minutes', left.minutes], ['Seconds', left.seconds]].map(([unit, value]) => (
          <div className="cd-unit" key={unit}>
            <div className="n">{value}</div>
            <div className="u">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Competition() {
  return (
    <section id="competition">
      <div className="container">
        <h2>Competition &amp; Call for Competition Papers</h2>
        <p className="lead"><a href={competitionUrl} target="_blank" rel="noopener noreferrer">GLEE (Games in Language-based Economic Environments)</a> is the official competition of the IAB Workshop at NeurIPS 2026. It evaluates AI agents in multi-turn bargaining, negotiation, and persuasion games, where success requires natural-language communication, strategic reasoning, adaptation to other players, and effective economic decision-making.</p>
        <p className="lead">Participants can build an autonomous agent that plays live through the GLEE API, or compete in the human track directly through the web interface. Agents and humans play online in a shared pool from August 1–29, 2026 (AoE), with a total prize pool of $6,000: $5,000 for the agent track and $1,000 for the human track.</p>
        <p className="lead">Participants may also submit a <strong>four-page competition paper</strong> describing their agent, approach, and findings. Accepted papers will be presented at the IAB Workshop at NeurIPS 2026, with a <strong>poster session</strong> and a <strong>Best Competition Paper Award</strong>. See the <a href={competitionCfpUrl} target="_blank" rel="noopener noreferrer">Call for Competition Papers</a> for details, and submit through the <a href={competitionOpenReviewUrl} target="_blank" rel="noopener noreferrer">Competition Paper Track on OpenReview</a>.</p>
        <div className="special-track">
          <h4>Required section: <span className="st-hl">Agent Behavior Analysis</span></h4>
          <p>We require every competition paper to include an Agent Behavior Analysis section. Report how your agent actually behaved across the games it played, whether that behavior matches what you designed it to do, and how you made sure of that alignment.</p>
        </div>
        {/* <p className="lead">Please see more information here: <a href={competitionUrl} target="_blank" rel="noopener noreferrer">{competitionUrl}</a></p> */}
      </div>
    </section>
  );
}

function PeopleList({ people, linked = false }) {
  return (
    <ul className="people-list">
      {people.map(([name, affiliation, url]) => (
        <li key={name}>
          <span className="pl-name">
            {linked && url ? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a> : name}
          </span>
          <span className="pl-affil">{affiliation}</span>
        </li>
      ))}
    </ul>
  );
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
          <p className="adv-note">We thank the faculty and senior researchers who advise and support this workshop.</p>
          <PeopleList people={advisors} linked />
        </div>
        <div className="adv">
          <h3>Competition Organizing Team</h3>
          <p className="adv-note">We thank our team members who help us run the competition.</p>
          {competitionTeam.length ? <PeopleList people={competitionTeam} linked /> : <p>To be announced</p>}
        </div>
        <div className="adv">
          <h3>Program Committee</h3>
          <p className="adv-note">We thank our program committee members from the NLP, HCI, and ML systems communities.</p>
          <PeopleList people={programCommittee} linked />
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
        <p className="lead">We thank our sponsors for supporting the workshop. Interested in sponsoring? <a href="https://forms.gle/BTfjdzQxiRotsPP49" target="_blank" rel="noopener noreferrer">Register your interest here</a>.</p>
        <div className="sponsor-grid">
          <a className="sponsor-card sponsor-card--plain" href="https://www.abaka.ai/" target="_blank" rel="noopener noreferrer">
            <img className="sponsor-logo--large" src={abakaLogo} alt="Abaka AI" />
          </a>
          <a className="sponsor-card sponsor-card--plain" href="https://contralabs.com/creative-human-data" target="_blank" rel="noopener noreferrer">
            <img className="sponsor-logo--wordmark" src={contraLabsLogo} alt="Contra Labs" />
          </a>
        </div>
        <div className="adv adv-plain">
          <h3>Competition Sponsors</h3>
          <p className="adv-note">We thank our GLEE competition sponsors.</p>
          <div className="sponsor-grid">
            <a className="sponsor-card sponsor-card--plain" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <img className="sponsor-logo--xlarge" src={googleLogo} alt="Google" />
            </a>
            <a className="sponsor-card sponsor-card--plain" href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer">
              <img className="sponsor-logo--xlarge" src={salesforceLogo} alt="Salesforce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p><strong>IAB</strong> · Interpreting Agent Behavior: Human-Centered Interpretation for Understanding Agents, Humans, and Interaction</p>
        <p>NeurIPS Workshop, 2026 · Contact: <a href="mailto:iab-workshop@googlegroups.com">iab-workshop@googlegroups.com</a></p>
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
        <CallForPapers />
        <Competition />
        <Speakers />
        <Schedule />
        <Organizers />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
