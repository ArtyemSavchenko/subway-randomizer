import { IGetRandomEl, IGetRandomSubarray } from './randomizer.types';

export const getRandomEl: IGetRandomEl = (array) => {
  const length = array.length;
  const randomIndex = Math.floor(Math.random() * length);

  return array[randomIndex];
};

export const getRandomSubarray: IGetRandomSubarray = (array, newLength) => {
  if (newLength >= array.length) {
    console.error('Длина нового массива не может превышать длину исходного.');
    return array;
  }

  const randomizedArray = [];

  while (newLength > 0) {
    const newEl = getRandomEl(array);
    randomizedArray.push(newEl);

    array = array.filter((el) => el !== newEl);
    newLength--;
  }

  return randomizedArray;
};
