import { FC } from 'react';

import { ISandwich } from 'types/sandwich';

interface SandwichCardProps extends ISandwich {
  onClick: (name: string) => void;
}

const SandwichCard: FC<SandwichCardProps> = ({
  name,
  badge,
  price,
  description,
  isChecked,
  onClick,
}) => {
  return (
    <div
      style={{
        margin: 5,
        border: 'solid tomato 1px',
        backgroundColor: isChecked ? 'peru' : 'transparent',
        color: isChecked ? '#fff' : '#000',
      }}
      onClick={() => {
        onClick(name);
      }}
    >
      {badge && <p style={{ background: 'cornFlowerBlue' }}>{badge}</p>}
      <h2>{name}</h2>
      {/* <p>{description}</p> */}
      <p>{`${price}₽`}</p>
    </div>
  );
};
export default SandwichCard;
