<template>
    <nav class="navbar navbar-expand-lg bg-black border-bottom" id="navBar" data-bs-theme="dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto gap-3 fs-5" id="links">
            <router-link to="/" class="nav-link active lead">
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
nav a.router-link-exact-active {
  font-weight: bold;
  
}
a:hover {
  color: #e80b79;
}

</style>