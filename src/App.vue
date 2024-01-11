<template>
  <NavBar></NavBar>
  <main>
    <router-view/>
    <div style="display: none;">
      <SpinnerComp></SpinnerComp> 

    </div> 
  </main>
  <FooterComp></FooterComp>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';
import SpinnerComp from './components/SpinnerComp.vue';


    export default {
      components : {
        NavBar,
        FooterComp,
        SpinnerComp

      }
    }
</script>

<style src="./assets/css/style.css">

</style>
