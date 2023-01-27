export interface ISandwich {
  name: string;
  description: string;
  price: number;
  badge?: string;
  isChecked?: boolean;
}

export interface IFilling {
  fillingName: string;
  generatedText: string;
  price?: number;
  isChecked?: boolean;
}

export type IOptionName =
  | `На выбор`
  | `Хлеб`
  | `Овощи`
  | `Сыр`
  | `Соус`
  | `Специи`
  | `Дополнительные начинки`;

export interface ISandwichOption {
  paid: boolean;
  isRequired: boolean;
  maxCount: number;
  optionName: IOptionName;
  fillings: IFilling[];
}
