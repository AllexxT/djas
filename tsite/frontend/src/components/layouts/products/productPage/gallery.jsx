import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { default as S } from "./galleryStyles";
// import useWindowSize from "../../../getWindowSize";
// import Cat from "../../../cat.jpg";

const Gallery = ({ photos = [], isMonument }) => {
  const [images, setImages] = useState([]);
  // const windowSize = useWindowSize()
  // console.log(windowSize);

  useEffect(() => {
    setImages(
      photos.map(item => {
        return {
          fullscreen: item.photo.full_size,
          original: !isMonument ? item.photo.medium_square_crop : item.photo.full_size,
          thumbnail: item.photo.small_square_crop,
          // description: "Описание изображения"
        };
      })
    );
  }, []);
  return (
    <S.Wrapper isMonument={isMonument}>
      <S.MainFrame>
        {images.length > 0 && (
          <S.MainF__row>
            <ImageGallery
              thumbnailPosition="left"
              // showBullets={true}
              // autoPlay={true}
              showIndex={true}
              showPlayButton={false}
              // disableThumbnailScroll={true}
              // onErrorImageURL={Cat}
              items={images}
            />
          </S.MainF__row>
        )}
      </S.MainFrame>
    </S.Wrapper>
  );
};

Gallery.defaultProps = {
  photos: [
    {
      photo: {}
    }
  ]
};

export default Gallery;
