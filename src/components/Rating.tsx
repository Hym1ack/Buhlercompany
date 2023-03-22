import { FC } from 'react';
import starActive from '../assets/starActive.png';
import starDisabled from '../assets/starDisabled.png';

type RatingProps = {
  rating: number;
};

export const Rating: FC<RatingProps> = ({ rating }) => {
  const MAX_RATING = 5;
  const activeStars = Math.round(rating);

  return (
    <div className={'flex gap-1'}>
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <img
          key={index}
          src={index < activeStars ? starActive : starDisabled}
          alt={index < activeStars ? 'Active star' : 'Disabled star'}
        />
      ))}
    </div>
  );
};
