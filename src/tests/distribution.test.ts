import { getRandomEls } from 'utils/randomizer';

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const random = [];

for (let i = 0; i < 100000; i++) {
  random.push(getRandomEls(test, 12));
}

const counts: any = {};

random.forEach((el) => {
  if (counts[String(el.length)]) {
    counts[String(el.length)]++;
  } else {
    counts[String(el.length)] = 1;
  }
});

export { counts };
