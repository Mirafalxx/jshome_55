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
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
  ]);
  const [price, setPrice] = useState(0);
  return <div className="App"></div>;
};

export default App;
