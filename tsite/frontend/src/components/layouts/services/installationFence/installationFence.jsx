import React from "react";
import { default as S } from "./installFenceStyle";
import { Link } from "react-router-dom";
import ProductsDescrCont from "../../../containers/products/productsDescriptCont";

const InstallationFence = ({ data }) => {
  return (
    <>
      <S.PageWrapper>
        <S.Block>
          <S.Title>
            Установка еврозабора цена в Запорожье, прайс-лист на 2020 год.
          </S.Title>
        </S.Block>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование работ</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {data.servprices.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <S.DiscoverPriceRow>
          <S.DiscoverText>
            <span>Выбрать еврозабор →</span>
          </S.DiscoverText>
          <S.DiscoverNumbers>
            <Link to="/products/fence">
              <span>Подробнее</span>
            </Link>
          </S.DiscoverNumbers>
        </S.DiscoverPriceRow>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default InstallationFence;
