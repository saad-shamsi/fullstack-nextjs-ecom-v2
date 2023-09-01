import { client } from "../../../../sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
import { ImageUrlBuilder } from "sanity";
export async function GET() {
  try {
    const response = await client.fetch(`*[_type == 'product'] {
      _id,
        productTitle,
        slug,
       "description": description[0].children[0].text,
        image,
        gender->{
          gender
        },
        category->{
          category
        },
        sizes[],
        price,
        quantity,
        discount,
        discountedPrice,
        discountedQuantity
      }`);
    return NextResponse.json(response);
  } catch (error: any) {
    console.log("ERROR wile fetching sanity data: ", error);
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
