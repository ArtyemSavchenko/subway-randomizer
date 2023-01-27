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
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() =>
          dispatch(switchFillingIsChecked(optionName, fillingName))
        }
      />
      <label htmlFor={id}>
        {fillingName}
        {price && <span>{` +${price}₽`}</span>}
      </label>
    </div>
  );
};

export default SandwichFilling;
