<template>
  <div class="container-fluid text-white" id="resume">
      <!-- **education -->
    <br /> <br>
    <a href="https://drive.google.com/file/d/1TLatAVZ0CFVp-glZafc_SnbyzoUda1nA/view?usp=sharing" target="_blank" class="fs-3 gap-1 d-flex justify-content-center" style="color: #D19D49">
      View CV
    </a>
    <br><br>
    <h3 class="lead display-3 justify-content-center d-flex">Education</h3>
    <div class="container">
      <br />
      <div class="my-4 w-100" style="width: 50rem;">
              <div class="p-3" id="animated-border-box">
                <h5 class="fw-bold fs-5">  
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_85_522)">
                    <path d="M3.33 8L10 12L20 6L10 0L0 6H10V8H3.33ZM0 8V16L2 13.78V9.2L0 8ZM10 20L5 17L3 15.8V9.8L10 14L17 9.8V15.8L10 20Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_85_522">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </span>
                </h5>
                <h6 class="fw-bold fs-4">Life Choices Coding Academy</h6>
                <p class="lead">Full Stack Web Development Course</p>
                <p>Achieved certificate of excellence with modules such and HTML and Javascript</p>
                <p class="card-text">2023 - 2024</p>
              </div>
        </div>
        <div class="my-4 w-100" style="width: 50rem;">
              <div class="p-3" id="animated-border-box">
                <h5 class="fw-bold fs-5">  
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_85_522)">
                    <path d="M3.33 8L10 12L20 6L10 0L0 6H10V8H3.33ZM0 8V16L2 13.78V9.2L0 8ZM10 20L5 17L3 15.8V9.8L10 14L17 9.8V15.8L10 20Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_85_522">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </span>
                </h5>
                <h6 class="fw-bold fs-4">STADIO</h6>
                <p class="lead">Film and TV Makeup Course</p>
                <p>Studied modules such as special effects makeup and entrepreneurship</p>
                <p class="card-text">2021</p>
              </div>
        </div>
        <div class="my-4 w-100" style="width: 50rem;">
              <div class="p-3" id="animated-border-box">
                <h5 class="fw-bold fs-5">  
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_85_522)">
                    <path d="M3.33 8L10 12L20 6L10 0L0 6H10V8H3.33ZM0 8V16L2 13.78V9.2L0 8ZM10 20L5 17L3 15.8V9.8L10 14L17 9.8V15.8L10 20Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_85_522">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </span>
                </h5>
                <h6 class="fw-bold fs-4">Rylands High School</h6>
                <p class="lead">National Senior Certificate</p>
                <p>Passed matric with Maths and IT</p>
                <p class="card-text">2016 - 2020</p>
              </div>
        </div>


    </div>
    <br /><br />
    <br /><br />
    <h3 class="lead display-3 justify-content-center d-flex">Experience</h3>
    <br><br>
    <div class="container">
      <div class="w-100" style="width: 50rem;" >
        <div class="p-3" id="animated-border-box" >
          <h6 class="fw-bold fs-4">LC Studio</h6>
          <p class="lead">Web Development Intern</p>
          <p>Work experience and learning journey based on web development concepts and modules</p>
          <p class="card-text">2024 - Present</p>
          </div>
      </div>
    </div>
    <br /><br />
    <br /><br />
    <!-- **skills -->
    <h2 class="display-3">Skills</h2>
  <div class="container d-flex gap-3 flex-wrap justify-content-center" v-if="$store.state.skills">
    <div v-for="skill in skills" :key="skill.id">
      <div class="row d-flex p-3" id="skills">
        <!-- <div id="animated-border-box-glow"></div> -->
        <div id="animated-border-box" class="p-3 my-3">
          <h4 class="fw-bold" >{{ skill.title }}</h4>
          <p>{{ skill.description }}</p>
        </div>
      </div>
      <br><br>
    </div> 
    <br><br>
  </div>
  <div v-else>
    <SpinnerComp></SpinnerComp>
  </div> 
  <!--  -->
  <h4 class="display-5">Soft Skills</h4>
      <div class="container d-flex gap-3 flex-wrap justify-content-center">
        <div id="animated-border-box" class="p-3 my-3" style="width: 500px;">
          <h4 class="fw-bold" >Punctual</h4>
        </div>
        <div id="animated-border-box" class="p-3 my-3" style="width: 500px;" >
          <h4 class="fw-bold" >Quick learner</h4>
        </div>
        <div id="animated-border-box" class="p-3 my-3" style="width: 500px;" >
          <h4 class="fw-bold" >Attention to detail</h4>
        </div>
        <div id="animated-border-box" class="p-3 my-3" style="width: 500px;" >
          <h4 class="fw-bold" >Perseverant</h4>
        </div>
        <div id="animated-border-box" class="p-3 my-3" style="width: 500px;" >
          <h4 class="fw-bold" >Creative</h4>
        </div>
        <div id="animated-border-box" class="p-3 my-3" style="width: 500px;" >
          <h4 class="fw-bold" >Problem solver</h4>
        </div>
      </div>
      <br><br>
      <br><br>
      <br><br>
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
  components: { 
    SpinnerComp 
  }
};
</script>

<style scoped>
#resume{
  background-color: black
}

/* **skills */
#skills{
    width: 18rem;
    height: 15rem;
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
  /* animation */
  @keyframes rotate {
      100% {
          transform: translate(-50%, -50%) rotate(1turn);
      }
  }
  /* D19D49 */
</style>
