import React from "react";
import { default as S } from "./expositionStyles";

// import loadable from '@loadable/component'
// const ExpositionItem = loadable(() => import('./expositionItem'))

import ExpositionItem from "./expositionItem";

const titles = {
  sett: "Тротуарная плитка",
  fence: "Еврозабор",
  brick: "Колотый блок и кирпич",
  parapet: "Крышки и парапеты",
  monuments: "Памятники"
};

const ExpositionCategory = ({ data }) => {
  return (
    <S.CategoryWrapper>
      <S.Title>
        <p>{titles[data[0].category]}</p>
      </S.Title>
      <S.GalleryWrapper>
        {data.map((item, index) => (
          <ExpositionItem key={index} places={item} />
        ))}
      </S.GalleryWrapper>
    </S.CategoryWrapper>
  );
};

export default ExpositionCategory;
