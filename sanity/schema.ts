import { type SchemaTypeDefinition } from "sanity";
import { product } from "./Products";
import { category } from "./Category";
import { gender } from "./Gender";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, gender],
};
