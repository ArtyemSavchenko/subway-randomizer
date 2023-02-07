import { FC, useContext, useId } from 'react';

import { AppDispatch } from 'contexts/AppDispatch';

import { ISandwich } from 'types/sandwich';
import { switchSandwichIsChecked } from 'store/reducer';
import {
  SandwichCardCB,
  SandwichCardContainer,
  SandwichCardHeading,
  SandwichCardLabel,
  SandwichCardPrice,
} from './SandwichCard.styles';

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
    <SandwichCardContainer>
      <SandwichCardCB
        id={id}
        checked={isChecked}
        onChange={() => dispatch(switchSandwichIsChecked(name))}
      />
      <SandwichCardLabel htmlFor={id}>
        <SandwichCardHeading>{name}</SandwichCardHeading>
        <SandwichCardPrice>{`${price}₽`}</SandwichCardPrice>
      </SandwichCardLabel>
    </SandwichCardContainer>
  );
};

export default SandwichCard;
