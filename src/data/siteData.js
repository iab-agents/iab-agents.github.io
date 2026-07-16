export const navLinks = [
  ['About', 'about'],
  ['News', 'news'],
  ['Scope', 'topics'],
  ['Speakers', 'speakers'],
  ['Schedule', 'schedule'],
  ['Call for Papers', 'cfp'],
  ['Organizers', 'organizers'],
];

export const speakerSection = Object.freeze({
  showProfiles: false,
  message: 'We have wonderful speaker lists to give talks, and we are finalizing the in person attendance. To be announced.',
});

export const topics = [
  {
    type: 'agents',
    label: 'Agents',
    color: '#1d4ed8',
    question: 'What do agents do, and how?',
    items: [
      'Which behaviors recur at runtime, and which are new: planning, reasoning, calling tools, handling ambiguity and uncertainty, failing, and recovering?',
      'What emergent behaviors appear in single- and multi-agent systems?',
      'How does the choice of model or architecture shape behavior?',
      'What types does this behavior fall into, and is it similar enough to human behavior that we can borrow methods from studying it?',
      'How do we capture and reuse successful patterns?',
    ],
  },
  {
    type: 'humans',
    label: 'Humans',
    color: '#b45309',
    question: 'What do people do in response, and how?',
    items: [
      'What do people do when they work with agents: writing prompts, verifying outputs, over-relying, forming mental models, and monitoring ongoing execution?',
      'What strategies do they use to adjust agent behavior mid-execution?',
      'What types does this behavior fall into?',
      'Is it similar to how they treat other people?',
    ],
  },
  {
    type: 'interaction',
    label: 'Interaction',
    color: '#0f766e',
    question: 'What happens when humans and agents interact, and how?',
    items: [
      'Which behaviors recur, which are new, and what role do people play?',
      'How do users communicate intent and goals?',
      'How are misunderstandings and breakdowns repaired?',
      'What patterns emerge from interaction traces and logs, and how do they differ across tasks?',
      'Are these interactions similar to how people work with other people?',
    ],
  },
];

export const schedule = [
  { time: '09:00 – 09:10', title: 'Opening Remarks' },
  { time: '09:10 – 09:45', title: 'Keynote:', emphasis: 'To be announced', meta: '(30 min + 5 min Q&A)' },
  { time: '09:45 – 10:20', title: 'Keynote:', emphasis: 'To be announced', meta: '(30 min + 5 min Q&A)' },
  { time: '10:20 – 10:50', title: 'Paper Presentations', meta: '(2 × 15 min)' },
  { time: '10:50 – 12:15', title: 'Poster Session #1 + Coffee Break', break: true },
  { time: '12:15 – 13:15', title: 'Lunch', break: true },
  { time: '13:15 – 13:50', title: 'Keynote:', emphasis: 'To be announced', meta: '(30 min + 5 min Q&A)' },
  { time: '13:50 – 14:25', title: 'Keynote:', emphasis: 'To be announced', meta: '(30 min + 5 min Q&A)' },
  { time: '14:25 – 15:10', title: 'Paper Presentations', meta: '(3 × 15 min)' },
  { time: '15:10 – 16:00', title: 'Poster Session #2 + Coffee Break', break: true },
  {
    time: '16:00 – 16:45',
    title: 'Panel:',
    emphasis: 'To be announced',
    suffix: '—',
    meta: 'Empirical Methods for Understanding Agent Behavior',
  },
  { time: '16:45 – 17:00', title: 'Best Paper Award + Closing Remarks' },
];

export const cfpCategories = [
  ['Datasets and Resources', 'annotated interaction traces, failure catalogs, human-agent conversational data, simulated behavior data'],
  ['New Methods and Tools', 'qualitative coding frameworks, think-aloud protocols, interaction visualization, credit assignment tools, LLM-as-judge pipelines'],
  ['Empirical Studies', 'error taxonomies, failure mode analysis, case studies of agent decisions, probing studies of internal states'],
  ['Human-Agent Interaction Analysis', 'user verification strategies, user intent grounding, mid-execution adjustment, collaborative failure recovery'],
];

export const submissionFormats = [
  ['Long Papers', 'Up to 9 pages + references. For full empirical studies, datasets, benchmarks, or comprehensive analyses.'],
  ['Short Papers', 'Up to 4 pages + references. For position papers, tools, demos, preliminary findings, and negative results.'],
];

export const importantDates = [
  ['Submission', 'Aug 29, 2026'],
  ['Notification', 'Sep 29, 2026'],
  ['Camera-ready', 'Nov 20, 2026'],
  ['Workshop', 'Dec 11–12, 2026'],
];

export const advisors = [
  ['Ziang Xiao', 'JHU', 'https://www.cs.jhu.edu/faculty/ziang-xiao/'],
  ['Jen-tse Huang', 'JHU', 'https://penguinnnnn.github.io/'],
  ['Toby Jia-Jun Li', 'Notre Dame', 'https://toby.li/'],
  ['Soufiane Hayou', 'JHU', 'https://www.soufianehayou.com/'],
  ['Hang Jiang', 'Northeastern', 'https://hjian42.github.io/'],
  ['Weiyan Shi', 'Northeastern', 'https://wyshi.github.io/'],
  ['Wei Lu', 'NTU Singapore', 'https://scholar.google.com/citations?user=n41KN9AAAAAJ&hl=en'],
  ['Samuel Nathanson', 'xAI', 'https://www.linkedin.com/in/nathanson/'],
  ['Fan Bai', 'Bloomberg AI', 'https://bflashcp3f.github.io/'],
];

export const programCommittee = [
  ['Lin Zhang', 'JHU', 'https://zlin0.github.io/'],
  ['Heyuan Huang', 'JHU'],
  ['Arman Hatami', 'JHU'],
  ['Yadi Cao', 'UC San Diego'],
  ['Boyang Li', 'Kean University'],
  ['Alyssa Columbus', 'JHU'],
  ['Han Jiang', 'JHU'],
  ['Yifan Zhang', 'National University of Singapore'],
  ['Huiqi Zou', 'Northeastern University'],
];
