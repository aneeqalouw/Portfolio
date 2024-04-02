<template>
  <div class="container-fluid text-white">
    <br><br>
    <h2 class="display-4 fw-bold" id="head">About me</h2>
    <br><br>
    <div class="container d-flex justtify-content-center" id="block">
      <div class="row" id="#text">
          <p class="lead fs-3">I'm Aneeqa Louw, a 21 year old Junior Web Developer from Cape Town.</p>
          <p class="fs-5">
            Born on the 26th of November 2002, into the tech generation. <br> <br>
            I started my coding journey back in high school, 2018, doing Delphi and
            MySQL. Since then I've had a knack for computer programmimg and eventually went on to graduate from Life Choices Coding Academy. <br>I am currently working as a student intern at LC Studio. 
          </p>
          <p class="fs-5">
            I'm fluent in English and Afrikaans, and enjoy learning foreign languages in my free time, such as Korean, Mandarin, Indonesian, Japanese and Thai. <br><br>
            I also love getting in touch with my creative side, doing aerial dance and songwriting.
          </p> 
          <br><br><br><br> <br><br>
          <br><br>
          <router-link to="/projects">
            <button class="btn fs-5 fw-bolder text-white border-light">Check out my work -></button>
          </router-link>
          <br><br>
          <br><br>
          <br><br>
          <br><br>
      </div>
    </div>
</div>
</template>

<script>
  export default {

    
  }
</script>

<style scoped>
#head {
  animation: slide 1.5s forwards ;
}
@keyframes slide {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
