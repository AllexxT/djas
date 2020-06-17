import styled, { css } from "styled-components";


const Nav = styled.nav`
  height: 100%;
`
const Nav__Li = styled.li`
  position: relative;
  display: block;
  margin: 0 5px 0 0;
  background: #343339;
  border-bottom: 1px solid rgba(30, 29, 28, 0.3);
  box-shadow: 0px 5px 10px gray;
  
  & a {
    position: relative;
    color: #e4ddd9;
    font-weight: bold;
    display: block;
    padding: 5pt 0 5pt 7pt;
    ${props =>
    props.match &&
    css`
        /* Current link styling */
        color: #fecf53;
        & + span {
          background: #D3A52E;
        }
      `}
  }
  ${props =>
    props.submenu &&
    css`
        /* place for styling submenu buttons #343339*/
        background: #525252;

      `}
`;

const Nav__Ul_Submenu = styled.ul`
  position: relative;
  a {
    padding: 5pt 10pt 5pt 5pt;
    flex: 1 0 100%;
    font-size: 9pt;
    line-height: 15px;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  a:hover + span + ul {
    display: block;
  }
  a:hover + span {
    background: #D3A52E;
  }

`

const Nav__Submenu_icon = styled.span`
  display: inline-block;
  align-self: stretch;
  flex:0 0 5pt;
  order: -1;
`

const PopUpMenu__board = styled.ul`
    position: absolute;
    background: rgb(145, 145, 145);
    top: -5px;
    left: 95%;
    display: none;
    z-index: 10;
    padding: 5px;
    box-shadow: 0px 5px 10px gray;
    &:hover{
      display: block;
    }
`
const PopUpMenu__Link = styled.li`
    border-bottom: 1px solid rgba(63, 63, 63, 0.4);
    :last-child {border: none;}
    &:hover {
      text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
    }
    a {
      color: black;
    }
    & a:hover{
      color: black;
    }
`

const NavStyle = {
  Nav,
  Nav__Li,
  Nav__Ul_Submenu,
  Nav__Submenu_icon,
  PopUpMenu__board,
  PopUpMenu__Link
}
export default NavStyle;
