import React from "react";
import { default as S } from "./calculateStye";

import placeholder from "../../products/placeholder.jpeg";
import ProductsDescrCont from "../../../containers/products/productsDescriptCont";

const Calculate = () => {
  return (
    <>
      <S.PageWrapper>
        <S.ContentRow>
          <S.Icon>
            <img src={placeholder} alt="Замер территории для укладки плитки" />
          </S.Icon>
          <S.Description>
            <p>
              Замер на территории планируемой под работы по укладке тротуарной
              плитки, производят опытные замерщики.
            </p>
            <p>
              Замеры обязательны для того, что бы рассчитать необходимое
              количество тротуарной плитки и сопутствующих материалов.{" "}
            </p>
            <p>
              Точные замеры позволяют расчитать количество требуемой тротуарной
              плитки и основных сопутствующих материалов, таких как геотекстиль,
              цемент, отсев, бордюр и отливы. У Вас не будут накапливаться
              оставшиеся строительные материалы, тем самым Вы значительно
              сэкономите на расходах.
            </p>
          </S.Description>
        </S.ContentRow>
        <S.DiscoverPriceRow>
          <S.DiscoverText>
            <span>Заказать замер</span>
          </S.DiscoverText>
          <S.DiscoverNumbers>
            <a href="tel:+380638086001">+38 (063) 80-86-001</a>
            <a href="tel:+380675273100">+38 (067) 52-73-100</a>
          </S.DiscoverNumbers>
        </S.DiscoverPriceRow>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default Calculate;
