import styled, { keyframes } from "styled-components";

const C_Wrapper = styled.div`
  position: relative;
  min-height: 325px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #F5F5F5;
  justify-content: space-between;
  box-shadow: 0px 5px 10px gray;
`;
const C_Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const C_ImageBlock = styled.div`
  position: relative;
  & a {
    display: flex;
    justify-content: center;
    cursor: pointer;
    max-height: 220px;
    overflow: hidden; /* new */
  }
`;
const C_ImageBlockMonument = styled.div`
  position: relative;
  & a {
    display: flex;
    justify-content: center;
    cursor: pointer;
    max-height: 430px;
    overflow: hidden; /* new */
    transition: all 3s;
    &:hover {
      overflow: unset;
    }
    & img:hover:first-child {
      max-height: 490px;
      position: relative;
      z-index: 10;
      max-width: 100vw;
      /* border-right: 2px solid #f3cb55;
      border-top: 2px solid #f3cb55;
      border-bottom: 2px solid #535252;
      border-left: 2px solid #535252; */
      /* outline: 3px solid #535252; */
      /* object-fit: unset; */
      /* box-shadow: 0px 10px 15px black; */
    }
  }
`;
const C_LinkHolder = styled.div`
  flex: 1 1 52px;
`;
const C_ExpandableName = styled.div`
  position: absolute;
  background: #F5F5F5;
  text-decoration: underline;
   & a {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 10px 2px 0 0;
    font-weight: bold;
    color: #323232;
    transition: color 0.2s linear;
    align-self: flex-start;
    position: relative;
    &:hover {
      color: #b28c1a;
    }
  }
  @media (max-width:600px){
    position: absolute;
  }
`;
const C_Image = styled.img`
  transform: ${(monument)=>(monument ? "none" : "scale(1.10)")};;
  /* height: 169px;   */      /*  new */
  /* width: 100%;   */       /* new */
  object-fit: contain;     /* new */
  /* height: 180px; */
`;
const C_StockImg = styled.img`
  position: absolute;
  top: -5px;
  left: -7px;
`;
const C_SertifImg = styled.img`
  position: absolute;
  top: -5px;
  right: 5px;
  width: 30px;
  filter: drop-shadow(3px 4px 3px gray);
`;
const C_OldPrice = styled.div`
  visibility: ${props => (props.oldPrice ? "visible" : "hidden")};
  text-decoration: line-through;
  font-size: 15px;
  color: gray;
  vertical-align: bottom;
`;
const C_Price = styled.div`
  font-size: 21px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #323232;
`;
const C_Button = styled.div`
  display: flex;
  justify-content: center;
  line-height: 48px;
  & a {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #2b2b2b;
    background: #d3a52e;
    text-align: center;
    transition: all 0.2s linear;
    &:hover {
      background: #fdc61d;
      color: #2b2b2b;
    }
  }
`;

const Crd = {
  C_Wrapper,
  C_Content,
  C_ImageBlock,
  C_ImageBlockMonument,
  C_LinkHolder,
  C_Image,
  C_StockImg,
  C_SertifImg,
  C_OldPrice,
  C_Price,
  C_Button,
  C_ExpandableName,
}

export default Crd;