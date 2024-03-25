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
        <button class="btn bg-black text-white fs-4">Learn more</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


#text{
  color: white;
  
}
span{
  font-weight: bold;
  color: #D19D49;
  text-shadow: #a06a14;
}
</style>
