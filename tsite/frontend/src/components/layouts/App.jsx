import React from "react";
import { default as S } from "./appStyles";
import GlobalStyle from "../globalStyle";
import Menu from "./navigation/navigation";
import Breadcrumbs from "../breadcrumbs";
import BurgerMenu from "./navigation/burgerMenu/burgerMenu";

import addressLogo from "./address.png";
import phone from "./phone2.png";
import viber from "./v.png";

import Footer from "./footer/footer";
import Alerts from "./Alerts";

const Logo = ({ children }) => {
  return <S.CompanyTitle href="/">{children}</S.CompanyTitle>;
};

const App = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Company>
        <S.HeaderContainer>
          <S.CompanyRow>
            <BurgerMenu />
            <Alerts />
            <S.CompanyLogo>
              <Logo>
                ЧП <span>Джас</span>
              </Logo>
            </S.CompanyLogo>
            <S.CompanyAddress>
              <S.CompanyAddressImg>
                <img src={addressLogo} alt="address" />
              </S.CompanyAddressImg>
              <S.CompanyAddressTitle>
                <p>г. Запорожье, пос. Кременно 40</p>
                <p>Мокрянский карьер № 2 </p>
              </S.CompanyAddressTitle>
            </S.CompanyAddress>
            <S.CompanyContacts>
              <S.CompanyContactsImg>
                <img src={phone} alt="contacts" />
              </S.CompanyContactsImg>
              <S.CompanyContactsUl>
                <li>
                  <a href="tel:+380638086001"><span>+38 (063) 808-60-01</span></a>
                </li>
                <li>
                  <a href="tel:+380675273100"><span>+38 (067) 527-31-00</span></a>
                </li>
              </S.CompanyContactsUl>
              <S.ViberLogo>
                <img src={viber} alt="viber"/>
              </S.ViberLogo>
            </S.CompanyContacts>
          </S.CompanyRow>
        </S.HeaderContainer>
      </S.Company>
      <S.Content>
        <S.ContentContainer>
          <Breadcrumbs /> {/* component */}
          <S.ContentRow>
            <S.ContentAside>
              <Menu /> {/* component */}
            </S.ContentAside>
            <S.ContentMain>{children}</S.ContentMain>
          </S.ContentRow>
        </S.ContentContainer>
      </S.Content>
      <S.Footer>
        <S.FooterContainer>
          <Footer />
        </S.FooterContainer>
      </S.Footer>
      <GlobalStyle /> {/* Styles */}
    </S.Wrapper>
  );
};

export default App;
