<template>
    <div class="hero is-fullheight notfound">
        <div class="columns is-centered">
            
            <div class=" column is-one-third has-text-centered">
                <span class="icon is-large">
                    <i class="far fa-10x fa-frown"></i>
                </span>
                <h1 class="pt-5 title is-size-1 has-text-white has-text-weight-bold">404</h1>
                <h1 class="subtitle has-text-grey">Page Not Found</h1>
                <p class="has-text-grey">The page you are looking for doesn't exist or another error occured, Go back, or click 
                     <router-link class="px-1 has-text-white is-underlined" :to="{ name: 'Home' }"><strong>HERE</strong></router-link> 
                    to go home.
                </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {

}
</script>

<style>
    .notfound {
        
        margin: 100px;
    }
</style>