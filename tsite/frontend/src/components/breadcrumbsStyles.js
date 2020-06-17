import styled from "styled-components";

const Ul_Container = styled.ul`
  margin-top: 5pt;
  filter: drop-shadow(0 3px 5px #484752);
`;

const Li_Container = styled.li`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  /* width: 100px; */
  margin: 0px 2px 2px 0;
  text-indent: 19px;
  position: relative;
  &:before {
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    left: 0px;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #484752;
    z-index: 0;
  }
  &:first-child:before {
    border-color: transparent;
    display: none;
  }
  & a:after {
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    right: -15px;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #ccc;
    z-index: 10;
  }
  & a {
    display: block;
    background: #ccc;
    color: black;
    font-size: 10pt;
    font-weight: bold;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    &:hover {
      background: rgb(221, 221, 221);
    }
    &:hover::after {
      border-color: transparent transparent transparent rgb(221, 221, 221);
    }
    &:active {
    }
  }
`;


const Styles = {
    Ul_Container,
    Li_Container,
}

export default Styles;