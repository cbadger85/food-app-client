import React, { useState } from 'react';
import Checkbox from './Checkbox';

const IngredientsForm = ({ ingredients, addToOrder }) => {
  const [breadInput, setBreadInput] = useState('');
  const [order, setOrder] = useState([]);

  const breadList = ingredients.filter(
    ingredient => ingredient.category === 'BREAD'
  );

  const cheeseList = ingredients.filter(
    ingredient => ingredient.category === 'CHEESE'
  );

  const meatList = ingredients.filter(
    ingredient => ingredient.category === 'MEAT'
  );

  const veggiesList = ingredients.filter(
    ingredient => ingredient.category === 'VEGGIES'
  );

  const condimentsList = ingredients.filter(
    ingredient => ingredient.category === 'CONDIMENTS'
  );

  const handleBreadSelect = (e, bread) => {
    const alreadyOrderedBread = order.find(
      prevOrder => prevOrder.ingredientName === breadInput
    );

    if (alreadyOrderedBread) {
      const { ingredientName: previousBread } = alreadyOrderedBread;
      const updatedOrder = order.map(prevOrder => {
        if (prevOrder.ingredientName === previousBread) {
          return bread;
        }

        return prevOrder;
      });
      setBreadInput(e.target.value);
      setOrder(updatedOrder);
      return;
    }

    setBreadInput(e.target.value);
    setOrder([...order, bread]);
  };

  const handleAddIngredient = (isOnOrder, ingredient) => {
    if (isOnOrder) {
      const updatedOrder = order.filter(
        prevOrder => prevOrder.id !== ingredient.id
      );
      setOrder(updatedOrder);
      return;
    }

    setOrder([...order, ingredient]);
  };

  return (
    <div>
      <div>
        Bread
        {breadList.map(ingredient => (
          <label key={ingredient.id}>
            <input
              type="radio"
              value={ingredient.ingredientName}
              checked={breadInput === ingredient.ingredientName}
              onChange={e => handleBreadSelect(e, ingredient)}
            />
            {ingredient.ingredientName}
          </label>
        ))}
      </div>
      <div>
        Cheese
        {cheeseList.map(ingredient => (
          <Checkbox
            ingredient={ingredient}
            key={ingredient.id}
            addIngredient={handleAddIngredient}
            initialCheck={order.find(
              orderedIngredient => orderedIngredient.id === ingredient.id
            )}
          />
        ))}
      </div>
      <div>
        Meat
        {meatList.map(ingredient => (
          <Checkbox
            ingredient={ingredient}
            key={ingredient.id}
            addIngredient={handleAddIngredient}
          />
        ))}
      </div>
      <div>
        Veggies
        {veggiesList.map(ingredient => (
          <Checkbox
            ingredient={ingredient}
            key={ingredient.id}
            addIngredient={handleAddIngredient}
          />
        ))}
      </div>
      <div>
        Condiments
        {condimentsList.map(ingredient => (
          <Checkbox
            ingredient={ingredient}
            key={ingredient.id}
            addIngredient={handleAddIngredient}
          />
        ))}
      </div>
      <button type="button" onClick={() => addToOrder(order)}>
        Add to Order
      </button>
    </div>
  );
};

export default IngredientsForm;
