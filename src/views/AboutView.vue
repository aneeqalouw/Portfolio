<template>
  <div>
    <div class="row d-block d-md-flex align-items-center vh-100 m-auto ">
      <div class="col d-flex align-items-center vh-100" >
        <div class="img-wrapper">
          <img src="https://drive.google.com/uc?id=1-urbJaEBfJnoZNPvErix9JRn35vFhyyq" alt="profile" loading="lazy" class="img-fluid">
          <img src="https://drive.google.com/uc?id=1VRDyEJvTOR7TjROzaStj9TWd5lAq6wSu" alt="thought" loading="lazy" class="img-fluid">
        </div>
      </div>
      <div class="col my-5">
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

img[alt='profile']{
  width: 15rem;
  height: 18rem;
  position: absolute;
  left: 100px;
  bottom: 150px;
}
img[alt='thought']{
  width: 10rem;
  height: 10rem;
  position: absolute;
  left: 310px;
  bottom: 360px;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
    0% { 
      transform: translate(0,  0px);
     }
    50%  { 
      transform: translate(0, 15px); 
    }
    100%   { 
      transform: translate(0, -0px);
     }    
}


</style>
