"use client";

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useRecipes } from "../context/RecipeContext";

export function Navbar() {
  const router = useRouter();
  const { recipes } = useRecipes();

  return (
    <header className="flex items-center bg-gray-800 px-28 py-3">
      <Link href="/">
  <div className="flex items-center">
    <img src="https://png.pngtree.com/png-clipart/20221022/original/pngtree-chef-cat-vector-logo-mascot-png-image_8712395.png"  alt="Logo" className="w-10 h-10 mr-2"/>
    <h1 className="font-black text-3xl text-white">YummyHub</h1>
  </div>
</Link>

      <span className="ml-2 text-gray-400 font-bold">{recipes.length} Recipes</span>

      <div className="flex-grow text-right">
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray font-bold rounded-sm inline-flex items-center"
          onClick={() => router.push("/new")}
        >
          <AiOutlinePlus className="mr-2" />
          Add Recipe
        </button>
      </div>
    </header>
  );
}