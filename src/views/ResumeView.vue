<template>
  <!-- education -->
  <h2 class="lead fs-1 fw-bold d-flex justify-content-center my-3" id="head">
    Resume
  </h2>
  <br /><br />
  <h3 class="lead fs-3 justify-content-center fw-bold d-flex">Education</h3>
  <div class="container shadow" id="education">
    <div class="row" v-for="edu in education" :key="edu.id">
      <div class="col-md-12 col-lg-8 offset-lg-2">
        <article class="education-item">
          <h3 class="education-date">{{ edu.year }}</h3>
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
  <br /><br />
  <br /><br />

  <!-- skills -->
  <h2 class="lead fs-3 justify-content-center fw-bold d-flex">Skills</h2>
  <br><br>
  <section class="d-flex justify-content-center justify-content-evenly">
  <div class="row " v-for="skill in skills" :key="skill.id">
    <div class="flip-card" style="width: 15rem; height: 15rem;">
      <div class="flip-card-inside">
        <div class="flip-card-front">
          <img
            :src="skill.image"
            alt="icon"
          />
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
  <br /><br />
</template>

<script>
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
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
#head {
  background: -webkit-linear-gradient(rgb(245, 56, 88), rgb(249, 113, 136));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
#education {
  width: 1000x;
  height: 500px;
}

img[alt='icon']{
    width: 200px;
    height: 200px;
    mix-blend-mode: darken;
}

.flip-card {
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


.flip-card-front, .flip-card-behind{
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
