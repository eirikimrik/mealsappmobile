import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../context/favorites-context";

function FavoritesScreen({ navigation }) {
  const favoritesCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoritesCtx.favoriteMeals.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
