import React from "react";
import { default as S } from "./anchMenuStyles";

const AnchMenu = ({ items }) => {
  const ScrollToTop = () => (
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  )
  return (
    <>
      <S.GoUp onClick={()=>ScrollToTop()} >ВВЕРХ</S.GoUp>
      <S.MenuIcon>
        <span>ТИП</span>
        <S.MenuList>
          {items.map((anch, index) => (
            <AnchItem key={index} anchor={anch} />
          ))}
        </S.MenuList>
      </S.MenuIcon>
    </>
  );
};

const AnchItem = ({ anchor }) => {
  const link = anchor[0].article.article;
  const label = anchor[0].article.title;
  return (
    <S.Item>
      <a href={`#${link}`}>{label}</a>
    </S.Item>
  );
};

export default AnchMenu;
