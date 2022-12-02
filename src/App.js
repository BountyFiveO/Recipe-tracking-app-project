import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
	// this is the state variable that contains the RecipeData
	const [recipes, setRecipes] = useState(RecipeData);

	// This function adds a new recipe to the recipes array.
	const addRecipes = (recipe) => {
		setRecipes((current) => [...current, recipe]);
	};

	// this is the function that deletes the recipe
	const deleteRecipe = (index) =>
		setRecipes((recipe) =>
			recipes.filter((recipe, deleteRecipe) => deleteRecipe !== index)
		);
	return (
		<div className="App">
			<header>
				<h1>Delicious Food Recipes</h1>
			</header>
      
			<RecipeList
				recipes={recipes}
				setRecipes={setRecipes}
				deleteItem={deleteRecipe}
			/>
			<RecipeCreate
				recipes={recipes}
				setRecipes={setRecipes}
				addRecipes={addRecipes}
			/>
		</div>
	);
}

export default App;
