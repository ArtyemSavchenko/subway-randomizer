import { FC } from 'react';

import SandwichFilling from 'components/SandwichFilling/SandwichFilling';

import { ISandwichOption } from 'types/sandwich';

interface SandwichOptionProps {
  option: ISandwichOption;
}

const SandwichOption: FC<SandwichOptionProps> = ({ option }) => {
  return (
    <div>
      <h3>{option.optionName}</h3>
      {option.fillings.map((filling) => (
        <SandwichFilling
          key={filling.fillingName}
          optionName={option.optionName}
          fillingName={filling.fillingName}
          isChecked={filling.isChecked}
          price={filling.price}
        />
      ))}
    </div>
  );
};

export default SandwichOption;
