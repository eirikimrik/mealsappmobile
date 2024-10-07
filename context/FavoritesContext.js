import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(mealId) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, mealId]);
  }

  function removeFavorite(mealId) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((id) => id !== mealId)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}