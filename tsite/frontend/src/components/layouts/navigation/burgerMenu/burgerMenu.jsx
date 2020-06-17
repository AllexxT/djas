import React, { useEffect } from "react";
import { default as S } from "./burgerMenuStyles";
import Burger from "./burger";
import Menu from "./menu";

const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const handleClickOutside = e => {
    // console.log(e.type);
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleSwipe = e => {
    if (node.current.contains(e.target)) {
      // inside click
      // setOpen(false);
      return;
    }
    // outside click
    // setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside, {passive: true});
      // document.addEventListener("touchmove", handleSwipe);
    } else {
      document.removeEventListener("mousedown", handleClickOutside, {passive: true});
      // document.removeEventListener("touchmove", handleSwipe);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // document.removeEventListener("touchend", handleSwipe);
    };
  }, [open]);

  return (
    <S.StyledBurgerMenu open={open} ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </S.StyledBurgerMenu>
  );
};

export default BurgerMenu;
