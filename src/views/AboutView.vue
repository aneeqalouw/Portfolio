<template>
  <div class="container-fluid vh-100 text-white" id="container">
    <br><br>
    <h2 class="display-4 fw-bold">About me</h2>
    <br><br>
    <div class="container shadow d-flex justtify-content-center" id="block">
      <div class="row" id="#text">
          <p class="lead fs-3">I'm Aneeqa Louw, a 21 year old Junior Web Developer from Cape Town.</p>
          <p class="fs-5">
            I started my coding journey back in high school, 2018, doing Delphi and
            MySQL. Since then I've had a knack for computer programmimg and I plan to continue 
            to up-skill myself in the near future, during and after my studies. <br><br>I'm a quick learner, as well as a fast but accurate worker.
          </p>
          <p class="fs-5">
            I am currently studying at Life Choices Coding Academy and will complete
            the programme in March, continuing on to Life Choices Studio, where i will
            intern and become ready for employment.
          </p> 
          <br><br><br><br>
          <router-link to="/projects">
            <button class="btn bg-black text-white">Check out my work -></button>
          </router-link>
      </div>
    </div>
</div>
</template>

<script>
  export default {

    
  }
</script>

<style scoped>
#container{
  background: url('https://i.ibb.co/fGVDR2G/198683.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
}
.row{
  border: groove rgb(255, 81, 0) 5px;
  padding: 50px;
  border-radius: 2px;
}
img{
  width: 300px;
  height: 325px;
}
</style>
