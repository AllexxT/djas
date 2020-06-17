import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/products";
import Products from "../../layouts/products/products";
import { Switch, Route, useRouteMatch, useLocation } from "react-router";

import loadable from '@loadable/component'
const ProductPage = loadable(() => import("./productPage/productPageCont"))
// import ProductPage from "./productPage/productPageCont";

import prodPlaceHolder from "./no_product.gif";
import ProductsDescrCont from "./productsDescriptCont";
import AnchMenu from "../../layouts/navigation/anchorMenu/anchMenu";

const Preloader = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          fontSize: "40px",
          textAlign: "center",
          margin: "40px 0 0 0",
          color: "#525252",
        }}
      >
        ЗАГРУЗКА ...
      </div>
    </div>
  );
};

const NoData = () => {
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    const pause = setTimeout(() => {
      setTimer(true);
    }, 200);
    return () => {
      clearTimeout(pause);
    };
  }, [timer]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {timer && (
        <img
          src={prodPlaceHolder}
          style={{ maxWidth: "100%" }}
          alt="no data available"
        />
      )}
    </div>
  );
};

const ProductsContainer = ({ page, categories, textOfPage }) => {
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getProducts(page));
  }, [products.length]);

  ////////////////////////////////////////////////////////////////
  //////////// This block transforms api response to
  //////////// array of category arrays for mapping each product
  //////////// in their category
  const data = products.products;
  let articlesArray = [];
  let productsArray = [];

  data.forEach((product) => {
    const art = product.article.article;
    !articlesArray.includes(art) && articlesArray.push(art);
  });

  articlesArray.forEach((article) => {
    let prodSubArray = [];
    data.forEach((product) => {
      const art = product.article.article;
      article == art && prodSubArray.push(product);
    });
    productsArray.push(prodSubArray);
  });

  ///////////////////////////////////////////////////////////////////
  // Filtering queue of categories from each page
  // const categories = ["vibropressed", "vibrocast", "borders", "gully"];
  let filteredProdArr = [];
  categories.forEach((curCat) => {
    productsArray.forEach((curAr) => {
      curAr[0].article.article == curCat && filteredProdArr.push(curAr);
    });
  });
  return (
    <>
      {location.pathname.split("/").length <= 3 && (
        <AnchMenu items={filteredProdArr} />
      )}
      <Switch>
        <Route path={`${match.path}/:productId`} component={ProductPage} />
        <Route path={match.path}>
          {products.fetching ? (
            <Preloader />
          ) : (
            (products.products.length > 0 &&
              filteredProdArr.map((product, index) => (
                <Products key={index} data={{ products: product }} />
              ))) || <NoData />
          )}
          <ProductsDescrCont />
        </Route>
      </Switch>
    </>
  );
};

export default ProductsContainer;
