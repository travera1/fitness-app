<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
      <div class="columns is-centered is-vcentered">
        <div class="column has-text-centered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification has-background-link-light">
            <form @submit.prevent="login()">
              <div class="field">
                <label class="label has-text-left">Email address</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Email Address" v-model="email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div><br>
              </div>
              <div class="field">
                <label class="label has-text-left">Password</label>
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" v-model="password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p><br>
              </div>
              <div class="control">
                <button class="button is-primary is-rounded has-text-weight-bold" type="submit" style="width: 50%;">LOG IN</button>
              </div><br><br>
            </form>
            <p class="subtitle is-6 has-text-weight-bold">Don't have an account?</p>
                <router-link class="button is-dark is-outlined is-rounded has-text-weight-bold" style="width: 35%;" :to="{ name: 'SignUp' }"><strong>SIGN UP</strong></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session"
export default {
    name: 'LogIn',
    components: {
        
    },
    data() {
      return {
        email: null,
        password: null, 
        Session
      }
    },
    methods: {
      login() {
        this.Session.Login(this.email, this.password);
      }
    }
}
</script>

<style>

</style>