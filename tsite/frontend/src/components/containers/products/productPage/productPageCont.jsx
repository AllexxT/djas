import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../../actions/product";
// import ProductPage from "../../../layouts/products/productPage/productPage";
import DescriptionContainer from "./descriptionCont";

const Preloader = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      LOADING...
    </div>
  );
};

const NotFound = () => {
  return <div>404:PAGE NOT FOUND</div>;
};

const ProductPageCont = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productReducer);

  const preloaderOr404 =
    productState.fetching == 404 ? <NotFound /> : <Preloader />;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  return productState.fetching ? (
    preloaderOr404
  ) : (
    <DescriptionContainer product={productState.product} />
  );
};
export default ProductPageCont;
