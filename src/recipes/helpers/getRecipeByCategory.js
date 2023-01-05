import { useRecipesStore } from "../hooks"


export const getRecipeByCategory = (category) => {

  const {allRecipes} = useRecipesStore()

  return allRecipes.filter(recipe=>recipe.category===category)
}
