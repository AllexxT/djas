import styled from "styled-components";

// All
const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  max-width: 1210px;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  max-width: 1310px;
  margin: 0 auto;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 1310px;
  margin: 0 auto;
`;

// Header

const Company = styled.div`
  background-color: rgba(56, 56, 68, 0.9);
  box-shadow: 0px 5px 10px gray;
`;
const CompanyRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3px 0 0 0;
  flex-wrap: wrap;
  @media (max-width: 460px) {
    flex-flow: column;
    align-items: center;
  }
`;
const CompanyLogo = styled.div`
  position: relative;
  top: 5pt;
  padding-left: 35pt;
  @media (max-width: 460px) {
    padding: 0 0 10px 0;
  }
`;
const CompanyTitle = styled.a`
  font-weight: bold;
  font-size: 28pt;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: whitesmoke;
  & span {
    color: #f5cb55;
  }
`;
const CompanyAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
  @media (max-width: 688px) {
    order: 1;
  }
`;
const CompanyAddressImg = styled.div`
  & img {
    max-width: 25pt;
  }
`;
const CompanyAddressTitle = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.3em;
  color: #efede3;
  text-align: center;
`;
const CompanyContacts = styled.div`
  display: flex;
`;
const CompanyContactsImg = styled.div`
  align-self: center;
  margin: 0 0 0 0;
  & img {
    width: 45pt;
  }
`;
const CompanyContactsUl = styled.ul`
  align-self: center;
  display: flex;
  flex-flow: column;
  height: 73%;
  justify-content: space-around;
  li {
    height: 100%;
  }
  a {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    font-size: 11.5pt;
    height: 100%;
    display: flex;
  }
  & li:first-child a {
    align-items: center;
  }
  & li:last-child a {
    padding-top: 3px;
  }
`;
const ViberLogo = styled.div`
  width: 50px;
  height: 34px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
// Content
const Content = styled.div`
  flex: 1 1 75vh; /* 100vh alternative for fix android chrome bug */
`;
const ContentRow = styled.div`
  display: flex;
`;
const ContentAside = styled.aside`
  padding:15px 0 0 0;
  flex-basis: 540px;
  max-width: 150px;
  @media (max-width:900px){
    display: none;
  }
`;
const ContentMain = styled.main`
  flex-grow: 1;
  margin-top: 15px;
  max-width: 1420px;  /* Должно помочь с сжиманием меню контентной частью страницы fence*/
`;
// Footer
const Footer = styled.footer`
  background-color: rgba(56, 56, 68, 1);
  box-shadow: 0px -5px 10px gray;
  margin-top: 25px;
`;


const Styles = {
  Wrapper,
  HeaderContainer,
  ContentContainer,
  Company,
  CompanyRow,
  CompanyLogo,
  CompanyTitle,
  CompanyAddress,
  CompanyAddressImg,
  CompanyAddressTitle,
  CompanyContacts,
  CompanyContactsImg,
  CompanyContactsUl,
  ViberLogo,
  Content,
  ContentRow,
  ContentAside,
  ContentMain,
  Footer,
  FooterContainer,
}

export default Styles;