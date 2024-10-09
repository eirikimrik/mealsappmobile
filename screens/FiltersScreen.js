import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { FiltersContext } from '../context/FiltersContext';

function FiltersScreen() {
  const { filters, setFilter } = useContext(FiltersContext);

  function toggleFilter(filterName) {
    setFilter(filterName, !filters[filterName]);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Gluten-free</Text>
        <Switch
          value={filters.isGlutenFree}
          onValueChange={() => toggleFilter('isGlutenFree')}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Vegan</Text>
        <Switch
          value={filters.isVegan}
          onValueChange={() => toggleFilter('isVegan')}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Vegetarian</Text>
        <Switch
          value={filters.isVegetarian}
          onValueChange={() => toggleFilter('isVegetarian')}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Lactose-free</Text>
        <Switch
          value={filters.isLactoseFree}
          onValueChange={() => toggleFilter('isLactoseFree')}
        />
      </View>
    </View>
  );
}

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
    color: "white",
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  filterText: {
    color: "white",
  },
});