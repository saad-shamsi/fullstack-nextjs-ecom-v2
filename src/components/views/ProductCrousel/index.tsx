import React from "react";
import { IData } from "../../../../interface";
interface MyComponentProps {
  productData: IData[];
}

const ProductCarousel: React.FC<MyComponentProps> = ({ productData }) => {
  // Component logic here
  return (
    <div>
      {productData.map((product: IData) => (
        <div key={product._id}>{product.productTitle}</div>
      ))}
    </div>
  );
};

export default ProductCarousel;
