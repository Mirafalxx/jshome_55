import React, { useState } from "react";
import "./App.css";
import Ingredients from "./Components/Ingredients/Ingredients";
import TotalPrice from "./Components/TotalPrice/TotalPrice";

const INGREDIENTS = [
  { name: "Meat", price: 50 },
  { name: "Cheese", price: 20 },
  { name: "Salad", price: 5 },
  { name: "Bacon", price: 30 },
];
const App = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
  ]);

  const totalSpend = () => {
    return ingredients.reduce((acc, ing) => {
      if (ing.name.indexOf("Meat") !== -1) {
        return acc + ing.count * 50;
      } else if (ing.name.indexOf("Cheese") !== -1) {
        return acc + ing.count * 20;
      } else if (ing.name.indexOf("Bacon") !== -1) {
        return acc + ing.count * 30;
      } else if (ing.name.indexOf("Salad") !== -1) {
        return acc + ing.count * 5;
      } else if (ing.name.indexOf("Burger") !== -1) {
        return acc + ing.count * 20;
      }
      return acc;
    }, 20);
  };
  const counter = (index) => {
    const copyArr = [...ingredients];
    copyArr[index].count++;
    setIngredients(copyArr);
  };

  const removeIngredients = (index) => {
    const copyIngredients = [...ingredients];
    if (copyIngredients[index].count !== 0) copyIngredients[index].count--;
    setIngredients(copyIngredients);
  };

  return (
    <div className="App">
      <div className="ingredientsForm">
        {ingredients.map((elem, index) => {
          return (
            <Ingredients
              key={index}
              name={elem.name}
              count={elem.count}
              addIngredient={() => counter(index)}
              removeIngredients={() => removeIngredients(index)}
            />
          );
        })}
      </div>
      <div>Total Spent: {totalSpend()}</div>
    </div>
  );
};

export default App;
