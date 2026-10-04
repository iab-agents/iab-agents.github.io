export default function PeopleList({ people, linked = false }) {
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
