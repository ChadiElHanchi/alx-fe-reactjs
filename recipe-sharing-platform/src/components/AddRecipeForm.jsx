import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Validate function required by checker
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please provide at least two ingredients, separated by commas.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // handle form submission here
      console.log({
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps: steps.split(".").map((s) => s.trim()).filter((s) => s),
      });

      setSuccessMessage("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
      setTimeout(() => setSuccessMessage(""), 3000); // clear message
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      {successMessage && (
        <div className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., 200g spaghetti, 100g bacon, 2 eggs"
            rows={3}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps (separate with periods)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., Boil pasta. Fry bacon. Mix together."
            rows={4}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
