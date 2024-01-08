<template>
<div class="row d-flex align-items-center vh-100 m-auto">
  <div class="col" id="intro">
    <p class="fs-4">Welcome to my portfolio</p>
    <p class="lead fs-1 fw-bold" id="introduction">I'm Aneeqa Louw, an aspiring web developer</p>
  </div>

  <div class="col d-flex justify-content-center align-items-center vh-100">
    <div class="box">
    </div>
    <div class="pic">
      <img src="https://drive.google.com/uc?id=1rpoLfQ3spu0MBmQhEvGd04hH-dHacDMG" alt="profile" loading="lazy" class="img-fluid">
    </div>
  </div>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#intro{
 text-align: start;

}
#introduction{
  background: -webkit-linear-gradient(rgb(245, 56, 88), rgb(249, 113, 136));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.box{
  width: 315px;
  height: 300px;
  border: 25px solid rgb(248, 127, 147);
}

img[alt='profile']{
  width: 17rem;
  height: 20rem;
  position: absolute;
  right: 200px;
  top: 292px;
}

</style>
