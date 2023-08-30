import { defineType, defineField } from "sanity";
import { StaticImageData } from "next/image";
export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "productTitle",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "productTitle",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "reference",
      to: {
        type: "gender",
      },
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
        // {
        //   type: "gender",
        // },
      ],
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Ex-Small", value: "S" },
              { title: "Small", value: "XS" },
              { title: "Medium", value: "M" },
              { title: "Large", value: "L" },
              { title: "X-Large", value: "XL" },
              // add more sizes here
            ],
          },
        },
      ],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
    }),
    defineField({
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
    }),
    defineField({
      name: "discountedQuantity",
      title: "Discounted Quantity",
      type: "number",
    }),
  ],
});
