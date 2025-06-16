import React, { useEffect, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";
import "../App.css"; 

const BaristaForm = () => {
    const [currentDrink, setCurrentDrink] = useState("");
    const [trueRecipe, setTrueRecipe] = useState({});
    const [inputs, setInputs] = useState({
        temperature: "",
        milk: "",
        syrup: "",
        blended: "",
    });

    const [correctTemp, setCheckedTemperature] = useState("");
    const [correctSyrup, setCheckedSyrup] = useState("");
    const [correctMilk, setCheckedMilk] = useState("");
    const [correctBlended, setCheckedBlended] = useState("");

    const ingredients = {
        temperature: ["hot", "lukewarm", "cold"],
        syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
        milk: ["cow", "oat", "goat", "almond", "none"],
        blended: ["yes", "turbo", "no"],
    };

    const getNextDrink = () => {
        const randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        const selectedDrink = drinksJson.drinks[randomDrinkIndex];
        setCurrentDrink(selectedDrink.name);
        setTrueRecipe(selectedDrink.ingredients);
    };

    const onNewDrink = () => {
        setInputs({
            temperature: "",
            milk: "",
            syrup: "",
            blended: "",
        });
        setCheckedTemperature("");
        setCheckedMilk("");
        setCheckedSyrup("");
        setCheckedBlended("");
        getNextDrink();
    };

    const onCheckAnswer = (e) => {
        e.preventDefault();

        setCheckedTemperature(trueRecipe.temp === inputs.temperature ? "correct" : "wrong");
        setCheckedMilk(trueRecipe.milk === inputs.milk ? "correct" : "wrong");
        setCheckedSyrup(trueRecipe.syrup === inputs.syrup ? "correct" : "wrong");
        setCheckedBlended(trueRecipe.blended === inputs.blended ? "correct" : "wrong");
    };

    useEffect(() => {
        getNextDrink();
    }, []);

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button type="button" className="button newdrink" onClick={onNewDrink}>
                    🔄
                </button>
            </div>

            <form className="container" onSubmit={onCheckAnswer}>
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className={`answer-space ${correctTemp}`}>
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }
                        label="temperature"
                        choices={ingredients.temperature}
                        currentVal={inputs.temperature}
                    />
                </div>

                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className={`answer-space ${correctMilk}`}>
                        {inputs.milk}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }
                        label="milk"
                        choices={ingredients.milk}
                        currentVal={inputs.milk}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className={`answer-space ${correctSyrup}`}>
                        {inputs.syrup}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }
                        label="syrup"
                        choices={ingredients.syrup}
                        currentVal={inputs.syrup}
                    />
                </div>

                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className={`answer-space ${correctBlended}`}>
                        {inputs.blended}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                        }
                        label="blended"
                        choices={ingredients.blended}
                        currentVal={inputs.blended}
                    />
                </div>

                <button type="submit" className="button submit">
                    Check Answer
                </button>
            </form>
        </div>
    );
};

export default BaristaForm;
