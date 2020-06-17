import React, { useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";
import ProductsDescrCont from "../../containers/products/productsDescriptCont";

const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 5pt;
`;
const N_Box = styled.div`
  display: flex;
  /* z-index:-50; */
  flex-wrap: wrap;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
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

const News = ({ news }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <PageWrapper>
        <PageTitle>
          <h1>Новости и новинки</h1>
        </PageTitle>
        <N_Box>
          {(news.news.length > 0 &&
            news.news.map((newsData) => (
              <NewsItem key={newsData.id} newsItem={newsData} />
            ))) || (
            <p style={{ color: "darkgoldenrod", fontSize: "16px" }}>
              Нет новостей
            </p>
          )}
        </N_Box>
      </PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default News;
