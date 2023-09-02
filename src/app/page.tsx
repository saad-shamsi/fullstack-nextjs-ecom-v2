import Hero from "@/components/views/Hero";
import { BASE_PATH_FORAPI } from "@/components/shared/BasePath";
import Promotion from "@/components/views/Promotion";
import { ImageUrlBuilder } from "sanity";
import ProductCarousel from "@/components/views/ProductCrousel";
import Feature from "@/components/views/Feature";
import NewsLetter from "@/components/views/NewsLetter";
async function fetchAllProductsData() {
  const response = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if (!response.ok) {
    throw new Error("Failded to fetch " + response.statusText);
  } else {
    return response.json();
  }
}
export default async function Home() {
  const data = await fetchAllProductsData();
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />
      {/* Promotional Banner */}
      <Promotion />
      {/* Product Crousel */}
      <ProductCarousel productData={data} />
      {/* Feature */}
      <Feature />
      {/* News Letter */}
      <NewsLetter />
    </div>
  );
}
