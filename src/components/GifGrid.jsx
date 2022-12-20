import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages(), [];
  });

  return (
    <>
      <h3>{category}</h3>
      <div>
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.url}
              alt={image.title}
              width="200px"
              height="200px"
            />
          );
        })}
      </div>
    </>
  );
};
