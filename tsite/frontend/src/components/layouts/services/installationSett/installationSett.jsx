import React from "react";
import { default as S } from "./installSettStyle";
import { Link } from "react-router-dom";
import ProductsDescrCont from "../../../containers/products/productsDescriptCont";

const InstallationSett = ({ data }) => {
  return (
    <>
      <S.PageWrapper>
        <S.Block>
          <S.Title>Укладка тротуарной плитки</S.Title>
          <p>
            Наши специалисты, компании "ЧП Джас" осуществляют оперативный
            просчёт и <b>недорогую укладку тротуарной плитки в Запорожье и
            Запорожской области,</b> по минимальной цене. <b>Стоимость работ по
            мощению брусчатки,</b> будет зависеть от следующих параметров:
          </p>
          <ul>
            <li>Месторасположение объекта;</li>
            <li>Площадь мощения;</li>
            <li>Объем подготовительных работ;</li>
            <li>Тип тротуарной плитки, ее размер и толщина;</li>
            <li>Сложность реализуемого дизайнерского проекта;</li>
            <li>Количество тротуарных и дорожных бордюров;</li>
            <li>Дополнительные работы по благоустройству территории;</li>
          </ul>
          <p>Наша фирма выполняет все необходимые работы и услуги под ключ в Запорожье и области.</p>
        </S.Block>
        <h2>
          Расценки на укладку тротуарной плитки, прайс-лист на 2020 год.
        </h2>
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
            <span>Выбрать тротуарную плитку →</span>
          </S.DiscoverText>
          <S.DiscoverNumbers>
            <Link to="/products/sett">
              <span>Подробнее</span>
            </Link>
          </S.DiscoverNumbers>
        </S.DiscoverPriceRow>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default InstallationSett;
