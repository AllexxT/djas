import styled from "styled-components";

const StaticWin = styled.div `
  position: relative;
  height: 0;
`;

const StyledMenu = styled.nav `
  box-shadow: 5px 5px 15px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #DED9D9;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-130%)")};
  min-height: ${({ open }) => (open ? "100vh" : "0vh")};
  text-align: left;
  /* padding-top: 10px; */
  position: relative;
  top: -15px;
  left: 0;
  transition: transform 0.3s ease-in-out, padding 0 linear 0.4s,
  height 0 linear 0.4s;
  will-change: transform, height, padding;
  /* backdrop-filter: blur(20px); */

  &>a:first-child {
    padding-top: 28px;
  }

  a {
    display: block;
    font-size: ${({ open }) => (open ? "1.1rem" : "0rem")};
    text-transform: uppercase;
    padding: ${({ open }) => (open ? "8pt 10px 8pt 15px" : "0")};
    font-weight: bold;
    color: #333333;
    text-decoration: none;
    transition: all 0.05s linear;
    border-bottom: 1px solid rgba(83, 83, 83, 0.7);
    /* @media (max-width: 560px) {
      font-size: ${({ open }) => (open ? "1.5rem" : "0rem")};
    }
    @media (min-width: 560px) and (max-width: 580px) {
      padding: ${({ open }) => (open ? "6pt 0" : "0")};
    }
    @media(min-height: 800px) {
      padding: ${({ open }) => (open ? "15pt 0" : "0")};
    } */

    &:hover {
      color: #343078;
    }
  }
  ul a {
    font-weight: normal;
    color: black;
    font-size: 1rem;
  }
`;

const StyledBurger = styled.button `
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "1rem" : "")};
  left: ${({ open }) => (open ? "" : "1.5rem")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    display: block;
    width: 2rem;
    height: 4px;
    background: ${({ open }) => (open ? "#0D0C1D" : "#f5cb55")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin-bottom: 5px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledBurgerMenu = styled.div `
  /* z-index: ${({ open }) => (open ? "1000" : "0")}; */
  height: 0;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 15px;
  @media (min-width: 900px) {
    display: none;
  }
`;

const Styles = {
    StaticWin,
    StyledMenu,
    StyledBurger,
    StyledBurgerMenu,
};

export default Styles;