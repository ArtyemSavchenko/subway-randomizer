import { IState } from 'store/reducer.types';
import { ISandwichOption } from 'types/sandwich';
import { sandwiches, sandwichOptions } from 'utils/constants';

export const getInitialSettingsState = () => {
  const settings = localStorage.getItem('settings');

  if (settings) {
    return JSON.parse(settings);
  }

  return { sandwiches, sandwichOptions };
};

export const saveInitialSettingsState = (settings: IState) => {
  localStorage.setItem('settings', JSON.stringify(settings));
};

export const getCheckedEls = (array: ISandwichOption['values']) => {
  return array.filter((el) => el.isChecked);
};
