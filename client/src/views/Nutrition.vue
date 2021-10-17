<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification">
            <div class="columns">
              <h1 class="column title has-text-dark has-text-centered">Nutrition</h1>
            </div><br>
            <div class="columns buttons is-v-centered">
              <h1 class="column button" @click="selectCalories()">CALORIES</h1>
              <h1 class="button column" @click="selectNutrients()">NUTRIENTS</h1>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                  <div class="button">
                    <span class="icon">
                      <i class="fas fa-chevron-left"></i>
                    </span>
                  </div>
                </div>
                <div class="column">
                    <p class="pt-2 has-text-weight-bold">Today</p>
                </div>
                <div class="column is-one-fifth">
                    <div class="button">
                    <span class="icon">
                      <i class="fas fa-chevron-right"></i>
                    </span>
                  </div>
                </div> 
              </div>
            <div v-if="caloriesSelected">
              <div class="px-6 mx-2 has-text-left">
                <p class="bb my-3">Total Calories</p>
                <p class="bb my-3">Net Calories</p>
                <p class="bb my-3">Goal</p>
              </div>
            </div>
            <div v-else-if="nutrientsSelected"><br>
              <div class="columns is-centered">
                <table class="table column pl-6 is-half is-striped is-hoverable ">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Total</th>
                      <th>Goal</th>
                      <th>Left</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Protein</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Carbohydrates</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Fiber</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Sugars</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Fat</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Saturated</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Polyunsaturated</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Monounsatruated</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Trans</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Cholesterol</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Sodium</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Potassium</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Vitamin A</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Vitamin C</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Calcium</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                    <tr>
                      <th>Iron</th>
                      <th>0</th>
                      <th>0</th>
                      <th>0</th>
                    </tr>
                  </tbody>
                </table>
              </div>
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
        caloriesSelected: true,
        nutrientsSelected: false,

      }
    },
    methods: {
      selectCalories() {
        this.caloriesSelected = true
        this.nutrientsSelected = false
      },
      selectNutrients() {
        this.caloriesSelected = false
        this.nutrientsSelected = true
      }

    }
}
</script>

<style>
    .bb{
    padding-bottom: 7px;
    border-bottom: 1px solid;
  }
</style>