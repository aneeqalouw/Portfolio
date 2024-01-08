<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex justify-content-end w-100" id="links">
            <router-link to="/" class="nav-link active">
                Home
            </router-link>
            <router-link to="/about" class="nav-link active">
                About
            </router-link>
            <router-link to="/resume" class="nav-link active">
                Resume
            </router-link>
            <router-link to="/projects" class="nav-link active">
                Projects
            </router-link>
            <router-link to="/testimonials" class="nav-link active">
                Testimonials
            </router-link>
            <router-link to="/contact" class="nav-link active">
                Contact me
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    </template>

<script>
export default {
    
}
</script>

<style scoped>
#navBar{
    background-image: linear-gradient(rgb(254, 146, 164),rgb(250, 166, 180),rgb(254, 204, 212));
}
#links{
    padding: 20px;

}
/* a:hover{
    font-weight: bold;
    background-color: aliceblue;
} */

</style>