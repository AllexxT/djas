import React from "react";
import NewsItemStyle from "./newsItemStyles";
import { Card } from "../products/card";

const NewsItem = ({ newsItem }) => {
  const { id, title, body, product, created, changed } = newsItem;
  // document.breadcrumb = 'Новости'
  return (
    <NewsItemStyle.Container>
      <NewsItemStyle.Container__row>
        <NewsItemStyle.Card>
          <Card card={product} />
        </NewsItemStyle.Card>
        <NewsItemStyle.News>
          <NewsItemStyle.News__title>{title}</NewsItemStyle.News__title>
          <NewsItemStyle.News__time>{created}</NewsItemStyle.News__time>
          <NewsItemStyle.News__body>{body}</NewsItemStyle.News__body>
        </NewsItemStyle.News>
      </NewsItemStyle.Container__row>
    </NewsItemStyle.Container>
  );
};

NewsItem.defaultProps = {
  product: {
    name: "test",
    discount: true,
    sertificate: true,
    photos: [],
    prices: [],
    id: "test"
  }
};

export default NewsItem;
