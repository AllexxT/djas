import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 5pt;
`
const ContentRow = styled.div`
  /* display: flex; */
  @media (max-width:600px){
    display: flex;
    flex-flow: column;
  }
`;
const Icon = styled.div`
  display: flex;
  flex: 1 0 200px;
  align-items: baseline;
  overflow: hidden;
  @media (max-width:600px){
    width: fit-content;
    align-self: center;
    margin-bottom: 15px;
  }
  @media (min-width:601px){
    float: left;
    img {
      padding-right: 15px;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
    transform: scale(1.025);
  }
`;
const Description = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;
const DiscoverPriceRow = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #EBD4A1;
  min-height: 75px;
  align-items: center;
  line-height: 1.3;
  margin: 20px 0 45px 0;

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

const Styles = {
  PageWrapper,
  ContentRow,
  Icon,
  Description,
  DiscoverPriceRow,
  DiscoverText,
  DiscoverNumbers,
}

export default Styles;