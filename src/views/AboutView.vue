<template>
  <div>
    <div class="row d-block d-md-flex align-items-center vh-100 m-auto ">
      <div id="col1" class="col d-flex align-items-center vh-100" >
        <div class="box">
          
        </div>
        <img src="https://drive.google.com/uc?id=1k3W1PyqkbquVY6yArubVyJHCxKRyanV5" alt="profile">
      </div>
      <div class="col my-5" id="col2">
          <h2 class="fs-1 d-1 fw-bold my-4" id="aboutHead">Who am I?</h2>
          <p class="lead fs-4" id="aboutDes">I'm Aneeqa Louw, an aspiring web developer from Cape Town.</p>
          <p class="fs-6" id="about">
            I started my coding journey back in high school, 2018, doing Delphi and
            MySQL. Since then I've had a knack for computing and I plan to continue 
            to up-skill myself in the near future, during and after my studies.
          </p>
          <p class="fs-6" id="about">
            I am currently studying at Life Choices Coding Academy and will complete
            the programme in March, continuing on to Life Choices Studio, where i will
            intern and become ready for employment.
          </p>
      
      </div>
  </div>
  </div>
</template>

<script>
  export default {

    
  }
</script>

<style scoped>
#aboutHead{
  background: -webkit-linear-gradient(rgb(245, 56, 88), rgb(249, 113, 136));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.box{
  width: 15rem;
  height: 20rem;
  background-color: rgb(248, 127, 147);
}
img[alt='profile']{
  width: 15rem;
  height: 20rem;
  position: absolute;
  left: 100px;
  bottom: 70px;
}


</style>
