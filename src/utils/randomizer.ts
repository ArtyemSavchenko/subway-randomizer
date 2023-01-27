const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

export function getRandomEl<T>(array: T[]): [randomEl: T, arrayWithoutEl: T[]] {
  const length = array.length;
  const randomIndex = getRandomIndex(length);

  const newArray = [...array];
  newArray.splice(randomIndex, 1);

  return [array[randomIndex], newArray];
}

export function randomizeArr<T>(array: T[]): T[] {
  const result = [...array];

  result.forEach((el, i) => {
    const randomIndex = getRandomIndex(result.length);
    result[i] = result[randomIndex];
    result[randomIndex] = el;
  });

  return result;
}

export function getRandomEls<T>(array: T[], maxLength: number) {
  const randomizedArr = randomizeArr(array);
  
  let iteration = 0;
  const result = [];

  while (iteration < array.length && iteration < maxLength) {
    if (Math.random() < 0.5) {
      result.push(randomizedArr[iteration]);
    }

    iteration++;
  }

  return result;
}
