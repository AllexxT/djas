import React from "react";
import { default as S } from "./noTablePricesStyle";

const NoTablePrices = ({ prices }) => {
  return (
    <S.Wrapper>
      <S.PricesBox>
        <S.TitleRow>
          <S.TitleLabels><p><span>Цвет</span></p></S.TitleLabels>
          <S.TitleLabels><p><span>Цена</span></p></S.TitleLabels>
        </S.TitleRow>
        {prices != undefined && prices.length > 0 &&
          prices.map((color) => (
            <S.TitleRow key={color.id}>
              <S.TitleLabels><p>{color.color}</p></S.TitleLabels>
              <S.TitleLabels><p>{color.noDepthPrice}</p></S.TitleLabels>
            </S.TitleRow>
          )) ||
            <S.TitleRow>
                <S.TitleLabels><p>Серый</p></S.TitleLabels>
                <S.TitleLabels><p>Уточните по телефону</p></S.TitleLabels>
            </S.TitleRow>
          }
      </S.PricesBox>
    </S.Wrapper>
  );
};

export default NoTablePrices;
