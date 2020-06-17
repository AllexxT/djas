import React from "react";
import ProductsContainer from "./productsContainer";

const Brick = () => {
  const categories = ["facblock", "baseblock", "buildblock", "facbrick"];
  const textOfPage = ""
    // "<h1>ЧП Джас –  Блок и кирпич</h1> <p>В наличии большой ассортимент: Фундаментный блок, облицовочный блок (декоративный) и кирпич, шлакоблок(строительный), стобы для колон забора.</p> <p>Производитель бетонных изделий в Запорожье. Гарантия – 10 лет! Сертификаты! Розница, Опт. Работаем с НДС. Низкие цены, Купить можно со склада или заказать доставку.</p>";
  return <ProductsContainer page={"brick"} {...{ categories, textOfPage }} />;
};

export default Brick;
