import { useState } from "react";
import { AddCategoryInput } from "./addCategoryInput";
import { GifGrid } from "./GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {" "}
      {/* TITULO */}
      <h2>GifExpertApp</h2>
      {/* INPUT */}
      {/*<AddCategoryInput setCategories={setCategories}> </AddCategoryInput>*/}
      <AddCategoryInput onNewCategory={(event) => onAddCategory(event)} />
      {/* LISTADO DE GIFS */}
      {categories.map((category) => {
        return <GifGrid category={category} key={category} />;
      })}
      {/*GIF ITEM*/}
    </>
  );
};
