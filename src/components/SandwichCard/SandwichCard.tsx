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
    <label
      htmlFor={id}
      style={{
        margin: 5,
        padding: 7,
        border: 'solid mediumseagreen 1px',
        backgroundColor: isChecked ? 'mediumseagreen' : 'transparent',
        color: isChecked ? '#fff' : '#000',
        borderRadius: 7,
        cursor: 'pointer',
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => dispatch(switchSandwichIsChecked(name))}
        // style={{appearance: 'none'}}
      />
      {/* {badge && <p style={{ background: 'cornFlowerBlue' }}>{badge}</p>} */}
      <h2>{name}</h2>
      {/* <p>{description}</p> */}
      <p>{`${price}₽`}</p>
    </label>
  );
};

export default SandwichCard;
