import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    /* margin: 0 20px 0 20px; */
    width: 70%;
    align-self: center;
    border-top: 5px solid #E8B718;
    border-bottom: 5px solid rgba(55, 55, 66, 0.6);
    background-color: #ccc7c7;
    box-shadow: 0px 5px 10px gray;
`
const PricesBox = styled.div`
  padding: 0 15px 0 15px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;
const TitleRow = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #afaaa6;
  text-align: center;
  height: 100%;
  &:first-child {
      padding-top: 15px;
  }
  &:last-child {
      padding-bottom: 10px;
      border-bottom: 0;
  }
  div:first-child {
      border-right: 1px solid #afaaa6;
  }
`;
const TitleLabels = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 5px 10px 5px;

    p {
        font-size: 18px;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        span {
            font-weight: bolder;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
        }
    }
`;

const Styles = {
    Wrapper,
    PricesBox,
    TitleRow,
    TitleLabels,
}

export default Styles;