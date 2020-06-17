import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 15px;
  a {
    font-size: 17px;
    color: black;
    text-decoration: underline;
    &:hover {
        color: #90781d;
    }
  }
  ul {
    padding: 20px;
    padding-left: 40px;
    li {
      list-style: circle outside;
    }
  }
`;

const Page404 = () => {
  return (
    <Wrapper>
      <h1>Производитель ЖБИ изделий в Запорожье и области</h1>
      <ul>
        <li>
          <Link to={"/products/sett"}>Тротуарная плитка</Link>
        </li>
        <li>
          <Link to={"/products/fence"}>Еврозабор</Link>
        </li>
        <li>
          <Link to={"/products/brick"}>
            Бетонные блоки, колотый блок и кирпич
          </Link>
        </li>
        <li>
          <Link to={"/products/parapet"}>Крышки и Парапеты</Link>
        </li>
        <li>
          <Link to={"/products/monuments"}>Памятники</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Page404;
