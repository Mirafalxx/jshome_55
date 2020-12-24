import React, { useState } from "react";
import "./App.css";

const INGREDIENTS = [
  { name: "Meat", price: 50 },
  { name: "Cheese", price: 20 },
  { name: "Salad", price: 5 },
  { name: "Bacon", price: 30 },
];
const App = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Meat", count: 0, price: 50 },
    { name: "Cheese", count: 0, price: 20 },
    { name: "Salad", count: 0, price: 5 },
    { name: "Bacon", count: 0, price: 30 },
  ]);
  const [burgerPrice, setBurgerPrice] = useState("");
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const createBurger = (index) => {
    const copyIngredients = [...ingredients];
    copyIngredients[index].count++;
    let indexPrice = copyIngredients[index].price;
    // console.log(indexPrice);
    // let sum = [...burgerPrice];
    let sum = copyIngredients[index].count * copyIngredients[index].price;
    // let copyPrice = [...burgerPrice];
    let copyPrice = [];
    copyPrice.push(sum);
    console.log(copyPrice);
    // let totalSum = copyPrice.reduce(reducer);
    // console.log(totalSum);
    // setBurgerPrice(copyPrice);
    // setBurgerPrice();

    setIngredients(copyIngredients);
  };
  const deleteIngredient = (index) => {
    const copyIngredients = [...ingredients];
    copyIngredients[index].count = 0;
    setIngredients(copyIngredients);
  };
  return (
    <div className="App">
      <div className="ingredientsForm">
        {ingredients.map((elem, index) => {
          return (
            <div className="test" key={index}>
              <button
                className="btn deleteBtn"
                onClick={() => createBurger(index)}
              >
                &times;
              </button>
              <h2>{elem.name}</h2>
              <b>{elem.count}</b>
              <button onClick={() => deleteIngredient(index)}>del</button>
            </div>
          );
        })}
      </div>
      <h2>{burgerPrice}</h2>
    </div>
  );
};

export default App;
