import "./globals.css";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { RecipesProvider } from "../context/RecipeContext";
import { Toaster } from "./Toaster";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";

export const metadata = {
  title: "YummyHub 😸",
  description: 'Free App to share Recipes',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RecipesProvider>
          <Navbar />
          <Banner />
          <Layout>{children}</Layout>
        </RecipesProvider>
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}