<template>
  <div class="hero">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
  
</template>

<style lang="scss">
   .hero {
        background: rgb(97, 38, 38) center / cover;
        //purple: rbg(40 1 55)
    }
    
</style>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar, Footer
  }
}
</script>
