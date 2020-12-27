import React from "react";
import "./Ingredients.css";

function Ingredients(props) {
  return (
    <>
      <div className="burgerItems">
        <button className="addIngredient" onClick={props.addIngredient}>
          &times;
        </button>
        <h6>{props.name}</h6>
        <h5>{props.count}</h5>
        <button className="DeleteBtn" onClick={props.removeIngredients}>
          delete
        </button>
      </div>
    </>
  );
}

export default Ingredients;
