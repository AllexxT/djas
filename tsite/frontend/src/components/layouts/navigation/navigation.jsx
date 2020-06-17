import React from "react";
import ProductsSubmenu from "./productsSubmenu";
import { default as S } from "./navigationStyles";
import Styled_Link from "./styledLinks";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../actions/auth";

const Menu = () => {
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = authState;
  return (
    <S.Nav>
      <ul>
        <Styled_Link to="/news" label="НОВОСТИ" />
        <Styled_Link active={true} to="/" label="ТОВАРЫ" />
        <li>
          <ProductsSubmenu />
        </li>
        <Styled_Link to="/services" label="НАШИ УСЛУГИ" />
        <Styled_Link to="/sertificates" label="СЕРТИФИКАТЫ" />
        <Styled_Link to="/exposition" label="НАШИ РАБОТЫ" />
        {(isAuthenticated && <a href="" onClick={e=>{
          e.preventDefault()
          dispatch(logout())
        }}>Выход</a>) 
        // || (
        //   <>
        //     <Styled_Link to="/register" label="Регистрация" />
        //     <Styled_Link to="/login" label="Вход" />
        //   </>
        // )
        }
      </ul>
    </S.Nav>
  );
};

// If / else css styling
//
// const SomeComponent = styled.div`
//     ${props => props.on ?
//         css`background-color: green;` :
//         css`bacvkground-image: url(/off.png);`
//     }
// `
export default Menu;
