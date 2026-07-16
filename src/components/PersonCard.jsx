import Avatar from './Avatar';

export default function PersonCard({ person, variant = 'default' }) {
  return (
    <article className={`person-card person-card--${variant}`}>
      <div className="person-card__avatar">
        <Avatar avatar={person.avatar} name={person.name} />
      </div>
      <div className="name">
        <a href={person.url} target="_blank" rel="noopener noreferrer">
          {person.name}
        </a>
      </div>
      <div className="affil">{person.affiliation}</div>
      <div className="focus">{person.focus}</div>
      {person.note && <div className="speaker-note">{person.note}</div>}
    </article>
  );
}
