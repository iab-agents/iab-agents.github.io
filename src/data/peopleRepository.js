import beenImage from '../../img/been.png';
import bowenImage from '../../img/bowen.jpg';
import boyuanImage from '../../img/boyuan.jpg';
import jentseImage from '../../img/jentse.jpg';
import kaiserImage from '../../img/kaiser.jpg';
import katherineImage from '../../img/katherine.jpg';
import kunImage from '../../img/kun.jpg';
import marcImage from '../../img/marc.jpg';
import nancyImage from '../../img/nancy.jpg';

export const AVATAR_TYPE = Object.freeze({
  LOCAL: 'local',
  REMOTE: 'remote',
  INITIALS: 'initials',
});

export const PERSON_ROLE = Object.freeze({
  SPEAKER: 'speaker',
  ORGANIZER: 'organizer',
});

const people = [
  {
    id: 'armando-solar-lezama',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Armando Solar-Lezama',
    url: 'https://people.csail.mit.edu/asolar/',
    affiliation: 'MIT CSAIL',
    focus: 'Program Synthesis',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://people.csail.mit.edu/asolar/images/asolar_head.jpg',
    },
  },
  {
    id: 'diyi-yang',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Diyi Yang',
    url: 'https://cs.stanford.edu/~diyiy/',
    affiliation: 'Stanford University',
    focus: 'Human-centered NLP',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://cs.stanford.edu/~diyiy/img/Diyi_Yang.jpg',
    },
  },
  {
    id: 'been-kim',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Been Kim',
    url: 'https://beenkim.github.io/',
    affiliation: 'Google DeepMind',
    focus: 'Agentic Interpretability',
    avatar: { type: AVATAR_TYPE.LOCAL, src: beenImage },
  },
  {
    id: 'marc-alexandre-cote',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Marc-Alexandre Côté',
    url: 'https://www.microsoft.com/en-us/research/people/macote/',
    affiliation: 'Microsoft Research',
    focus: 'RL & Language Agents',
    avatar: { type: AVATAR_TYPE.LOCAL, src: marcImage },
  },
  {
    id: 'bowen-baker',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Bowen Baker',
    url: 'https://bowenbaker.github.io/',
    affiliation: 'OpenAI',
    focus: 'Multi-Agent Systems',
    avatar: { type: AVATAR_TYPE.LOCAL, src: bowenImage },
  },
  {
    id: 'dinh-phung',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Dinh Phung',
    url: 'https://dinhphung.com/',
    affiliation: 'Monash University',
    focus: 'Robust & Reliable Agents',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://dinhphung.com/uploads/Main/HomePage/dinh_profile.jpg',
    },
  },
  {
    id: 'kun-zhang',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Kun Zhang',
    url: 'https://www.andrew.cmu.edu/user/kunz1/index.html',
    affiliation: 'Carnegie Mellon University & MBZUAI',
    focus: 'Causal Discovery',
    avatar: { type: AVATAR_TYPE.LOCAL, src: kunImage },
  },
  {
    id: 'nancy-f-chen',
    roles: [PERSON_ROLE.SPEAKER],
    name: 'Nancy F. Chen',
    url: 'https://sites.google.com/site/nancyfchen/bio',
    affiliation: 'A*STAR Singapore',
    focus: 'Multimodal Generative AI',
    note: 'Tentative speaker · In-person or online attendance TBD',
    avatar: { type: AVATAR_TYPE.LOCAL, src: nancyImage },
  },
  {
    id: 'jie-sophia-gao',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Jie (Sophia) Gao',
    url: 'https://gaojie058.github.io/',
    affiliation: 'Johns Hopkins University',
    focus: 'Human-AI Collaboration',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://gaojie058.github.io/assets/images/photos/portrait.jpg',
    },
  },
  {
    id: 'kaiser-sun',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Kaiser Sun',
    url: 'https://kaiserwholearns.github.io/',
    affiliation: 'Johns Hopkins University',
    focus: 'LLM Interpretability',
    avatar: { type: AVATAR_TYPE.LOCAL, src: kaiserImage },
  },
  {
    id: 'teresa-yeo',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Teresa Yeo',
    url: 'https://aserety.github.io/',
    affiliation: 'Google DeepMind',
    focus: 'Model Robustness',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://aserety.github.io/ty-pp2.jpeg',
    },
  },
  {
    id: 'daniel-khashabi',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Daniel Khashabi',
    url: 'https://danielkhashabi.com/',
    affiliation: 'Johns Hopkins University',
    focus: 'Reliable Language AI',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://danielkhashabi.com/profile11.png',
    },
  },
  {
    id: 'zhuoran-lu',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Zhuoran Lu',
    url: 'https://zhuoranlu.github.io/',
    affiliation: 'University of Hong Kong',
    focus: 'Human-AI Decision Making',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://zhuoranlu.github.io/images/headshot_1.png',
    },
  },
  {
    id: 'boyuan-zheng',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Boyuan Zheng',
    url: 'https://boyuanzheng010.github.io/',
    affiliation: 'xAI',
    focus: 'Web Agents & Safety',
    avatar: { type: AVATAR_TYPE.LOCAL, src: boyuanImage },
  },
  {
    id: 'katherine-van-koevering',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Katherine Van Koevering',
    url: 'https://ktvank.github.io/',
    affiliation: 'Johns Hopkins University',
    focus: 'Computational Social Science',
    avatar: { type: AVATAR_TYPE.LOCAL, src: katherineImage },
  },
  {
    id: 'sijie-ji',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Sijie Ji',
    url: 'https://sijieji.github.io/',
    affiliation: 'Caltech',
    focus: 'Physical AI & CPS',
    avatar: {
      type: AVATAR_TYPE.REMOTE,
      src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8dd39412-d3c3-40bb-9209-be3a78a93ae1_800w.png',
    },
  },
  {
    id: 'jen-tse-huang',
    roles: [PERSON_ROLE.ORGANIZER],
    name: 'Jen-tse Huang',
    url: 'https://penguinnnnn.github.io/',
    affiliation: 'Johns Hopkins University',
    focus: 'Human-AI Alignment',
    avatar: { type: AVATAR_TYPE.LOCAL, src: jentseImage },
  },
];

const avatarTypes = new Set(Object.values(AVATAR_TYPE));
const personRoles = new Set(Object.values(PERSON_ROLE));

function validatePerson(person, ids) {
  if (!person.id || ids.has(person.id)) {
    throw new Error(`Person records require a unique id: ${person.id || '<missing>'}`);
  }
  ids.add(person.id);

  if (!person.name || !person.url || !person.affiliation || !person.focus) {
    throw new Error(`Person record ${person.id} is missing required profile fields.`);
  }
  if (!Array.isArray(person.roles) || person.roles.length === 0 || person.roles.some((role) => !personRoles.has(role))) {
    throw new Error(`Person record ${person.id} has an invalid role.`);
  }
  if (!person.avatar || !avatarTypes.has(person.avatar.type)) {
    throw new Error(`Person record ${person.id} has an invalid avatar type.`);
  }
  if (person.avatar.type === AVATAR_TYPE.INITIALS && !person.avatar.value) {
    throw new Error(`Initials avatar for ${person.id} requires a value.`);
  }
  if (person.avatar.type !== AVATAR_TYPE.INITIALS && !person.avatar.src) {
    throw new Error(`Image avatar for ${person.id} requires a src.`);
  }
}

const ids = new Set();
people.forEach((person) => validatePerson(person, ids));

export const peopleRepository = Object.freeze(
  people.map((person) => Object.freeze({
    ...person,
    roles: Object.freeze([...person.roles]),
    avatar: Object.freeze({ ...person.avatar }),
  })),
);

export function getPeopleByRole(role) {
  if (!personRoles.has(role)) {
    throw new Error(`Unknown person role: ${role}`);
  }
  return peopleRepository.filter((person) => person.roles.includes(role));
}
