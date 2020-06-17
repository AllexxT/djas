import React from "react";
import ProductsContainer from "./productsContainer";

const Sett = () => {
  const categories = ["vibropressed", "vibrocast", "borders", "gully"];
  const textOfPage = ""
    // "<h1>ЧП Джас – Производитель тротуарной плитки в Запорожье.</h1><ul><li>Старый город;</li><li>Кирпичик дорожный;</li><li>Ромб;</li><li>Эко;</li>  <li>Песчаник;</li><li>Паркет;</li> <li>Катушка;</li> <li>Квадрат 20х20/10х10;</li> <li>Венеция;</li> <li>Римский камень;</li>  <li>Бордюр(1000х200х80);</li> <li>поребрик тротуарный;</li> <li>отливливневка (малый и глубокий);</li> <li>полусфера (Антипарковочная);</li> </ul><p>Большой ассортимент (обычная, элитная).</p><p>Гарантия – 10 лет! Сертификаты! Розница, опт. Работаем с НДС. Низкие цены, Купить можно со склада или заказать доставку, укладку!  </p>";
  return <ProductsContainer page={"sett"} {...{ categories, textOfPage }} />;
};

export default Sett;
