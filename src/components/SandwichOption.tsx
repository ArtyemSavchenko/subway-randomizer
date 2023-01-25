import { FC } from 'react';

import { ISandwichOption } from 'types/sandwich';

interface SandwichOptionProps extends ISandwichOption {
  neededCount: number;
  switchOption: (name: string, valueName: string) => void;
}

const SandwichOption: FC<SandwichOptionProps> = ({
  paid,
  isRequired,
  maxCount,
  name,
  values,
  neededCount,
  switchOption,
}) => {
  const getMaxCount = () => {
    const enabledCount = values.reduce(
      (result, value) => (value.isChecked ? ++result : result),
      0
    );
    return enabledCount >= maxCount ? maxCount : enabledCount;
  };

  return (
    <div style={{ border: '1px solid tomato', margin: 5, padding: 5 }}>
      <h2>{name}</h2>
      {maxCount > 1 && (
        <label>
          выбрать <input type="number" min={0} max={getMaxCount()} />
        </label>
      )}
      {values.map((value) => (
        <p
          key={value.name}
          style={{
            backgroundColor: value.isChecked ? 'sandybrown' : 'transparent',
          }}
          onClick={() => {
            switchOption(name, value.name);
          }}
        >
          {value.name}
          {value.price && <span>{` +${value.price}₽`}</span>}
        </p>
      ))}
    </div>
  );
};
export default SandwichOption;
