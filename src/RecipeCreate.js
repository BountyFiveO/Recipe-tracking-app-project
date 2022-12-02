import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes, addRecipes }) {
	const [name, setName] = useState("");
	const [cuisine, setCuisine] = useState("");
	const [photo, setPhoto] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [preparation, setPreparation] = useState("");

	// This is the variable that contains the default values for the form.
	const defaultFormData = {
		name: "",
		cuisine: "",
		url: "",
		ingredients: "",
		preparation: "",
	};

	// The form data is stored in this state variable.
	const [formData, setFormData] = useState({ ...defaultFormData });

	//the events for the form inputs are handled here
	// this event handler is for the name input
	const handleName = (event) => {
		setName(event.target.value);
		const value = event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	};
	// this event handler is for the cuisine input
	const handleCuisine = (event) => {
		setCuisine(event.target.value);
		const value = event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	};
	// this event handler is for the photo input
	const handlePhoto = (event) => {
		setPhoto(event.target.value);
		const value = event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	};
	// this event handler is for the ingredients input
	const handleIngredients = (event) => {
		setIngredients(event.target.value);
		const value = event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	};
	// this event handler is for the preparation input
	const handlePreparation = (event) => {
		setPreparation(event.target.value);
		const value = event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	};
	// this event handler is for the submit button
	const handleSubmit = (event) => {
		//prevents the page from refreshing after submit
		event.preventDefault();

		//adds the new form data to recipeData[]
		addRecipes(formData);

		//reset the form after creating recipe
		setName("");
		setCuisine("");
		setPhoto("");
		setIngredients("");
		setPreparation("");
	};

	return (
		// this is the form for creating a new recipe. onSubmit calls the handleSubmit function which then uses all the other event handlers to add the new recipe to the recipeData array
		<form
			name="create"
			onSubmit={handleSubmit}
		>
			<table>
				<tbody>
					<tr>
						<td>
							{/* this is the name input box */}
							<input
								type="text"
								name="name"
								id="name"
								value={name}
								onChange={handleName}
								placeholder="Name"
								required
							/>
						</td>
						<td>
							{/* this is the cuisine input box */}
							<input
								type="text"
								name="cuisine"
								id="cuisine"
								value={cuisine}
								onChange={handleCuisine}
								placeholder="Cuisine"
								required
							/>
						</td>
						<td>
							{/* this is the photo input box */}
							<input
								type="url"
								name="photo"
								id="photo"
								value={photo}
								onChange={handlePhoto}
								placeholder="Image URL"
								required
							/>
						</td>
						<td>
							{/* this is the ingredients textarea box */}
							<textarea
								type="text"
								name="ingredients"
								id="ingredients"
								value={ingredients}
								onChange={handleIngredients}
								placeholder="Ingredients"
								required
							/>
						</td>
						<td>
							{/* this is the preparation textarea box */}
							<textarea
								type="text"
								name="preparation"
								id="preparation"
								value={preparation}
								onChange={handlePreparation}
								placeholder="Preparation"
								required
							/>
						</td>
						<td>
							{/* this is the submit button */}
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
