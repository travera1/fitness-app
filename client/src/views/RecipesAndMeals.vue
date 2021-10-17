<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification">
            <div class="columns">
              <h1 class="column title has-text-dark has-text-centered">Recipes and Meals</h1>
            </div><br>
            <div class="field has-addons pb-3">
              <div class="control has-icons-left is-expanded">
                <input type="text" class="input" placeholder="Search" v-model="searchContent">
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <div class="control">
                <button class="button is-info" @click="addItem" :disabled="!searchContent">Search</button>
              </div>
            </div>
            <div class="columns buttons is-v-centered">
              <h1 class="column button" @click="selectRecipes()">RECIPES</h1>
              <h1 class="button column" @click="selectMeals()">MEALS</h1>
              <h1 class="button column" @click="selectFoods()">FOODS</h1>
            </div>
            <div v-if="recipesSelected">
              <p class="title has-text-weight-bold my-4 has-text-grey">Recipes</p>
              <p>Create recipes to use in meal planning.</p><br>
              <div class="button is-link">Create a Recipe</div>
            </div>
            <div v-else-if="mealsSelected">
              <p class="title has-text-weight-bold my-4 has-text-grey">Meals</p>
              <p>Create a meal for foods you eat often.</p><br>
              <div class="button is-link">Create a Meal</div>
            </div>
            <div v-else-if="foodsSelected">
              <p class="title has-text-weight-bold my-4 has-text-grey">My Foods</p>
              <p>Create a food to be used in meals.</p><br>
              <div class="button is-link">Create a Food</div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: "",
      recipesSelected: true,
      mealsSelected: false, 
      foodsSelected: false,
      creatingRecipe: false, 
      creatingMeal: false, 
      creatingFood: false
    }
  }, 
  methods: {
    selectRecipes() {
      this.recipesSelected = true
      this.mealsSelected = false
      this.foodsSelected = false
    },
    selectMeals() {
      this.recipesSelected = false
      this.mealsSelected = true
      this.foodsSelected = false
    },
    selectFoods() {
      this.recipesSelected = false
      this.mealsSelected = false
      this.foodsSelected = true
    }
  }
}
</script>

<style>
  input {
    width: 50%;
  }
</style>