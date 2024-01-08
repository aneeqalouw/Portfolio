<template>
  <NavBar></NavBar>
  <main class="container-fluid">
    <router-view/>
  </main>
  <FooterComp></FooterComp>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';


    export default {
      components : {
        NavBar,
        FooterComp

      }
    }
</script>

<style src="./assets/css/style.css">

</style>
