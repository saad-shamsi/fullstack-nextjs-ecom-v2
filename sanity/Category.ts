import { defineType, defineField } from "sanity";
export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "category",
      type: "string",
      title: "Category",

      validation: (Rule) => Rule.required(),
    }),
  ],
});
