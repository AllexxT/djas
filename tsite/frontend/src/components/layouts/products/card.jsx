import React, { useState } from "react";
import { ellipsis } from "react-multiline-ellipsis";
import S from "./cardStyles";

import stock from "./discount.png";
import placeholder from "./placeholder.jpeg";
import sertificated from "./ser.png";
import { Link } from "react-router-dom";

class MyTextBox extends React.Component {
  render() {
    return (
      <Link to={`/products/${this.props.article.page.page}/${this.props.id}`}>
        {this.props.text}
      </Link>
    );
  }
}

const MyTxtBox = ellipsis(MyTextBox, 2, "");

export const Card = ({ card }) => {
  const [expand, setExpand] = useState(false); // local state of expandable {name} block
  const { name, discount, sertificate, photos, prices, article, id } = card;

  // render calculated lower price
  const lowerPrice =
    prices.length > 0 &&
    Math.min(
      ...prices.map((price) => price.lowerPrice).filter((lp) => lp != null)
    );

  const isPriceAvailable = () => {
    if (prices.length == 1 && prices[0].lowerPrice != null) {
      return `${prices[0].lowerPrice} грн.`;
    } else if (card.lowerPriceNoTable != null) {
      return `от ${card.lowerPriceNoTable} грн.`;
    } else {
      return lowerPrice != Infinity && lowerPrice
        ? `от ${lowerPrice} грн.`
        : "нет информации";
    }
  };
  const availablePhoto = photos.length
    ? photos[0].photo.medium_square_crop
    : placeholder;
  const availableMonumentPhoto = photos.length
    ? photos[0].photo.full_size
    : placeholder;

  const oldPriceProduct = (prices.length > 0 && prices[0].oldPrice) || ""; // search old price by flag 'oldPrice == true' in api responce

  const nameExpand = expand ? ( // nameExpand render full {name} text if expand == true
    <Link to={`/products/${article.page.page}/${id}`}>{name}</Link>
  ) : (
    <MyTxtBox article={article} id={id} text={name}></MyTxtBox>
  );
  const isMonument =
    card.article.page.page == "monuments" &&
    card.article.article != "coverplate" &&
    card.article.article != "nameplate"
  return (
    <S.C_Wrapper>
      <S.C_Content>
        {(!isMonument && (
          <S.C_ImageBlock monument={isMonument}>
            <Link to={`/products/${article.page.page}/${id}`}>
              {/* Product image */}
              <S.C_Image
                src={isMonument ? availableMonumentPhoto : availablePhoto}
                alt={name}
                title={`купить ${name} в Запорожье`}
              />
              {/* Sertificate image */}
              {sertificate && (
                <S.C_SertifImg
                  src={sertificated}
                  alt="Сертифицированный товар"
                />
              )}
            </Link>
            {/* Discount image */}
            {discount && <S.C_StockImg src={stock} alt="Скидка" />}
          </S.C_ImageBlock>
        )) || (
          <S.C_ImageBlockMonument monument={isMonument}>
            <Link to={`/products/${article.page.page}/${id}`}>
              {/* Product image */}
              <S.C_Image
                src={isMonument ? availableMonumentPhoto : availablePhoto}
                alt={name}
                title={`купить ${name} в Запорожье`}
              />
              {/* Sertificate image */}
              {sertificate && (
                <S.C_SertifImg
                  src={sertificated}
                  alt="Сертифицированный товар"
                />
              )}
            </Link>
            {/* Discount image */}
            {discount && <S.C_StockImg src={stock} alt="Скидка" />}
          </S.C_ImageBlockMonument>
        )}

        <S.C_LinkHolder>
          <S.C_ExpandableName
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
          >
            {nameExpand}
          </S.C_ExpandableName>
        </S.C_LinkHolder>
        <S.C_OldPrice oldPrice={oldPriceProduct}>
          {oldPriceProduct} грн.
        </S.C_OldPrice>
        <S.C_Price>
          {isPriceAvailable()}
          {article.unit && prices.length > 0 && `/${article.unit}`}
        </S.C_Price>
        <S.C_Button>
          <Link to={`/products/${article.page.page}/${id}`}>Подробнее</Link>
        </S.C_Button>
      </S.C_Content>
    </S.C_Wrapper>
  );
};

Card.defaultProps = {
  card: {
    name: "name",
    discount: false,
    sertificate: false,
    photos: [],
    prices: [{ lowerPrice: null }],
    id: "",
  },
};

export default Card;
