export interface ISandwich {
  name: string,
  description: string,
  price: number,
  popular?: boolean,
};

export interface ISandwichCard extends ISandwich {
  isLiked: boolean;
}
