import React, { useEffect } from "react";
import { default as S } from "./expositionStyles";
import ExpositionCategory from "./expositionCategory";
import ProductsDescrCont from "../../containers/products/productsDescriptCont";

const ExpositionPage = ({ expositionArray }) => {
  const categories = ["sett", "fence", "brick", "parapet", "monuments"];
  // Filtering categories in right order
  let filteredCategories = [];
  categories.forEach((curCat) => {
    expositionArray.forEach((curAr) => {
      curAr[0].category == curCat && filteredCategories.push(curAr);
    });
  });
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <S.PageWrapper>
        <S.PageTitle>
          <h1>Наши работы</h1>
        </S.PageTitle>
        {(expositionArray.length > 0 &&
          filteredCategories.map((category, index) => (
            <ExpositionCategory key={index} data={category} />
          ))) || (
          <p style={{ color: "darkgoldenrod", fontSize: "16px" }}>
            Работы не добавлены
          </p>
        )}
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default ExpositionPage;
