export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} key={id} />
      <p key={Math.floor(Math.random() * 100)}>{title}</p>
    </div>
  );
};
//
// Path: src/components/GifGrid.jsx
// Compare this snippet from src/components/GifGrid.jsx:
// import { useState, useEffect } from "react";
// import { GifItem } from "./GifItem";
// import { useFetchGifs } from "../hooks/useFetchGifs";
// export const GifGrid = ({ category }) => {
//   const { images, isLoading } = useFetchGifs(category);
//   return (
//     <>
//       <h3>{category}</h3>
//       {isLoading && <h2>Loading...</h2>}
//       <div className="card-grid">
//         {images.map((image, index) => {
//           return <GifItem key={index} {...image} />;
//         })}
//       </div>
//     </>
//   );
// };
//
