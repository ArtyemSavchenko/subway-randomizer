import { ISandwich, ISandwichOption } from 'types/sandwich';

export interface IState {
  sandwiches: ISandwich[];
  sandwichOptions: ISandwichOption[];
}

export interface IAction {
  type: 'switchIsCheckedSandwich' | 'switchIsCheckedOption';
  payload?: {
    name?: string;
    valueName?: string;
  };
}

export type IReducer = (state: IState, action: IAction) => IState;