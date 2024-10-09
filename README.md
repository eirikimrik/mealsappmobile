# Meals App Assignment IDATA2503

### Overview

This is a simple meals application built with React Native as part of the IDATA2503 assignment. The app allows users to
browse through categories of meals, view details of the meals, and save their favorite for easy access. We also added a
"Get a Random Meal" feature for users looking for meal inspiration.

We got the starting point/template from a Udemy course, similar to the course for Flutter.
However, we had some issues getting started from this template, because it was so outdated.
So it took us a few hours to get it running without errors.

### Working in group

In this assignment we worked together in groups of two, like last assignment. Since we didn't build the app from scrath
this time, we focused on fixing the provided template and adding new features to the application. Once the base app was
running, we collaboratively implemented the additional features, like the random meal functionality and the favorites
system.

### Features

- Browse catories: Users can browse though different meal categories
- Meal overview: Users can view meals within each category
- Meal detail: Users can get a detailedd view of a selected meal
- Add/remove favorite: Users can add or remove meals from their favorite list (Additional feature)
- Favorites screen: Users can view all their favorite meals
- Get random meal: Users can click a button that selects and displays a random meal from the meal list (Additional feature)
- Filter meals: Users can apply filters using switches to refine their meal options. The meal list is updates the
  available meals based on the selected filters.

### Data flow

- The list of meals and categories are predefined and stored in a local JavaScript file.
- State management is handled using React Context
- Navigation is managed using React Navigation

### User stories

- As a user, I want to browse different meal categories, so that I can find meals that interest me.
- As a user, I want to tap on a category tile, so that I can view the meals within that category.
- As a user, I want to see a list of meals in the selected category, including their names, images, cooking time, complexity, and affordability, so that I can make an informed decision about which meal to try.
- As a user, I want to click on a meal to view its details, so that I can see the ingredients and preparation steps.
- As a user, I want to mark a meal as a favorite, so that I can easily find it later.
- As a user, I want to remove a meal from my favorites, so that I can manage my list of favorite meals.
- As a user, I want to view all my favorite meals in a dedicated screen, so that I can quickly access them without searching.
- As a user, I want to apply filters (vegetarian, vegan, gluten-free and lactose-free) to my meal search, so that I can find meals that meet my dietary preferences.
- As a user, I want to receive feedback messages (e.g., "You have no favorite meals yet") when I navigate to the favorites screen and have not added any meals, so that I understand the current state of the app.

### Class diagram

The class diagram is available under /assets/diagrams/.

### How to run

1. Clone the repository and navigate to the project directory:

```
git clone <url>
cd mealsappmobile
```

2. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npx expo start
```

### Video of app in action

https://github.com/user-attachments/assets/2be2b987-3846-42d8-918c-ca082518b183
