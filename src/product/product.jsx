import React, { useState, useEffect } from "react";
import ProductImg from '../productImg/index'
import ProductInfo from '../productInfo/index'
import RelatedItems from '../related/index'
import './Product.css'

const Product = ({data}) => {
    const { title, description, mainImage, rating, price, colour,sizes, features } = data;
 const productInfo = {
   title,
   description,
   mainImage,
   rating,
   price,
   colour,
   sizes,
   features
 };
  const { relatedProducts } = data;
  // console.log(data.mainImage)
  return <div className="product">
    <div className="grided">
      <ProductImg image={mainImage}></ProductImg>
      <ProductInfo info={productInfo}></ProductInfo>
    </div>
      <RelatedItems relate={relatedProducts}></RelatedItems>
  </div>;
};

export default Product;
