export function filterMeals(meals, filters) {
    return meals.filter((meal) => {
      if (filters.isGlutenFree && !meal.isGlutenFree) {
        return false;
      }
      if (filters.isVegan && !meal.isVegan) {
        return false;
      }
      if (filters.isVegetarian && !meal.isVegetarian) {
        return false;
      }
      if (filters.isLactoseFree && !meal.isLactoseFree) {
        return false;
      }
      return true;
    });
  }