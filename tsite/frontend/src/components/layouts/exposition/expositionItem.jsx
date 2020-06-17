import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { default as S } from "./expositionStyles";

const ExpositionItem = ({ places }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(
      places.photos.map(item => {
        return {
          fullscreen: item.photo.full_size,
          original: item.photo.medium_square_crop,
          thumbnail: item.photo.small_square_crop,
          description: item.description
        };
      })
    );
  }, [places]);

  return (
    <S.ItemWrapper>
      {images.length > 0 && (
        <ImageGallery
          // thumbnailPosition="left"
          // autoPlay={true}
          // disableThumbnailScroll={true}
          lazyLoad={true}
          showThumbnails={false}
          showBullets={true}
          showIndex={true}
          showPlayButton={false}
          items={images}
        />
      )}
      <S.ItemDescription><p>{places.address}</p></S.ItemDescription>
    </S.ItemWrapper>
  );
};

export default ExpositionItem;
