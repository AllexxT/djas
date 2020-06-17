import React, { useEffect } from "react";
import { default as S } from "./mdseStyles";
import sett from "./mdseMedia/sett2.jpeg";
import fence from "./mdseMedia/fence2.jpeg";
import brick from "./mdseMedia/brick2.jpeg";
import monuments from "./mdseMedia/monuments.jpg";
import parapet from "./mdseMedia/parapet.jpg";
import { useHistory } from "react-router";
import ProductsDescrCont from "../../containers/products/productsDescriptCont";

const Mdse = () => {
  const history = useHistory();
  const link = (lnk) => {
    history.push(`/products/${lnk}`);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <S.Title>Выберите категорию которая вас интересует</S.Title>
      <S.Wrapper>
        <S.CategoryItem onClick={() => link("monuments")}>
          <img src={monuments} alt="Памятники" />
          <S.Label>
            <p>Памятники</p>
          </S.Label>
        </S.CategoryItem>
        <S.CategoryItem onClick={() => link("parapet")}>
          <img src={parapet} alt="Парапеты" />
          <S.Label>
            <p>Парапеты</p>
          </S.Label>
        </S.CategoryItem>
        <S.CategoryItem onClick={() => link("brick")}>
          <img src={brick} alt="Кирпич и Блок" />
          <S.Label>
            <p>Блок и Кирпич</p>
          </S.Label>
        </S.CategoryItem>
        <S.CategoryItem onClick={() => link("fence")}>
          <img src={fence} alt="Еврозабор" />
          <S.Label>
            <p>Еврозабор</p>
          </S.Label>
        </S.CategoryItem>
        <S.CategoryItem onClick={() => link("sett")}>
          <img src={sett} alt="Тротуарная плитка" />
          <S.Label>
            <p>Тротуарная Плитка</p>
          </S.Label>
        </S.CategoryItem>
      </S.Wrapper>
      <ProductsDescrCont />
    </>
  );
};

export default Mdse;
