import { useState } from 'react';
import { AVATAR_TYPE } from '../data/peopleRepository';

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function InitialsAvatar({ value, sourceType = AVATAR_TYPE.INITIALS }) {
  return <div className="initials" data-avatar-type={sourceType} aria-hidden="true">{value}</div>;
}

export default function Avatar({ avatar, name }) {
  const [imageFailed, setImageFailed] = useState(false);
  const fallback = avatar.value || getInitials(name);

  switch (avatar.type) {
    case AVATAR_TYPE.LOCAL:
    case AVATAR_TYPE.REMOTE:
      return imageFailed ? (
        <InitialsAvatar value={fallback} sourceType={`${avatar.type}-fallback`} />
      ) : (
        <img
          src={avatar.src}
          alt={name}
          loading="lazy"
          data-avatar-type={avatar.type}
          onError={() => setImageFailed(true)}
        />
      );
    case AVATAR_TYPE.INITIALS:
      return <InitialsAvatar value={fallback} />;
    default:
      return <InitialsAvatar value={getInitials(name)} />;
  }
}
