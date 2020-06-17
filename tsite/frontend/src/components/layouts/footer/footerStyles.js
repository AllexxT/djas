import styled from 'styled-components'

const FooterRow = styled.div`
  display: flex;
  min-height: 90px;
  /* justify-content: space-around; */
  align-items: flex-start;
  margin: 35pt 0 0 0;
  a:hover {
    color: #F8CA59;
  }
  @media (max-width: 800px){
      flex-flow: column-reverse;
    }
`;
const FooterMap = styled.div`
    position: relative;
    flex: 0 0 60%;
    height: 300px;
    iframe {
        width: 100%;
        height: 100%;
    }
    /* img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    } */
    @media (max-width: 800px){
        width: 100%;
    }
`;
// const FooterMap = styled.div`
//     flex: 0 0 60%;
//     /* height: 300px; */
//     & > div {position: relative;
//     flex: 0 0 60%;
//     height: 300px;
//     iframe {
//         width: 100%;
//         height: 100%;
//     }
//     /* img {
//         object-fit: cover;
//         width: 100%;
//         height: 100%;
//     } */
// }
//     @media (max-width: 520px){
//         width: 100%;
//     }
// `;

const FooterTextRow = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    width: 100%;
    justify-content: space-around;
    
    @media (max-width: 340px) {
      flex-flow: column;
      margin-left: 15px;
    }
`
const FooterMenu = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 0 15pt 0;
  nav {
    display: flex;
    flex-flow: column;
  }
  a {
    color: white;
    font-size: 12.5pt;
    letter-spacing: 0.3px;
    line-height: 20pt;
    &:after {
      content: " »";
    }
  }
`;
const FooterText = styled.address`
  color: whitesmoke;
  font-size: 12.5pt;
  letter-spacing: 0.3px;
  a {
    color: whitesmoke;
    text-decoration: underline;
  }

  @media (min-width: 550px) and (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex: 0 1 66%;
  }
  /* @media (max-width: 383px) {
    width: 100%;
    padding-left: 15px;
  } */
`;
const FooterTitle = styled.p`
  font-size: 16pt;
  font-weight: bold;
  padding: 0 0 2pt 0;
  color: #F8CA59;
`;
const ContactsText = styled.div`
    display: flex;
    flex-flow: column;
    line-height: 20pt;
    margin: 0 0 15pt 3pt;
`;
const Copyright = styled.small`
    color: #ccc;
    display: flex;
    align-self: center;
    padding: 12px 0 15px 0;
    font-size: 10pt;
`;

const Styles = {
    FooterRow,
    FooterMap,
    FooterMenu,
    FooterTextRow,
    FooterText,
    FooterTitle,
    // AddressText,
    ContactsText,
    Copyright,
}

export default Styles;