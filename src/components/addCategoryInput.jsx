import { useState } from "react";
export const AddCategoryInput = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCategories((categories) => [
      ...categories.slice(0, categories.length - 1),
    ]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />{" "}
      <button onClick={onSubmit}>Agregar</button>
    </form>
  );
};
