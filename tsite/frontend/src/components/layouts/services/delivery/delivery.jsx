import React from "react";
import { default as S } from "./deliveryStyle";
import { Link } from "react-router-dom";
import placeholder from "../../products/placeholder.jpeg";
import ProductsDescrCont from "../../../containers/products/productsDescriptCont";
import fifteen from "./доставка манипулятор запорожье с ндс чп джас.jpg"

const Delivery = () => {
  return (
    <>
      <S.PageWrapper>
        <S.Title>
          <h1>
            Доставка тротуарной плитки в Запорожье и Запорожской области
            манипулятором
          </h1>
        </S.Title>
        <S.Description>
          <p>
            Благодаря наличию манипуляторов грузоподъемностью от 5 до 30 тонн,
            мы с радостью доставим необходимое для Вас количество{" "}
            <b>тротуарной плитки</b>,<b> бордюров</b>,{" "}
            <b>строительных блоков</b> и тд. в любую точку Запорожья,
            Запорожской области (Бердянск, Мелитополь, Энергодар, Вольнянск,
            Орехов, Кирилловка, Васильевка, Пологи, Днепрорудное, Гуляйполе) а
            так же ближайших областей (Днепропетровская, Донецская, Херсонская,
            Луганская)
          </p>
        </S.Description>
        <S.PhotoRow>
          <S.Box>
            <S.PhotoBox>
              <img src={placeholder} alt="Манипулятор" />
            </S.PhotoBox>
            <S.BoxLabel>
              <h4>Манипулятор 5 т</h4>
              <p>Доставка</p>
            </S.BoxLabel>
          </S.Box>
          <S.Box>
            <S.PhotoBox>
              <img src={fifteen} alt="Манипулятор" />
            </S.PhotoBox>
            <S.BoxLabel>
              <h4>Манипулятор 15 т</h4>
              <p>Доставка</p>
            </S.BoxLabel>
          </S.Box>
          <S.Box>
            <S.PhotoBox>
              <img src={placeholder} alt="Манипулятор" />
            </S.PhotoBox>
            <S.BoxLabel>
              <h4>Манипулятор 25 т</h4>
              <p>Доставка</p>
            </S.BoxLabel>
          </S.Box>
        </S.PhotoRow>
        <S.DiscoverPriceRow>
          <S.DiscoverText>
            <span>Уточнить стоимость доставки</span>
          </S.DiscoverText>
          <S.DiscoverNumbers>
            <a href="tel:+380638086001">+38 (063) 80-86-001</a>
            <a href="tel:+380675273100">+38 (067) 52-73-100</a>
          </S.DiscoverNumbers>
        </S.DiscoverPriceRow>
        <S.DownLink>
          <Link to="/products/sett">КУПИТЬ ТРОТУАРНУЮ ПЛИТКУ В ЗАПОРОЖЬЕ</Link>
        </S.DownLink>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default Delivery;
