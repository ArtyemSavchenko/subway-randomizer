import { copyDeep } from 'utils/utils';
import { IAction, IReducer, IState } from './reducer.types';
import { sandwiches, sandwichOptions } from 'utils/constants';

// export const initialState = { sandwiches, sandwichOptions };

export const init = () => {
  const settings = localStorage.getItem('settings');

  if (settings) {
    return JSON.parse(settings);
  }

  return { sandwiches, sandwichOptions };
};

export const reducer: IReducer = (state, action) => {
  switch (action.type) {
    case 'switchSandwichIsChecked': {
      const newState = copyDeep<IState>(state);

      newState.sandwiches.forEach((sandwich) => {
        if (sandwich.name === action.payload?.name) {
          sandwich.isChecked = !sandwich.isChecked;
        }
      });

      return newState;
    }

    case 'switchFillingIsChecked': {
      const newState = copyDeep<IState>(state);

      newState.sandwichOptions.forEach((option) => {
        if (option.optionName === action.payload?.optionName) {
          option.fillings.forEach((filling) => {
            if (filling.fillingName === action.payload?.fillingName) {
              filling.isChecked = !filling.isChecked;
            }
          });
        }
      });

      return newState;
    }

    default:
      throw new Error(`Неверное имя action.type "${action.type}"`);
  }
};

export const switchSandwichIsChecked = (name: string): IAction => ({
  type: 'switchSandwichIsChecked',
  payload: { name },
});

export const switchFillingIsChecked = (
  optionName: string,
  fillingName: string
): IAction => ({
  type: 'switchFillingIsChecked',
  payload: { optionName, fillingName },
});
