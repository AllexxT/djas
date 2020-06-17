import React, { useState } from "react";
// import ScrollTrigger from "react-scroll-trigger";
import { default as S } from "./footerStyles";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Map from './Map'


// const ldng = () => <div>loading</div>

// import loadableVisibility from "react-loadable-visibility/loadable-components";
// const Map = loadableVisibility(() => import("./Map"), {
//   fallback: <ldng />
// });


const Footer = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let id = setTimeout(() => setVisible(true), 3000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <>
      <S.FooterRow>
        <S.FooterMap>
          {/* <img src={gmap} alt="Google map" /> */}
          {/* <ScrollTrigger
            onEnter={() => setVisible(true)}
            onExit={() => setVisible(false)}
          > */}
          {visible && (
            <Map />
          )}
          {/* </ScrollTrigger> */}
          {/* <a
            href="https://www.google.com/maps/place/%D0%A7%D0%9F+%D0%94%D0%B6%D0%B0%D1%81+%D1%82%D1%80%D0%BE%D1%82%D1%83%D0%B0%D1%80%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0+%D0%B2+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5/@47.822872,35.284304,16z/data=!4m5!3m4!1s0x0:0x692a9f0aff452ff6!8m2!3d47.8228715!4d35.2843036?hl=ru"
            target="_blank"
          >
            <img src={mapImage} alt="ЧП Джас на карте" />
          </a> */}
        </S.FooterMap>
        <S.FooterTextRow>
          <S.FooterMenu>
            <S.FooterTitle>Меню сайта</S.FooterTitle>
            <nav>
              <Link to="/">Товары</Link>
              <Link to="/news">Новости</Link>
              {/* <Link to="">Тротуарная плитка</Link>
            <Link to="">Еврозабор</Link>
            <Link to="">Блок и Кирпич</Link>
            <Link to="">Крышки Парапеты</Link>
          <Link to="">Памятники</Link> */}
              <Link to="/sertificates">Сертификаты</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/exposition">Наши работы</Link>
            </nav>
          </S.FooterMenu>
          <S.FooterText>
            <S.ContactsText>
              <S.FooterTitle>Контакты</S.FooterTitle>
              <a href="mailto:pan2404@rambler.ru">pan2404@rambler.ru</a>
              <a href="tel:+380638086001">+38 (063) 808-60-01</a>
              <a href="tel:+380675273100">+38 (067) 527-31-00</a>
              <a href="tel:+380503419001">+38 (050) 341-90-01</a>
              <p>c 8-00 до 16-00</p>
            </S.ContactsText>
            <S.ContactsText>
              <S.FooterTitle>Адрес</S.FooterTitle>
              <p>г. Запорожье</p>
              <p>пос. Кременно 40</p>
              <p>Мокрянский карьер № 2</p>
            </S.ContactsText>
          </S.FooterText>
        </S.FooterTextRow>
      </S.FooterRow>
      <S.Copyright>© Все права защищены 2020 г</S.Copyright>
    </>
  );
};

export default Footer;
