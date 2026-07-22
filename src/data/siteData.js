export const navLinks = [
  ['About', 'about'],
  ['News', 'news'],
  ['Scope', 'topics'],
  ['Call for Papers', 'cfp'],
  ['Speakers', 'speakers'],
  ['Schedule', 'schedule'],
  ['Organizers', 'organizers'],
];

export const speakerSection = Object.freeze({
  showProfiles: true,
  message: 'We thank our invited speakers and panelists.',
});

export const topics = [
  {
    type: 'agents',
    label: 'Agents',
    color: '#b04a2f',
    question: 'What do agents do, and how?',
    items: [
      'What do agents actually do during a run, from planning and reasoning to using tools, failing, and recovering?',
      'What new or emergent behaviors show up in single- and multi-agent systems?',
      'How are these behaviors shaped, by the model, the prompt, the harness, the skills, or the overall agent design?',
    ],
  },
  {
    type: 'humans',
    label: 'Humans',
    color: '#a07d2a',
    question: 'What do humans do in response, and how?',
    items: [
      'What do humans do while working with an agent, from writing prompts to verifying outputs and monitoring the run?',
      'When should humans trust and rely on agents, and when should they not?',
      'How do humans communicate intent, and step in to steer or correct an agent during runtime?',
    ],
  },
  {
    type: 'interaction',
    label: 'Interaction',
    color: '#6a4b7a',
    question: 'What happens when humans and agents interact, and how?',
    items: [
      'What patterns emerge in interaction traces, and how do they differ across tasks?',
      'How do humans and agents build a shared understanding of the goal, and where does it break down?',
      'How do they recover from misunderstandings as the work goes on?',
    ],
  },
];

// `emphasis` takes an array when several names share one slot; the renderer
// comma-separates them.
export const schedule = [
  { time: '09:00 – 09:10', title: 'Opening Remarks' },
  { time: '09:10 – 09:45', title: 'Keynote:', emphasis: 'Armando Solar-Lezama', meta: '(30 min + 5 min Q&A)' },
  { time: '09:45 – 10:20', title: 'Keynote:', emphasis: 'Diyi Yang', meta: '(30 min + 5 min Q&A)' },
  { time: '10:20 – 10:50', title: 'Paper Presentations', meta: '(2 × 15 min)' },
  { time: '10:50 – 12:15', title: 'Poster Session #1 + Coffee Break', break: true },
  { time: '12:15 – 13:15', title: 'Lunch with organizers, speakers, and panelists (TBD)', break: true },
  { time: '13:15 – 13:50', title: 'Keynote:', emphasis: 'Been Kim', meta: '(30 min + 5 min Q&A)' },
  { time: '13:50 – 14:25', title: 'Keynote:', emphasis: 'Marc-Alexandre Côté', meta: '(30 min + 5 min Q&A)' },
  { time: '14:25 – 15:10', title: 'Paper Presentations', meta: '(3 × 15 min)' },
  { time: '15:10 – 16:00', title: 'Poster Session #2 + Coffee Break', break: true },
  {
    time: '16:00 – 17:30',
    title: 'Panel:',
    emphasis: [
      'Armando Solar-Lezama',
      'Diyi Yang',
      'Been Kim',
      'Marc-Alexandre Côté',
      'Bowen Baker',
      'Dinh Phung',
      'Kun Zhang',
      'Nancy F. Chen',
    ],
    suffix: '·',
    meta: 'TBD',
  },
  { time: '17:30 – 18:00', title: 'Award Session: Best Paper Award + Closing Remarks' },
];

export const cfpCategories = [
  {
    name: 'Datasets and resources',
    description: 'Data and resources for studying, debugging, and diagnosing agent behavior',
    examples: [
      'Agent trajectory data on specific tasks',
      'Human-agent conversational data and dialogue logs',
      'Simulated or synthetic behavior data',
      'Annotated interaction traces and trajectory data',
      'Schemas for representing agent trajectories',
      'Benchmarks and evaluations on specific behaviors',
      'Discussion and positions, e.g., on how we should represent agent trajectories, or on how benchmarks and metrics can fail to capture agent behavior',
    ],
  },
  {
    name: 'Empirical studies',
    description: 'Studies on how agents and people actually behave at runtime.',
    examples: [
      'Interpretations that benchmarks and metrics cannot reveal, e.g., qualitative analysis of agent trajectories',
      'Quantitative and computational analysis of agent behavior, e.g., statistical patterns, clustering, or process mining over trajectories',
      'Observational studies of agent behavior, in general or focused on specific behaviors like sycophancy, deception, or anthropomorphism',
      'Case studies of individual agent runs',
      'Automated, large-scale analysis that surfaces behavioral patterns across many runs',
      'Identification of emergent behavior in single- and multi-agent systems',
      'Behavior comparisons across models, prompts, or architectures',
      'Behavior taxonomies for describing what happened inside an agent run',
      'How agents behave in downstream scenarios, e.g., deployment, debugging, and diagnosis',
      'Studies of how people work with agents, e.g., observations, interviews, and surveys',
    ],
  },
  {
    name: 'Methods and tools',
    description: 'Approaches that help people describe, interpret, and oversee what agents do',
    examples: [
      'Interaction and trajectory visualization tools that make agent behavior easier to understand',
      'Human-centered theoretical perspectives on agent behavior, borrowing from disciplines such as social science, behavioral science',
      'Theoretical vocabularies for describing what an agent does',
      'Reusable behavior catalogs and qualitative coding codebooks for what an agent does',
      'Grounded theory, thematic analysis, conversation analysis, and other qualitative methods applied to agent behavior',
      'Automated methods for labeling, clustering, or summarizing agent behavior at scale, e.g., using LLM judges or embeddings',
      'Metrics and probes that characterize agent behavior beyond task success',
      'Discussion or position papers, e.g., on what cross-disciplinary methods we can use for human-centered interpretation of agent behaviors',
    ],
  },
  
];

export const submissionFormats = [
  ['Long Papers', 'Up to 9 pages + references. For full empirical studies, datasets, or comprehensive analyses.'],
  ['Short Papers', 'Up to 4 pages + references. For position papers, tools, demos, preliminary findings, and negative results.'],
];

export const openReviewUrl = 'https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/IAB';

export const neuripsReviewTrack = {
  title: 'Submission with NeurIPS reviews',
  intro: 'If your paper was reviewed at NeurIPS 2026, you can submit it here together with the reviews and your response. This is a second route into the workshop.',
  due: 'Due October 1, 2026, one week after NeurIPS decisions.',
  body: 'The organizing team gives these papers a light review, so you can expect a decision within one or two weeks. Because the workshop is non-archival, presenting here does not affect where you send the paper elsewhere.',
};

export const submissionDeadline = '2026-08-30T11:59:59Z';
export const submissionDeadlineLabel = 'August 29, 2026 · midnight AoE';

// `key: true` highlights the row in the dates table.
export const importantDates = [
  { label: 'Submission opens', value: 'July 22, 2026' },
  { label: 'Submission deadline (without reviews)', value: 'August 29, 2026', key: true },
  { label: 'Review period', value: 'August 31 – September 20, 2026' },
  { label: 'Discussion period', value: 'September 21–27, 2026' },
  { label: 'Decision notification', value: 'September 29, 2026', key: true },
  { label: '"Submission with NeurIPS reviews" deadline', value: 'October 1, 2026', key: true },
  { label: '"Submission with NeurIPS reviews" notification', value: 'TBD', key: true },
  { label: 'Camera-ready deadline', value: 'November 20, 2026', key: true },
  { label: 'Workshop date', value: 'December 11–12, 2026', key: true },
];

export const ethicsNote = {
  body: 'Submissions must adhere to the NeurIPS main conference policies on the use of agents and large language models, as well as on research ethics, including obtaining appropriate IRB/institutional approval for studies involving human participants. Consult the',
  linkText: 'NeurIPS 2026 Main Track Handbook',
  url: 'https://neurips.cc/Conferences/2026/MainTrackHandbook',
};

export const advisors = [
  ['Ziang Xiao', 'Johns Hopkins University', 'https://www.cs.jhu.edu/faculty/ziang-xiao/'],
  ['Toby Jia-Jun Li', 'Notre Dame', 'https://toby.li/'],
  ['Weiyan Shi', 'Northeastern', 'https://wyshi.github.io/'],
  ['Fan Bai', 'Bloomberg AI', 'https://bflashcp3f.github.io/'],
  ['Soufiane Hayou', 'JHU', 'https://www.soufianehayou.com/'],
  ['Hang Jiang', 'Northeastern', 'https://hjian42.github.io/'],
  ['Samuel Nathanson', 'xAI', 'https://www.linkedin.com/in/nathanson/'],
];

export const programCommittee = [
  ['Boyang Li', 'Kean University', 'https://www.liboyang.org/'],
  ['Lin Zhang', 'JHU', 'https://zlin0.github.io/'],
  ['Heyuan Huang', 'JHU', 'https://heyuan9.github.io/'],
  ['Arman Hatami', 'JHU', 'https://armanhtm.github.io/'],
  ['Yadi Cao', 'UC San Diego', 'https://eydcao.github.io/'],
  ['Alyssa Columbus', 'JHU', 'https://alyssacolumbus.com/'],
  ['Han Jiang', 'JHU'],
  ['Yifan Zhang', 'National University of Singapore', 'https://yvonnefanf.github.io/index.html'],
  ['Huiqi Zou', 'Northeastern University', 'https://annazou1103.github.io/'],
];
