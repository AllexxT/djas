import styled from "styled-components";

const GoUp = styled.div`
  width: 40px;
  height: 50px;
  position: fixed;
  right: 10px;
  top: 50%;
  z-index: 1;
  font-size: 12px;
  cursor: pointer;
  color: gray;
  &:before {
      position: absolute;
      content: "»";
      font-size: 55px;
      transform: rotate(-90deg);
      left: 0px;
  }
`;
const MenuIcon = styled.nav`
  @media (min-width: 901px) {
    display: none;
  }
  position: fixed;
  top: 50%;
  left: 3px;
  z-index: 20;
  background: rgba(239, 156, 27, 0.8);
  /* backdrop-filter: blur(2px); */
  /* text-shadow: 1px 1px 0px white; */
  font-weight: bold;
  height: 30px;
  padding-top: 8px;
  span {
    padding-left: 2px;
  }
  &:after {
    content: " ";
    top: 0px;
    position: absolute;
    border: 15px solid transparent;
    border-right-width: 0;
    border-left: 14px solid rgba(239, 156, 27, 0.8);
  }
  &:hover {
      visibility: hidden;
      width: auto;
      ul {
        visibility: visible;
        left: unset;
        z-index: 1;
      }
  }
`;
const MenuList = styled.ul`
  visibility: hidden;
  position: absolute;
  /* display: flex;
  flex-flow: column; */
  overflow: scroll;
  top: 0px;
  box-shadow: gray 0px 5px 10px;
  background: rgba(82, 82, 82, 0.8);  /* #525252; */
  /* @media(min-height: 553px) {
      overflow: scroll;
  } */
`;
const Item = styled.li`
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 13px;
  border-bottom: 1px solid rgba(30, 29, 28, 0.3);
  &:first-child {
      padding-top: 50px;
  }
  &:last-child {
      border: unset;
  }
  a {
      display: inline-block;
      color: whitesmoke;
      letter-spacing: 1px;
      text-transform: uppercase;
      height: 100%;
      width: 100%;
        padding: 10px;
  }
`;

const Styles = {
    GoUp,
    MenuIcon,
    MenuList,
    Item
}

export default Styles;