import { ISandwich, ISandwichOption } from 'types/sandwich';

export interface IState {
  sandwiches: ISandwich[];
  sandwichOptions: ISandwichOption[];
}

export interface IAction {
  type: 'switchSandwichIsChecked' | 'switchFillingIsChecked';
  payload?: any;
}

export type IReducer = (state: IState, action: IAction) => IState;
