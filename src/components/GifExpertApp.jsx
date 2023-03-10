import { useState } from "react";
import { GifGrid, GifItem } from "./index";
import { AddCategory } from "./AddCategory";

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
            <AddCategory onNewCategory={(event) => onAddCategory(event)} />
            {/* LISTADO DE GIFS */}
            {categories.map((category, index) => {
                return <GifGrid category={category} key={index} />;
            })}
            {/*GIF ITEM*/}
        </>
    );
};
