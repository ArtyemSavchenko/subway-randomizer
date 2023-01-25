import { IGetRandomEl, IGetRandomSubarray } from 'types/randomizer';

export const getRandomEl: IGetRandomEl = (array) => {
  const length = array.length;
  const randomIndex = Math.floor(Math.random() * length);

  return array[randomIndex];
};

export const getRandomSubarray: IGetRandomSubarray = (array, newLength) => {
  if (newLength >= array.length) {
    console.warn(
      'Длина нового массива превышает или равняется длине исходного.'
    );
    return array;
  }

  const randomizedArray = [];
  let tempArray = [...array];

  while (newLength > 0) {
    const newEl = getRandomEl(tempArray);
    randomizedArray.push(newEl);

    tempArray = [...tempArray.filter((el) => el !== newEl)];

    newLength--;
  }

  return randomizedArray;
};
