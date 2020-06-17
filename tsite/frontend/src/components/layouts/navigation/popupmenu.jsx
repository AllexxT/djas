import React from "react";
import NavStyle from "./navigationStyles";

const PopUpMenu = ({ children }) => {
  return <NavStyle.PopUpMenu__board>{children}</NavStyle.PopUpMenu__board>;
};

export default PopUpMenu;