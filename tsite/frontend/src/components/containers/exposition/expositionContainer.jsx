import React from "react";
import { useEffect } from "react";
import { getExposition } from "../../../actions/exposition";
import { useDispatch, useSelector } from "react-redux";
import ExpositionPage from "../../layouts/exposition/expositionPage";

// ###################################
const Preloader = () => {
  return <div>ЗАГРУЗКА...</div>;
};

const NotFound = () => {
  return <div>404:PAGE NOT FOUND</div>;
};
// ###################################

const ExpositionContainer = () => {
  const dispatch = useDispatch();
  const expositionState = useSelector(state => state.expositionReducer);

  const preloaderOr404 =
    expositionState.fetching == 404 ? <NotFound /> : <Preloader />;

  useEffect(() => {
    dispatch(getExposition());
  }, []);
  ///////////////////////////////////////////
  //////////// This block transforms api response to
  //////////// array of category arrays for mapping each gallery
  //////////// in their category
  const data = expositionState.exposition;
  let categoryArray = [];
  let expositionArray = [];

  data.forEach(item => {
    const category = item.category;
    !categoryArray.includes(category) && categoryArray.push(category);
  });

  categoryArray.forEach(categ => {
    let catSubArray = [];
    data.forEach(item => {
      const category = item.category;
      categ == category && catSubArray.push(item);
    });
    expositionArray.push(catSubArray);
  });
  ///////////////////////////////////////////

  return expositionState.fetching ? (
    preloaderOr404
  ) : (
    <ExpositionPage {...{ expositionArray }} />
  );
};

export default ExpositionContainer;
