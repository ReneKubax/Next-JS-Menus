"use client";
import "./globals.css";
import { useRecipes } from "../context/RecipeContext";
import { VscTasklist } from "react-icons/vsc";
import { RecipeCard } from "../components/RecipeCard";

function Home() {
  const { recipes } = useRecipes();

  return (
    <div className="flex justify-center">
      {recipes.length === 0 ? (
        <div className="block">
          <h2 className="text-2xl">There are no recipes</h2>
          <VscTasklist size="8rem" />
        </div>
      ) : (
        <div className="w-7/10">
          {recipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;