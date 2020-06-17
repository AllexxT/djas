import styled from 'styled-components'

const Paragraph = '16px';
const Line_height = '1.3';

const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 5pt;
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    font-size: 16px;
    color: #484340;
    margin: 0 30px;
    @media (max-width:469px){
        margin: 0;
    }
  }
  tr, td, th {
    padding: 7px;
  }
  thead {
    tr {
      th:not(:first-child){
        text-align: start;
      }
    }
  }
  tr {
    border-bottom: 1px solid gray;
    td {
      text-align: start;
    }
  }
  th {
    font-size: 18px;
  }
  td {
    text-align: center;
  }
`
const Block = styled.div`
  display: flex;
  flex-flow: column;
  padding-bottom: 20px;
  p {
    font-size: ${Paragraph};
    line-height: ${Line_height};
  }
`;

const Title = styled.h1`
  position: relative;
  margin: 0 0 13px 0;
  /* padding: 0 0 20px; */
  position: relative;
  font-size: 26px;
  font-weight: 900;
  line-height: 100%;
  color: #333;
  text-align: center;
`
const DiscoverPriceRow = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #EBD4A1;
  min-height: 75px;
  align-items: center;
  line-height: 1.3;
  margin: 40px 0 60px 0;

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
      display: flex;
      justify-content: center;
      border: 3px solid #383844;
      border-radius: 5px;
      padding: 0 10px;
      font-weight: bold;
      color: #333333;
      transition: all 0.2s linear;
      span {
          padding: 10px 0 10px 0;
          font-size: 16px;
      }
  }
  a:hover {
      background: #383844;
      span {
        color: #F5CB55;
      }
  }
`;

const Styles = {
  PageWrapper,
  Title,
  Block,
  DiscoverPriceRow,
  DiscoverText,
  DiscoverNumbers,
}

export default Styles;