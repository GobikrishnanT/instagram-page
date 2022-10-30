import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchImages } from '../ajax/getRequest';

const ImageLister = ({ link }) => {
  const [imageStatus, setImageStatus] = useState({
    isLoading: true,
    imageList: [],
  });

  const fetchImageList = async () => {
    const response = await fetchImages(link);
    const newList = response.slice(0, 50);
    if (newList.length > 0) {
      setImageStatus((prev) => {
        return {
          isLoading: false,
          imageList: [...newList],
        };
      });
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  if (imageStatus.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {imageStatus.imageList.map((eachImage, index) => {
        return (
          <div key={eachImage.id} className="image-container">
            <LazyLoadImage
              key={eachImage.id}
              alt={eachImage.title}
              className="image-styler"
              src={eachImage.url}
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageLister;
