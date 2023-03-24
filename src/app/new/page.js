"use client";
import { useEffect } from "react";
import { useRecipes } from "../../context/RecipeContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const TaskFormPage = ({ params }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createRecipe, updateRecipe, recipes } = useRecipes();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createRecipe(data.title, data.description, data.ingredients);
      toast.success("Recipe created successfully");
    } else {
      updateRecipe(params.id, data);
      toast.success("Recipe updated successfully");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const recipeFound = recipes.find((recipe) => recipe.id === params.id);
      if (recipeFound) {
        setValue("title", recipeFound.title);
        setValue("description", recipeFound.description);
        setValue("ingredients", recipeFound.ingredients);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-3/4 max-w-3xl min-h-screen overflow-y-auto">
      <form className="bg-gray-700 p-10" onSubmit={onSubmit}>
        <h1 className="text-3xl mb-3">
          {params.id ? "Edit Recipe" : "New Recipe"}
        </h1>
        <input
          type="text"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-2 block"
          placeholder="Write a title"
          autoFocus
          name="title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}

        <textarea
          cols="2"
          placeholder="Write a Description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-1 block"
          name="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}

        <input
          type="text"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-2 block"
          placeholder="Write ingredients"
          name="ingredients"
          {...register("ingredients", { required: true })}
        />

        {errors.ingredients && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">
          Save
        </button>
      </form>
      </div>
    </div>
  );
};

export default TaskFormPage;
