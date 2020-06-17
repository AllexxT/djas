import React from "react";
import { default as S } from "./burgerMenuStyles";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <S.StaticWin open={open}>
      <S.StyledMenu open={open} onClick={() => setOpen(!open)}>
        <Link to="/news">
          Новости
        </Link>
        <Link to="/">
          Товары
        </Link>
        <ul>
          <li>
            {" "}
            <Link to="/products/sett">
              ТРОТУАРНАЯ ПЛИТКА, БОРДЮР И ВОДОСТОК
            </Link>
          </li>
          <li>
            <Link to="/products/fence">
              ЕВРОЗАБОР
            </Link>
          </li>
          <li>
            <Link to="/products/brick">
              КОЛОТЫЙ БЛОК И КИРПИЧ
            </Link>
          </li>
          <li>
            <Link to="/products/parapet">
              КРЫШКИ И ПАРАПЕТЫ
            </Link>
          </li>
          <li>
            <Link to="/products/monuments">
              ПАМЯТНИКИ
            </Link>
          </li>
        </ul>
        <Link to="/services">
          Услуги
        </Link>
        <Link to="/sertificates">
          Сертификаты
        </Link>
        <Link to="/exposition">
          Наши Работы
        </Link>
      </S.StyledMenu>
    </S.StaticWin>
  );
};

export default Menu;
