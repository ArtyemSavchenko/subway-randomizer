export interface ISandwich {
  name: string;
  description: string;
  price: number;
  badge?: string;
  isChecked?: boolean;
}

export interface ISandwichOption {
  paid: boolean;
  isRequired: boolean;
  maxCount: number;
  name: string;
  values: {
    name: string;
    price?: number;
    isChecked?: boolean;
  }[];
}
