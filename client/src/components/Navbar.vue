<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand"> 
        <router-link class="navbar-item has-text-danger" :to="{ name: 'Home' }">
            <i class="fas fa-2x fa-heartbeat"></i>
        </router-link>  
        <a role="button" class="navbar-burger has-text-white" :class="{'is-active': isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':isActive }">
        <div class="navbar-start">
            <router-link class="navbar-item has-text-white" :to="{ name: 'Home' }">Home</router-link>
            
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-white">
                Food
                </a>
                <div class="navbar-dropdown">
                    <router-link class="navbar-item" :to="{ name: 'Nutrition' }">Nutrition</router-link>
                    <router-link class="navbar-item" :to="{ name: 'RecipesAndMeals' }">Recipes and Meals</router-link>
                    <router-link class="navbar-item" :to="{ name: 'MealSchedule' }">Meal Schedule</router-link>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-white">
                    Exercise
                </a>
                <div class="navbar-dropdown">
                    <router-link class="navbar-item" :to="{ name: 'Progress' }">Progress</router-link>
                    <router-link class="navbar-item" :to="{ name: 'WorkoutRoutines' }">Workout Routines</router-link>
                    <router-link class="navbar-item" :to="{ name: 'Goals' }">Goals</router-link>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-white">
                    Community
                </a>
                <div class="navbar-dropdown">
                    <router-link class="navbar-item" :to="{ name: 'Messages' }">Messages</router-link>
                    <router-link class="navbar-item" :to="{ name: 'Friends' }">Friends</router-link>
                </div>
            </div>
            <router-link class="navbar-item has-text-white" :to="{ name: 'Reports' }">Reports</router-link>
            <router-link class="navbar-item has-text-white" :to="{ name: 'Settings' }">Settings</router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <login-badge/>
            </div>
        </div>
    </div><br><br>
  </nav>
</template>

<script>
import LoginBadge from './LoginBadge.vue'
export default {
    components: { LoginBadge },
    data() {
        return {
            isActive: false
        }
    }
}
</script>

<style>
     @media screen and (min-width: 25px) {
    .navbar-item.is-hoverable:hover .navbar-dropdown {
        display: block !important;
    }
    .navbar-item.is-hoverable:focus-within .navbar-dropdown {
        display: none;
    }
}
</style>
