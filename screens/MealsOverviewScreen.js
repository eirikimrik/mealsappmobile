import React, { useContext, useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { filterMeals } from '../utils/filterMeals';
import { FiltersContext } from '../context/FiltersContext';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const filtersCtx = useContext(FiltersContext);

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  const filteredMeals = filterMeals(displayedMeals, filtersCtx.filters);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meals Overview',
    });
  }, [navigation])

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});