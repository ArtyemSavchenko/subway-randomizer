import { FC, useContext, useId } from 'react';

import { AppDispatch } from 'contexts/AppDispatch';

import { ISandwich } from 'types/sandwich';
import { switchSandwichIsChecked } from 'store/reducer';

const SandwichCard: FC<ISandwich> = ({
  name,
  badge,
  price,
  description,
  isChecked,
}) => {
  const id = useId();
  const dispatch = useContext(AppDispatch);

  return (
    <div
      style={{
        margin: 5,
        border: 'solid tomato 1px',
        backgroundColor: isChecked ? 'peru' : 'transparent',
        color: isChecked ? '#fff' : '#000',
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => dispatch(switchSandwichIsChecked(name))}
      />
      <label htmlFor={id}>
        {badge && <p style={{ background: 'cornFlowerBlue' }}>{badge}</p>}
        <h2>{name}</h2>
        {/* <p>{description}</p> */}
        <p>{`${price}₽`}</p>
      </label>
    </div>
  );
};

export default SandwichCard;
