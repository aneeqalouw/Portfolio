<template>
<div class="container-fluid bg-dark text-white vh-25" id="footer">
  <p class="d-flex justify-content-center">Copyright &copy; {{ year }}. All rights reserved</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer{
  height: 40px;
  position: relative;
  bottom: 0;
}
</style>
