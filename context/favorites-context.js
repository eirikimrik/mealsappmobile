import React, { useState } from "react";

export const FavoritesContext = React.createContext();

export function FavoritesContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  function addFavorite(mealId) {
    setFavoriteMeals((prevFavorites) => [...prevFavorites, mealId]);
  }

  function removeFavorite(mealId) {
    setFavoriteMeals((prevFavorites) =>
      prevFavorites.filter((id) => id !== mealId),
    );
  }

  const favoritesContextValue = {
    favoriteMeals,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}
