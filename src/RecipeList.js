import React from "react";

function RecipeList({ recipes, setRecipes, deleteItem }) {
	// TODO: Display the list of recipes using the structure of table that is provided.
	// TODO: Create at least one additional component that is used by this component.
	// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

	return (
		// div that contains the table and thead elements for the recipe list
		<div className="recipe-list">
			<table>
				<thead>
					<tr>
						{/* the column title names */}
						<th>Name</th>
						<th>Cuisine</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Preparation</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe, index) => (
						<tr
							key={index}
							className="recipe"
						>
							<td>{recipe.name}</td>
							<td>{recipe.cuisine}</td>
							<td>
								<img
									src={recipe.photo}
									alt="Img"
								/>
							</td>
							<td className="content_td">
								<p>{recipe.ingredients}</p>
							</td>
							<td className="content_td">
								<p>{recipe.preparation}</p>
							</td>
							<td>
								<button
									name="delete"
									onClick={() => deleteItem(index)}
								>
									delete
								</button>
							</td>
						</tr>
					))}{" "}
				</tbody>
			</table>
		</div>
	);
}

export default RecipeList;
