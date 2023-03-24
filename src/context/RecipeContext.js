"use client";
import { createContext, useContext} from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const RecipeContext = createContext();

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("useRecipes must be used within a RecipesProvider");
  return context;
};

export const RecipesProvider = ({ children }) => {
  // save in localStorage
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const createRecipe = (title, description, ingredients) =>
  setRecipes([...recipes, { id: uuid(), title, description, ingredients }]);

  const updateRecipe = (id, updatedRecipe) =>
  setRecipes([
      ...recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    ]);

  const deleteRecipe = (id) =>
  setRecipes([...recipes.filter((recipe) => recipe.id !== id)]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        createRecipe,
        updateRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};