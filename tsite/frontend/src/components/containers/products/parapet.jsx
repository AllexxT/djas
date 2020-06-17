import React from "react";
import ProductsContainer from "./productsContainer";

const Parapet = () => {
  const categories = ["cap", "parapet"];
  const textOfPage = ""
    // "<h1>ЧП Джас – Крышки бетонные (на столб) и парапеты</h1><p>Большой ассортимент:</p><ul><li>Шапки(навершники)  14х14 см гладкие; 39х39 см шагрень; 45х45 см медуза, черепица, чешуя;  49х49 см, 60х60 большие.</li> <li>Парапет:  50х18 см (кладка в пол 0,5 кирпич), 39х27см (кладка в один 1 кирпич), 39х35см (кладка в полтора 1,5 кирпича).</li> </ul> <p>Можно купить со склада или оформить доставку. </p> <p> Производитель бетонных изделий в Запорожье. Гарантия – 10 лет! Сертификаты! Розница, Опт. Работаем с НДС. Низкие цены. </p>";
  return <ProductsContainer page={"parapet"} {...{ categories, textOfPage }} />;
};

export default Parapet;
