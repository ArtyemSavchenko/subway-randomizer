import { FC } from 'react';

import SandwichFilling from 'components/SandwichFilling/SandwichFilling';

import { ISandwichOption } from 'types/sandwich';

interface SandwichOptionProps {
  option: ISandwichOption;
}

const SandwichOption: FC<SandwichOptionProps> = ({ option }) => {
  return (
    <div style={{padding: 7}}>
      <h3 style={{marginBottom: 7}}>{option.optionName}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
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
    </div>
  );
};

export default SandwichOption;
