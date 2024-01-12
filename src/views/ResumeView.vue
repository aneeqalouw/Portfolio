<template>
  <!-- education -->
  <h2 class="lead fs-1 fw-bold d-flex justify-content-center my-3" id="head">
    Resume
  </h2>
  <br /><br />
  <div class="container shadow" id="education" v-if="$store.state.education">
    <h3 class="lead fs-3 justify-content-center fw-bold d-flex">Education</h3>
    <br /><br />
    <div class="row" v-for="edu in education" :key="edu.id">
      <div class="col-md-12 col-lg-8 offset-lg-2">
        <article class="education-item">
          <h3 class="education-date">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13.18V15.99C5 16.72 5.4 17.4 6.04 17.75L11.04 20.48C11.64 20.81 12.36 20.81 12.96 20.48L17.96 17.75C18.6 17.4 19 16.72 19 15.99V13.18L12.96 16.48C12.36 16.81 11.64 16.81 11.04 16.48L5 13.18ZM11.04 3.52003L2.61 8.12003C1.92 8.50003 1.92 9.50003 2.61 9.88003L11.04 14.48C11.64 14.81 12.36 14.81 12.96 14.48L21 10.09V16C21 16.55 21.45 17 22 17C22.55 17 23 16.55 23 16V9.59003C23 9.22003 22.8 8.89003 22.48 8.71003L12.96 3.52003C12.6645 3.36245 12.3348 3.28003 12 3.28003C11.6652 3.28003 11.3355 3.36245 11.04 3.52003Z"
                fill="black"
              />
            </svg>
          </h3>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ edu.title }}
              </h5>
              <h6 class="card-subtitle">{{ edu.place }}</h6>
              <p>{{ edu.description }}</p>
              <p class="card-text text-muted">{{ edu.year }}</p>
            </div>
          </div>
        </article>
        <br /><br />
      </div>
    </div>
  </div>
  <div v-else>
    <SpinnerComp></SpinnerComp>
  </div>
  <br /><br />
  <br /><br />

  <!-- skills -->
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
#head {
  background: -webkit-linear-gradient(rgb(245, 56, 88), rgb(249, 113, 136));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  animation: slide 1.5s forwards;
  opacity: 0;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
#education {
  width: 1000x;
  height: 500px;
  background-image: linear-gradient(
    rgb(255, 244, 248),
    pink,
    rgb(249, 162, 176)
  );
}

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
