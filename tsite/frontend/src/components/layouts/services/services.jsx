import React, { useEffect } from "react";
import { default as S } from "./servicesStyle";
import { Link } from "react-router-dom";
import placeholder from "../products/placeholder.jpeg";
import manipulator from "./manipul.jpg";
import instSett from "./укладка тротуарной плитки в запорожье цена чп джас фэм ритм элитбрук брук хаус2.jpg";
import instFence from "./установка_еврозабора_чп-Джас.jpg";
import ProductsDescrCont from "../../containers/products/productsDescriptCont";

const Services = () => {
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
          <h1>Наши услуги</h1>
        </S.PageTitle>
        <S.Content>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/delivery">
                <img src={manipulator} alt="Доставка" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/delivery">
                <span>ДОСТАВКА</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/sett">
                <img
                  src={instSett}
                  title="Укладка тротуарной плитки в Запорожье"
                  alt="Укладка тротуарной плитки"
                  style={{ width: "103%" }}
                />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/sett">
                <span>УКЛАДКА ТРОТУАРНОЙ ПЛИТКИ</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/fence">
                <img
                  src={instFence}
                  alt="Установка еврозабора"
                  style={{ width: "75%" }}
                />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/fence">
                <span>УСТАНОВКА ЕВРОЗАБОРА</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/monuments">
                <img src={placeholder} alt="Установка памятников" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/monuments">
                <span>УСТАНОВКА ПАМЯТНИКОВ</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/calculate">
                <img src={placeholder} alt="Заказать замер" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              <Link to="/services/calculate">
                <span>ЗАКАЗАТЬ ЗАМЕР</span>
              </Link>
            </S.ButtonBlock>
          </S.Item>
          <S.Item>
            <S.ImageBlock>
              <Link to="/services/consultation">
                <img src={placeholder} alt="Доставка" />
              </Link>
            </S.ImageBlock>
            <S.ButtonBlock>
              {/* <Link to="/services/consultation">
              <span>КОНСУЛЬТАЦИЯ</span>
            </Link> */}
              <a href="" onClick={(e) => e.preventDefault()}>
                <span>КОНСУЛЬТАЦИЯ</span>
              </a>
            </S.ButtonBlock>
          </S.Item>
        </S.Content>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default Services;
