import React from "react";
import ProductsContainer from "./productsContainer";

const Monuments = () => {
  const categories = ["granite", "capital", "coverplate", "nameplate"];
  const textOfPage = ""
    // "<h1>ЧП Джас – Установка гранитных памятников</h1> <p>Цветных(крашеных) бетонных памятников, противоусадочных плит (отмосток), железные овалы таблички (металлокерамика), Балки под памятник. Благоустройство могил.</p><p>  Производитель бетонных изделий в Запорожье. Низкие цены. Доставка.  Гарантия – 15 лет!  Большой выбор. </p>";
  return (
    <ProductsContainer page={"monuments"} {...{ categories, textOfPage }} />
  );
};

export default Monuments;
