<template>
<div>
    <div class="buttons" v-if="!Session.user">
        <router-link class="button is-info" :to="{ name: 'SignUp' }"><strong>Sign up</strong></router-link>
        <router-link class="button is-light" :to="{ name: 'LogIn' }"><strong>Log in</strong></router-link>
    </div>
    
    <div v-else class="buttons">
       <p class="subtitle has-text-white pt-1 pr-4">Hello {{name}}</p>  
        <button class="button is-warning has-text-dark" @click="logout()">Log Out</button>
    </div>
</div>
    
</template>

<script>
import Session from "../services/session";
import { Logout } from "../services/session";
export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        logout() {
            console.log('test')
            this.user = ""
            Logout();
           
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>
</style>