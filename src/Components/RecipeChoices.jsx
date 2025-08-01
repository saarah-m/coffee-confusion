import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
    <div className="radio-buttons">
  <ul>
    {choices &&
      choices.map((choice) => (
        <li key={choice}>
          <input
            id={choice}
            value={choice}
            name={label}
            type="radio"
            onChange={handleChange}
            checked={checked === choice}
          />
          <label htmlFor={choice}>{choice}</label>
        </li>
      ))}
  </ul>
</div>
    );
};

export default RecipeChoices;