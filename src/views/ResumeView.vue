<template>
  <div class="container-fluid text-white" id="container">
      <!-- **education -->
    <h2 class="lead fs-1 fw-bold d-flex justify-content-center">
      Resume
    </h2>
    <br /><br />
    <div class="container shadow" id="education" v-if="$store.state.education">
      <h3 class="lead fs-3 justify-content-center fw-bold d-flex">Education</h3>
      <br /><br />
        <div class="card my-3" v-for="edu in education" :key="edu.id" id="educationBlock">
              <div class="card-body">
                <h5>
                  {{ edu.title }}
                </h5>
                <h6 class="fw-bolder">{{ edu.place }}</h6>
                <p>{{ edu.description }}</p>
                <p class="card-text">{{ edu.year }}</p>
              </div>
        </div>
    </div>
    <div v-else>
      <SpinnerComp></SpinnerComp>
    </div>
    <br /><br />
    <br /><br />
  
    <!-- **skills -->
    <div class="container" v-if="$store.state.skills">
      <h3 class="lead fs-2 justify-content-center fw-bold d-flex">Skills</h3>
      <section
        class="d-block d-md-flex justify-content-center justify-content-evenly"
        id="skills"
        v-if="$store.state.skills">
        <div class="row d-flex justify-content-center" v-for="skill in skills" :key="skill.id">
          <div class="flip-card" style="width: 15rem; height: 15rem">
            <div class="flip-card-inside">
              <div class="flip-card-front">
                <img :src="skill.image" alt="icon" />
              </div>
              <div class="flip-card-behind">
                <h2 class="lead fs-3">{{ skill.title }}</h2>
                <p class="fs-5">{{ skill.level }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
      <h4 class="d-flex justify-content-center">Hover for details!</h4>
      <br><br>
      <br><br>
    </div>
    <div v-else>
      <SpinnerComp></SpinnerComp>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    try{
      this.$store.dispatch("fetchEducation");
      this.$store.dispatch("fetchSkills");

    } catch(e){
      alert('No data found')
    }
  },
  components: { SpinnerComp },
};
</script>

<style scoped>
#container{
  background: url('https://i.ibb.co/fGVDR2G/198683.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
}
/* #education {
  width: 1000x;
  height: 500px;
  /* background-image: linear-gradient(
    rgb(255, 244, 248),
    pink,
    rgb(249, 162, 176)
  ); */

#educationBlock{
  color: white;
  background: transparent;
  border: groove 5px rgb(255, 81, 0);
  box-shadow: 10px 6px 3px 1px rgb(255, 0, 0);
}

/* **skills */
img[alt="icon"] {
  width: 200px;
  height: 200px;
  mix-blend-mode: multiply;
}
#skills {
  height: max-content;
}

.flip-card {
  margin-top: 50px;
  background-color: transparent;
  width: 300px;
  height: 250px;
  border: 1px solid #f9b5d0;
  perspective: 1000px; /* 3D effect */
}

.flip-card-inside {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inside {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-behind {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #fdf4f6;
  color: rgb(4, 4, 4);
}

.flip-card-behind {
  color: rgb(5, 5, 5);
  transform: rotateY(180deg);
}


</style>
