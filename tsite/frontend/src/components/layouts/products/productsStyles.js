import styled, { keyframes } from "styled-components";


const PWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
`;
const PTitleAnimation = keyframes`
    from {
        opacity: 0;
        top: -5px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
`;
const PTitle = styled.h2`
  padding: 10px 0 10px 13px;
  font-size: 32px;
  line-height: 28px;
  animation: ${PTitleAnimation} 0.5s linear;
  @media (max-width: 576px) {
    text-align: center;
    padding-left: 0;
    /* font-size: 32px; */
  }
`;

const PContentWrapper = styled.div`
  display: flex;
  @media (max-width:800px){
        justify-content: center;
    }
`

const PContent = styled.ul`
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  & > div {
    /* Cards margin */
    margin: 15px 15px 15px 15px;
  }
  @media (max-width:800px){
    justify-content: center;
  }
`;

const Prds = {
  PWrapper,
  PTitle,
  PContentWrapper,
  PContent,
}

export default Prds;