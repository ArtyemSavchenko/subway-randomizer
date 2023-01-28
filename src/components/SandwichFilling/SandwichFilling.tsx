import { FC, useId, useContext } from 'react';

import { AppDispatch } from 'contexts/AppDispatch';
import { switchFillingIsChecked } from 'store/reducer';

interface SandwichFillingProps {
  optionName: string;
  fillingName: string;
  isChecked: boolean | undefined;
  price?: number;
}

const SandwichFilling: FC<SandwichFillingProps> = ({
  optionName,
  fillingName,
  price,
  isChecked,
}) => {
  const id = useId();
  const dispatch = useContext(AppDispatch);

  return (
    <div
      style={{
        border: '1px mediumseagreen solid',
        borderRadius: '1em',
        padding: '5px 10px',
        backgroundColor: isChecked ? 'mediumseagreen' : 'transparent',
        color: isChecked ? '#fff' : '#000',
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() =>
          dispatch(switchFillingIsChecked(optionName, fillingName))
        }
        // style={{ appearance: 'none' }}
      />
      <label htmlFor={id} style={{ cursor: 'pointer' }}>
        {fillingName}
        {price && <span>{` +${price}₽`}</span>}
      </label>
    </div>
  );
};

export default SandwichFilling;
