<template>
    <br><br>
  <div class="container">
    <div class="heading">
      <h2 class="fs-1 fw-bold d-flex justify-content-center">
        Some of my work
      </h2>
    </div>
    <br /><br />
    <br /><br />
    <section class="row d-flex justify-content-center">
        <div id="card" v-for="project in projects" :key="project.name">
            <div  class="card border-dark mb-3" style="width: 25rem; height: 25rem;">
                <img :src="project.image" alt="project" class="img-fluid" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">
                        {{ project.description }}
                    </p>
                    <div class="d-flex justify-content-evenly">
                        <a :href=" project.gitHub" class="btn btn-dark" target="_blank">Github</a>
                        <a :href="project.netlify" class="btn btn-dark" target="_blank">Netlify</a>            
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<style scoped>
.heading {
  background: -webkit-linear-gradient(rgb(245, 56, 88), rgb(249, 113, 136));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  animation:slide 1.5s forwards ;
  opacity: 0;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
#card{
    width: 400px;
    padding: 50px;
    display: flex;
    justify-content: space-evenly;
}
img{
    width: 35rem;
    height: 15rem;
}

/* animations */
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
