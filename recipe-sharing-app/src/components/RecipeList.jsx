import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';


const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes found.</p>}
      {recipes.map((recipe) => {
        const isFavorited = favorites.includes(recipe.id);
        return (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description.slice(0, 60)}...</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
