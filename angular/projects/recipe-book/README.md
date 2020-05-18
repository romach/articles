# RecipeBook

## Description

Application should have two pages **Shopping list** and **Recipes** 

- recipes page
  - recipes list - in the left column (5/12 width)
    - above recipes list - **New recipe** button
  - when click on recipe item, recipe details should be opened (7/12 width)
    - Recipe details should contain information: Recipe name, Recipe image, Recipe description, Recipe ingredients
    - Used should allow to manage Recipe: Send recipe to shopping list, Edit recipe, Delete recipe
- shopping list page
  - allow to edit shopping list
    - form with **name** and **amount** inputs
    - allow user to add, delete ingredient and clear form
  - ingredients list (under shopping edit)
    - ingredient name (ingredient amount)

## Implementation

Generate project

```bash
ng new recipe-book --routing=false --style=css
```

Clean `app-component.html`

Delete properties from `AppComponent`

### Integrate Bootstrap

**Install dependency**

```bash
npm install bootstrap
```

**Modify `angular.json`**

- add to `architect -> build -> options -> styles`: `"node_modules/bootstrap/dist/css/bootstrap.min.css"`

### Create components

- `header`
- `recipes`
  - `recipe-detail`
    - `recipe-item`
  - `recipe-list`
- `shopping-list`
  - `shopping-edit`

### Add navigation bar

- see [documentation](https://getbootstrap.com/docs/4.5/components/navbar/) for example

### Create `Recipe` model

- create class with public properties
  - `name`
  - `description`
  - `imagePath`

### Add markup for Recipe list

### Add markup for Recipe details

### Create `Ingredient` model

- create `ingredient.model.ts` in `shared` directory with `name` and `amount` properties

### Add Ingredients to Shopping list page

### Add Edit ingredient form to Shopping list page