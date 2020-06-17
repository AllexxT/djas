import React from "react";
import { default as S } from "./tableStyles";

const PriceTable = ({ prices }) => {
  const table = prices.length != 0 && prices[0].depthPrice.length > 0 && (
  // const table = (
    <table>
      <caption>Стоимость</caption>
      <thead>
        <tr>
          <th>Цвет</th>
          {prices[0].depthPrice.map((depth, index) => (
            <th key={index}>{depth.depth.size}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {prices.map((price, index) => (
          <tr key={index}>
            <td key={price.id}>{price.color}</td>
            {price.depthPrice.map((prs, index) => (
              <td key={index}>{prs.price}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <S.Wrapper>
      <S.Press />
      <S.Content__row>{table}</S.Content__row>
    </S.Wrapper>
  );
};

PriceTable.defaultProps = {
  sizes: "sizes",
  prices: [
    {
      depthPrice: [],
    },
  ],
};

export default PriceTable;
