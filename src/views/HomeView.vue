<template>
  <div class="container-fluid vh-100" id="container">
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <div class="row d-flex justify-content-center align-items-center" id="text">
      <h1 class="display-1">
        Aneeqa <span>/</span> Louw
      </h1>
      <h3 class="display-5">
        The <span>Designer</span> | The <span>Developer</span>
      </h3>
    </div>
    <br><br>
    <div class="row">
      <router-link to="/about">
        <button class="btn bg-black text-white fs-5">Learn more</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  background: url('https://i.ibb.co/fGVDR2G/198683.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
}

#text{
  color: white;
  
}
span{
  color: rgb(255, 81, 0);
  text-shadow: rgb(213, 101, 10);
}
</style>
