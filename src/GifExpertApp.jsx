import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (newCategory) => {
		//console.log(newCategory)
		if (categories.includes(newCategory)) return;

		setCategories(cat => [ newCategory, ...cat])
		//setCategories([ newCategory, ...categories])
	}

	return (
		<>
			<h1>GifExpert</h1>

			<AddCategory
				//setCategories= {setCategories}
				//onNewCategory = { value => onAddCategory(value) }
				onNewCategory={onAddCategory}
			/>


			{categories.map(category =>
				(
					<GifGrid
						key={category}
						category={category}
					/>
				)
			)}

		</>
	)
}

