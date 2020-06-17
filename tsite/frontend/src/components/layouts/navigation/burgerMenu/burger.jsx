import React from "react";
import { default as S } from "./burgerMenuStyles";

const Burger = ({ open, setOpen }) => {
  return (
    <S.StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );
};

export default Burger;
