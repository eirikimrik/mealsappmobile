import { FlatList, View, StyleSheet, Button } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  function getRandomMeal() {
    const randomIndex = Math.floor(Math.random() * MEALS.length);
    const randomMeal = MEALS[randomIndex];

    navigation.navigate("MealDetail", {
      mealId: randomMeal.id,
    });
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
      <View style={styles.buttonContainer}>
        <Button title="Get a Random Meal" onPress={getRandomMeal} />
      </View>
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    margin: 20,
  },
});
