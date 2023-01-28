import {
  IFilling,
  IOptionName,
  ISandwich,
  ISandwichOption,
} from 'types/sandwich';
import { getRandomEl, getRandomEls } from 'utils/randomizer';
import { copyDeep } from 'utils/utils';

const parseFillings = (fillings: IFilling[]): string => {
  if (fillings.length <= 1) {
    return fillings[0].generatedText;
  }

  const fillingsStrings = fillings.map((filling) => filling.generatedText);

  let resultString = `${fillingsStrings
    .slice(0, fillingsStrings.length - 1)
    .join(', ')} и ${fillingsStrings.at(-1)}`;

  return resultString;
};

export const getRandomSandwich = (
  sandwiches: ISandwich[],
  sandwichOptions: ISandwichOption[]
) => {
  const checkedSandwiches = sandwiches.filter((sandwich) => sandwich.isChecked);
  const [randomSandwich] = getRandomEl(checkedSandwiches);

  const filteredOptions = sandwichOptions.reduce(
    (prev: ISandwichOption[], option) => {
      if (option.fillings.some((filling) => filling.isChecked)) {
        option.fillings.filter((filling) => filling.isChecked);

        const filteredOption = {
          ...copyDeep(option),
          fillings: option.fillings.filter((filling) => filling.isChecked),
        };
        prev.push(filteredOption);
      }

      return prev;
    },
    []
  );

  const randomizedOptions = filteredOptions.reduce(
    (prev: ISandwichOption[], option) => {
      const randomFillings =
        option.isRequired && option.maxCount === 1
          ? [getRandomEl(option.fillings)[0]]
          : getRandomEls(option.fillings, option.maxCount);

      if (randomFillings.length > 0) {
        prev.push({
          ...option,
          fillings: randomFillings,
        });
      }

      return prev;
    },
    []
  );

  const optionDictionary = randomizedOptions.reduce(
    (prev: { [key: string]: string }, el) => {
      prev[el.optionName] = parseFillings(el.fillings);
      return prev;
    },
    {}
  );

  const resultString = `Сэндвич ${randomSandwich.name} на ${
    optionDictionary['На выбор']
  } ${optionDictionary['Хлеб']} ${optionDictionary['Сыр']} ${
    optionDictionary['Овощи']
      ? ' , с добавлением ' + optionDictionary['Овощи']
      : ''
  } ${
    optionDictionary['Дополнительные начинки']
      ? ', ' + optionDictionary['Дополнительные начинки']
      : ''
  } ${
    optionDictionary['Соус']
      ? ', приправленный ' + optionDictionary['Соус']
      : ''
  } ${
    optionDictionary['Специи']
      ? ' с добавлением ' + optionDictionary['Специи']
      : ''
  }`.replace(/\s+/g,' ').replace(/\s,/g,',');

  return resultString;
};
