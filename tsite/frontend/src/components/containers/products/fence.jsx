import React from "react";
import ProductsContainer from "./productsContainer";

const Fence = () => {
  const categories = ["glossy", "ordinary", "columns"];
  const textOfPage = ""
    // "<h1>ЧП Джас – Производитель еврозабора в Запорожье.</h1><p>Большой ассортимент бетонных плит, столбов наборных.</p><p>Установка. Доставка. Покраска. </p> <p>Гарантия – 15 лет! Низкие цены! Сертификаты! Купить можно в розницу, Оптом, работаем с НДС. Купить можно со склада.<p/>";
  return <ProductsContainer page={"fence"} {...{ categories, textOfPage }} />;
};

export default Fence;
