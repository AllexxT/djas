import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 10pt;
`
const Title = styled.div`
  h1 {
    line-height: 1.3;
    margin: 10px 0 10px 0;
    padding: 0 0 20px;
    font-size: 25px;
    font-weight: 900;
  }
`;
const Description = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;
const PhotoRow = styled.div`
  display: flex;
  @media (max-width:500px){
    flex-flow: column;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 33%;
  margin: 0 15px 15px 15px;
`;
const PhotoBox = styled.div`
  width: 100%;
  transition: all 0.2s linear;
  margin-bottom: auto;
  &:hover {
    box-shadow: 0px 5px 10px gray;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const BoxLabel = styled.div`
  padding-top: 10px;
  h4 {
    font-size: 18px;
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  }
  p {
    font-size: 16px;
    text-align: center;
  }
`;
const DiscoverPriceRow = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #EBD4A1;
  min-height: 75px;
  align-items: center;
  line-height: 1.3;
  margin-top: 20px;

  @media (max-width:577px){
    flex-flow: column;
    padding: 10px;
  }
`;
const DiscoverText = styled.p`
  text-align: center;
  span {
    font-size: 25px;
    font-weight: bold;
    color: #373333;
  }
`;
const DiscoverNumbers = styled.p`
  @media (max-width:755px){
    display: flex;
    flex-flow: column;
  }
  a {
    font-size: 18px;
    color: #446084;
    font-weight: bolder;
    margin-left: 10px;
  }
`;
const DownLink = styled.div`
  text-align: center;
  margin: 45px 0 60px 0;
  a {
    font-size: 16px;
    color: #334862;
    text-decoration: underline;
    line-height: 1.6;
    &:hover {
      color: #AD9347;
    }
  }
`;
const Styles = {
  PageWrapper,
  Title,
  Description,
  PhotoRow,
  Box,
  PhotoBox,
  BoxLabel,
  DiscoverPriceRow,
  DiscoverText,
  DiscoverNumbers,
  DownLink
}

export default Styles;