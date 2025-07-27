import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';


const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore();

  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  if (favoriteRecipes.length === 0) {
    return <p>You have no favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description.slice(0, 60)}...</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
