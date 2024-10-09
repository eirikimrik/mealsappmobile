import React, { createContext, useState } from 'react';

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {
  const [filters, setFilters] = useState({
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  });

  function setFilter(filterName, value) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [filterName]: value,
    }));
  }

  const value = {
    filters: filters,
    setFilter: setFilter,
  };

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}