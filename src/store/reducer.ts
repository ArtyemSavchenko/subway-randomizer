import { copyDeep } from 'utils/utils';
import { IAction, IReducer, IState } from './reducer.types';

export const reducer: IReducer = (state, action) => {
  switch (action.type) {
    case 'switchIsCheckedSandwich': {
      const newState = copyDeep<IState>(state);

      newState.sandwiches.forEach((sandwich) => {
        if (sandwich.name === action.payload?.name) {
          sandwich.isChecked = !sandwich.isChecked;
        }
      });

      return newState;
    }

    case 'switchIsCheckedOption': {
      const newState = copyDeep<IState>(state);

      newState.sandwichOptions.forEach((option) => {
        if (option.name === action.payload?.name) {
          option.values.forEach((value) => {
            if (value.name === action.payload?.valueName) {
              value.isChecked = !value.isChecked;
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

export const switchIsCheckedSandwich = (name: string): IAction => ({
  type: 'switchIsCheckedSandwich',
  payload: { name },
});

export const switchIsCheckedOption = (
  name: string,
  valueName: string
): IAction => ({
  type: 'switchIsCheckedOption',
  payload: { name, valueName },
});
