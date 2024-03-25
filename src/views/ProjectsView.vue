<template>
  <div class="container-fluid text-white" v-if="$store.state.projects">
    <br><br>
    <div class="heading">
      <h2 class="display-4 fw-bold d-flex justify-content-center" id="head">
        Some of my work
      </h2>
    </div>
    <br /><br />
    <br /><br />
    <section class="row d-block d-md-flex justify-content-center">
        <div id="card" v-for="project in projects" :key="project.name">
            <div  class="card border-dark mb-3 text-white" id="animated-border-box">
                <img :src="project.image" alt="project" class="img-fluid d-flex justify-content-center" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">
                        {{ project.description }}
                    </p>
                    <div class="d-flex justify-content-evenly gap-2">
                        <a :href=" project.gitHub" class="btn btn-dark" target="_blank" id="linkBtn">Github</a>
                        <a :href="project.netlify" class="btn btn-dark" target="_blank" id="linkBtn">Link to site</a>            
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
  <div v-else>
    <SpinnerComp/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    computed: {
        projects() {
            return this.$store.state.projects;
        },
    },
    mounted() {
      try{
        this.$store.dispatch("fetchProjects");

      } catch (e){
        alert('No data found')
      }
    },
    components: { SpinnerComp }
};
</script>

<style scoped>
#card{
    width: 400px;
    padding: 50px;
    display: flex;
    justify-content: space-evenly;
}
img{
    width: 300px;
    height: 150px;
}

#head {
  animation: slide 1.5s forwards ;
}
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
#animated-border-box, #animated-border-box-glow{
    position: relative;
    overflow: hidden; 
    z-index: 0;
    border-radius: 3px;
  }
  
  #animated-border-box-glow{
    overflow: hidden;
    filter: blur(20px);
  }
  
  #animated-border-box:before, #animated-border-box-glow:before {
    content: '';
    z-index: -1;
    text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
    position: absolute;
      width: 99999px;
      height: 99999px;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(#D19D49, #F4D885, #FCE07F, rgb(55, 36, 6) 25%);
      animation: rotate 2.5s linear infinite;
  }
  
  #animated-border-box:after {
      content: '';
      position: absolute;
      z-index: -1;   
      left: 3px;
      top: 3px;
      width: calc(100% - 5px);
      height: calc(100% - 5px);
      background: black;
      border-radius: 3px;
  }
  @keyframes rotate {
      100% {
          transform: translate(-50%, -50%) rotate(1turn);
      }
  }
  #linkBtn:hover{
    background-color: #D19D49;
  }
</style>
