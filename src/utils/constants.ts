import { ISandwich, ISandwichOption } from 'types/sandwich';

export const sandwiches: ISandwich[] = [
  {
    name: 'Овощной',
    description:
      'Легкий овощной сэндвич из сочных листьев салата, спелых помидор, свежих и маринованных огурцов, оливок, лука и зеленого перца с соусом на выбор.',
    price: 365,
    isChecked: true,
  },
  {
    name: 'Морепродукты',
    description:
      'Идеальное сочетание нежных ломтиков крабового мяса с легким майонезом на свежевыпеченном хлебе со свежими овощами и соусом на выбор.',
    price: 430,
    isChecked: true,
  },
  {
    name: 'Индейка',
    description:
      'Тонкое мясо индейки и свежие овощи на свежевыпеченном хлебе в комбинации с любимым соусом на выбор.',
    price: 455,
    isChecked: true,
  },
  {
    name: 'Ветчина',
    description:
      'Нежная ветчина из свинины в сочетании с овощами и любимым соусом на свежевыпеченном хлебе.',
    price: 455,
    isChecked: true,
  },
  {
    name: 'Индейка и Ветчина',
    description:
      'Два вкуса ломтиков индейки и ветчины гармонично сочетаются в одном сэндвиче на свежевыпеченном хлебе с овощами и соусом на выбор.',
    price: 455,
    badge: 'популярный',
    isChecked: true,
  },
  {
    name: 'Острый Итальянский',
    description:
      'Классический сэндвич, приготовленный из кусочков пряной пепперони и салями на свежевыпеченном хлебе с овощами и соусом на выбор.',
    price: 510,
    badge: 'популярный',
    isChecked: true,
  },
  {
    name: 'Итальянский Бмт',
    description:
      'Оригинальная комбинация салями, пикантной пепперони и ветчины в сочетании со свежими овощами и соусом на выбор на свежевыпеченном хлебе.',
    price: 510,
    badge: 'популярный',
    isChecked: true,
  },
  {
    name: 'Куриная грудка',
    description:
      'Цельная куриная грудка в сочетании со свежими овощами и соусом на выбор на свежевыпеченном хлебе.',
    price: 520,
    isChecked: true,
  },
  {
    name: 'Тунец',
    description:
      'Мясо тунца смешанное с легким майонезом на свежевыпеченном хлебе с овощами и соусом на выбор.',
    price: 535,
    badge: 'популярный',
    isChecked: true,
  },
  {
    name: 'Сабвэй Мелт',
    description:
      'Начинка из бекона, ароматной индейки и ветчины с сыром на свежевыпеченном хлебе в комбинации с овощами и соусом на выбор.',
    price: 535,
    isChecked: true,
  },
  {
    name: 'Курица Терияки',
    description:
      'Кусочки курицы под соусом терияки в сочетании со свежими овощами и соусом на выбор на свежевыпеченном хлебе',
    price: 535,
    badge: 'популярный',
    isChecked: true,
  },
  {
    name: 'Курица и Бекон Мелт',
    description:
      'Кусочки куриного филе в сочетании с двумя полосками бекона с сыром и свежими овощами на свежевыпеченном хлебе с любимым соусом на выбор.',
    price: 535,
    isChecked: true,
  },
  {
    name: 'Альпийский',
    description:
      'Колбаски из куриного мяса с добавлением cвинoго шпика со свежими овощами и любимым соусом на свежевыпеченном хлебе.',
    price: 520,
    isChecked: true,
  },
  {
    name: 'Лосось Крем-Чиз',
    description:
      'Мягкий сыр и ломтики красной рыбы на свежевыпеченном хлебе со свежими овощами и соусом на выбор.',
    price: 715,
    isChecked: true,
  },
  {
    name: 'Биф Клаб Мелт',
    description:
      'Мясная котлета, сыр, свежие овощи и любимый соус на выбор на свежевыпеченном хлебе. Рекомендуется горячим.',
    price: 570,
    isChecked: true,
  },
];

export const sandwichOptions: ISandwichOption[] = [
  {
    paid: false,
    isRequired: true,
    maxCount: 1,
    optionName: 'На выбор',
    fillings: [
      { fillingName: 'Жарить', isChecked: true, generatedText: 'поджаренном' },
      { fillingName: 'Не жарить', isChecked: true, generatedText: '' },
    ],
  },
  {
    paid: false,
    isRequired: true,
    maxCount: 1,
    optionName: 'Хлеб',
    fillings: [
      { fillingName: 'Белый Итальянский', isChecked: true, generatedText: 'белом итальянском хлебе' },
      { fillingName: 'Белый с кунжутом', isChecked: true, generatedText: 'белом хлебе с кунжутом' },
      { fillingName: 'Белый с пармезаном и орегано', isChecked: true, generatedText: 'белом хлебе с пармезаном и орегано' },
      { fillingName: 'Зерновой', isChecked: true, generatedText: 'зерновом хлебе' },
      { fillingName: 'Зерновой с овсяными хлопьями', isChecked: true, generatedText: 'зерновом хлебе с овсяными хлопьями' },
      { fillingName: 'Ржаной хлеб', isChecked: true, generatedText: 'ржаном хлебе' },
    ],
  },
  {
    paid: false,
    isRequired: false,
    maxCount: 8,
    optionName: 'Овощи',
    fillings: [
      { fillingName: 'Салат', isChecked: true, generatedText: 'салата' },
      { fillingName: 'Огурцы свежие', isChecked: true, generatedText: 'свежих огурцов' },
      { fillingName: 'Перец сладкий', isChecked: true, generatedText: 'сладкого перца' },
      { fillingName: 'Лук', isChecked: true, generatedText: 'лука' },
      { fillingName: 'Помидоры', isChecked: true, generatedText: 'помидоров' },
      { fillingName: 'Огурцы маринованные', isChecked: true, generatedText: 'маринованных огурчиков' },
      { fillingName: 'Оливки', isChecked: true, generatedText: 'оливок' },
      { fillingName: 'Перец Халапеньо', isChecked: true, generatedText: 'перчика халапеньо' },
    ],
  },
  {
    paid: false,
    isRequired: true,
    maxCount: 1,
    optionName: 'Сыр',
    fillings: [
      { fillingName: 'С сыром', isChecked: true, generatedText: 'с ломтиками сыра' },
      { fillingName: 'Без сыра', isChecked: true, generatedText: '' },
    ],
  },
  {
    paid: false,
    isRequired: false,
    maxCount: 3,
    optionName: 'Соус',
    fillings: [
      { fillingName: 'Кетчуп', isChecked: true, generatedText: 'кетчупом' },
      { fillingName: 'Сырный', isChecked: true, generatedText: 'сырным соусом' },
      { fillingName: '1000 островов', isChecked: true, generatedText: 'соусом тысяча островов' },
      { fillingName: 'Горчица острая', isChecked: true, generatedText: 'острой горчицей' },
      { fillingName: 'Барбекю', isChecked: true, generatedText: 'соусом барбекю' },
      { fillingName: 'Майонез легкий', isChecked: true, generatedText: 'легким майонезом' },
      { fillingName: 'Чесночный ранч', isChecked: true, generatedText: 'соусом чесночный ранч' },
      { fillingName: 'Чипотл Саусвест', isChecked: true, generatedText: 'соусом чипотл саусвест' },
      { fillingName: 'Медовая горчица', isChecked: true, generatedText: 'медовой горчицей' },
      { fillingName: 'Сладкий лук', isChecked: true, generatedText: 'сладким луком' },
    ],
  },
  {
    paid: false,
    isRequired: false,
    maxCount: 4,
    optionName: 'Специи',
    fillings: [
      { fillingName: 'Соль', isChecked: true, generatedText: 'соли' },
      { fillingName: 'Масло', isChecked: true, generatedText: 'масла' },
      { fillingName: 'Перец', isChecked: true, generatedText: 'перца' },
      { fillingName: 'Винный уксус', isChecked: true, generatedText: 'винного уксуса' },
    ],
  },
  {
    paid: true,
    isRequired: false,
    maxCount: 9,
    optionName: 'Дополнительные начинки',
    fillings: [
      { fillingName: 'Жареный лук 20г', price: 50, isChecked: true, generatedText: 'жаренного лука' },
      { fillingName: 'Крем-чиз 80г', price: 90, isChecked: true, generatedText: 'крема-чиз' },
      { fillingName: 'Пепперони 50г', price: 90, isChecked: true, generatedText: 'пепперони' },
      { fillingName: 'Омлет 172г', price: 192, isChecked: true, generatedText: 'омлета' },
      { fillingName: 'Сыр 20г', price: 70, isChecked: true, generatedText: 'сыра' },
      { fillingName: 'Салями 50г', price: 90, isChecked: true, generatedText: 'салями' },
      { fillingName: 'Бекон 48г', price: 110, isChecked: true, generatedText: 'бекона' },
    ],
  },
];
