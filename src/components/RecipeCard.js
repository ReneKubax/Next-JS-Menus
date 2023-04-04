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
        alert.error(error);
      }
    };
    fetchImage();
  }, [recipe]);

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-sm grid-cols-4 mb-4"
    onClick={() => router.push(`/edit/${recipe.id}`)}
    >
    <a href="#" className="flex flex-col md:flex-row w-full">
      <img className="object-cover w-full h-64 md:h-auto md:w-48 rounded-t-lg md:rounded-l-lg" src={imageUrl || "https://64.media.tumblr.com/90c63cd67d87fd14678757e42b17db9f/tumblr_mstpufdc9w1sqfhloo1_500.jpg"} alt="Recipe image" />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div>
          <h1 className="text-gray-700 dark:text-gray-400 mb-2">{recipe.title}</h1>
          <p className="text-gray-700 dark:text-gray-400 mb-3">Description: {recipe.description}</p>
          <p className="text-gray-700 dark:text-gray-400 mb-3">Ingredients: {recipe.ingredients}</p>
        </div>
        <span className="text-gray-400 text-xs">
          *Press the recipe to edit it*
        </span>
        <button
          className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center mt-3 ml-auto"
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
    </a>
  </div>
  );
};