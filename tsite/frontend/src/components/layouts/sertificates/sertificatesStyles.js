import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 5pt;
`

const PageTitle = styled.div`
  position: relative;
  margin: 10px 0 20px 0;
  padding: 0 0 20px;
  position: relative;
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;
  color: #333;

  &:before {
    content: "";
    position: absolute;
    width: 75px;
    height: 10px;
    display: block;
    bottom: 0;
    left: 0;
    background-color: #f3cb55;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
`;
const SertificatConteiner = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
  flex-wrap: wrap;
  margin: 15px;
  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;
    color: #0000FF;
    transition: all 0.1s linear;
    &:hover {
      color: #e8b718;
    }
  }
`;

const Styles = {
  PageWrapper,
  PageTitle,
  Content,
  SertificatConteiner
}

export default Styles;