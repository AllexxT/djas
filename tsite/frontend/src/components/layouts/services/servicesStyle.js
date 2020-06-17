import styled from 'styled-components'

const PageWrapper = styled.div `
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 5pt;
`
const PageTitle = styled.div `
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
const Content = styled.div `
  display: flex;
  flex-wrap: wrap;
  /* align-items: flex-end; */
  @media (max-width:800px){
        justify-content: center;
    }
`;
const Item = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 1 25%;
  padding: 0 15px 15px 15px;
  @media (max-width:800px){
    flex: 0 0 50%;
    padding: 0 7px 7px 7px;
  }
  @media (max-width:450px){
    flex: 1 1 40%;
    padding: 0 7px 7px 7px;
  }
`;
const ImageBlock = styled.div `
  text-align: center;
  a {
      display: inline-block;
      /* height: 100%;
      width: 100%; */
      max-height: 190px;
      overflow: hidden;
      img {
          height: 100%;
          width: 100%;
          object-fit: contain;
      }
  }
`;
const ButtonBlock = styled.div `
  display: flex;
  justify-content: center;
  margin: 15px auto 20px auto;
  a {
      display: flex;
      justify-content: center;
      border: 2px solid #383844;
      padding: 0 10px;
      font-weight: bold;
      color: #333333;
      transition: all 0.2s linear;
      span {
          padding: 10px 0 10px 0;
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
    PageTitle,
    Content,
    Item,
    ImageBlock,
    ButtonBlock,
}

export default Styles;