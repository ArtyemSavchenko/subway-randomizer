import { FC, useId, useContext } from 'react';

import { AppDispatch } from 'contexts/AppDispatch';
import { switchFillingIsChecked } from 'store/reducer';
import {
  SandwichFillingContainer,
  SandwichFillingInput,
  SandwichFillingLabel,
} from './SandwichFilling.style';

export interface SandwichFillingProps {
  optionName: string;
  fillingName: string;
  isChecked?: boolean;
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
    <SandwichFillingContainer>
      <SandwichFillingInput
        id={id}
        checked={isChecked}
        onChange={() =>
          dispatch(switchFillingIsChecked(optionName, fillingName))
        }
      />
      <SandwichFillingLabel htmlFor={id}>
        {fillingName}
        {price && <span>{` +${price}₽`}</span>}
      </SandwichFillingLabel>
    </SandwichFillingContainer>
  );
};

export default SandwichFilling;
