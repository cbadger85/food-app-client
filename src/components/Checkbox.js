import React, { useState } from 'react';

const Checkbox = ({ ingredient, addIngredient, intialCheck }) => {
  const [isChecked, setIsChecked] = useState(!!intialCheck);

  const handleOnCheck = () => {
    setIsChecked(!isChecked);
    addIngredient(isChecked, ingredient);
  };

  return (
    <label key={ingredient.id}>
      <input
        type="checkbox"
        name={ingredient.ingredientName}
        checked={isChecked}
        onChange={handleOnCheck}
      />
      {ingredient.ingredientName}
    </label>
  );
};

export default Checkbox;
