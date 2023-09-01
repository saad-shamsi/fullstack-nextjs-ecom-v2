export interface IData {
  sizes: string[];
  price: number;
  discount: number;
  discountedQuantity: number;
  slug: Slug;
  category: Category;
  description: string;
  image: Image[];
  gender: Gender;
  quantity: number;
  discountedPrice: number;
  _id: string;
  productTitle: string;
}

export interface Slug {
  current: string;
  _type: string;
}

export interface Category {
  category: string;
}

export interface Image {
  _key: string;
  asset: Asset;
  _type: string;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Gender {
  gender: string;
}
