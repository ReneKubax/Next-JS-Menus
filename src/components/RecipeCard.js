import { useRecipes } from "../context/RecipeContext";
import { useRouter } from "next/navigation";
import { VscTrash } from "react-icons/vsc";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";

export const RecipeCard = ({ recipe }) => {
  const { deleteRecipe } = useRecipes();
  const router = useRouter();
  const API_KEY = '8pVyV7EtggsIoCoAB6D0ew5kNj0244lXxeWEg0YKQuBXr8QIrgMdex1p'
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${recipe.title}&per_page=1`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        const { photos } = await response.json();
        if (photos && photos.length > 0) {
          setImageUrl(photos[0].src.medium);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [recipe]);

  return (
    <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer p-5 m-2 flex items-center"
    onClick={() => router.push(`/edit/${recipe.id}`)}>
  <div className="flex items-center justify-between w-full">
    <img
      className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-5"
      src={imageUrl || "/default-image.png"}
      alt="Bordered avatar"
    />
    <div className="flex-grow mr-5">
      <h1 className="font-bold">{recipe.title}</h1>
      <p className="text-gray-300">Description: {recipe.description}</p>
      <p className="text-gray-300">Ingredients: {recipe.ingredients}</p>
      <span className="text-gray-400 text-xs">
        *Press the recipe to edit it*
      </span>
    </div>
    <button
      className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
      onClick={(e) => {
        e.stopPropagation();
        const accept = confirm("Are you sure you want to delete this recipe?");
        if (accept) deleteRecipe(recipe.id);
        toast.success("Recipe deleted successfully");
      }}
    >
      <VscTrash className="mr-2" />Delete
    </button>
  </div>
</div>
  );
};