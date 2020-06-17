import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import NavStyle from "./navigationStyles";

const Styled_Link = ({ label, to, active, submenu, children }) => {
  let match = useRouteMatch({
    path: to,
    exact: active
  });
  return (
    <NavStyle.Nav__Li submenu={submenu} match={match}>
      <Link to={to}>{label}</Link>
      {children}
    </NavStyle.Nav__Li>
  );
};

export const PopUpLink = ({ label, to, active }) => {
  const location = useLocation();
  let match = useRouteMatch({
    path: to,
    exact: active
  });
  //////////////////////////////////////////////////////////////
  /////////// Anchor for current page
  const toLink = _url => {
    // Returns hash of given link
    const hash = _url.split("#").slice(-1);
    hash.unshift("#");
    return hash.join("");
  };
  const anchorOrLink = // Returns "a" tag if page is current and "Link" if not
    to.includes(location.pathname) &&
    !["/", "/products"].some(el => location.pathname == el) ? (
      <a href={toLink(to)}>{label}</a>
    ) : (
      <Link to={to}>{label}</Link>
    );
  //////////////////////////////////////////////////////////////
  return (
    <NavStyle.PopUpMenu__Link match={match}>
      {anchorOrLink}
    </NavStyle.PopUpMenu__Link>
  );
};

export default Styled_Link;
