import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Card from "./card";
import { default as S } from "./productsStyles";
// import { useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Products = ({ data }) => {
  const location = useLocation();
  // const titleRef = useRef()
  const { title, article: articleAnchor } = data.products[0].article;

  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <S.PWrapper>
      <S.PTitle id={articleAnchor}>{title}</S.PTitle>
      <S.PContentWrapper>
        <S.PContent>
          {data.products.map((product) => (
            <Card key={product.id} card={product} />
          ))}
        </S.PContent>
      </S.PContentWrapper>
    </S.PWrapper>
  );
};

export default Products;
