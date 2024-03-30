<template>
  <div class="container-fluid text-white" >
      <!-- **education -->
      <br>
    <h2 class="display-4 fw-bold d-flex justify-content-center" id="head">
      Resume
    </h2>
    <br /><br />
    <div class="row">
      <download-link :pdf-url="pdfUrl" :pdf-file-name="pdfFileName"/>
    </div>
    <br><br>
    <h3 class="lead fs-1 justify-content-center d-flex">Education</h3>
    <div class="container shadow" v-if="$store.state.education">
      <br />
        <div class="my-4 w-100" v-for="edu in education" :key="edu.id" style="width: 50rem;">
              <div class="p-3" id="animated-border-box">
                <h5 class="fw-bold fs-5">
                  {{ edu.title }}
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
                <h6 class="fw-bold fs-4">{{ edu.place }}</h6>
                <p class="lead">{{ edu.description }}</p>
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
    <h2 class="display-4">Skills</h2>
    <br><br>
  <div class="container d-flex gap-3 flex-wrap justify-content-center" v-if="$store.state.skills">
    <div v-for="skill in skills" :key="skill.id">
      <div class="row d-flex p-3" id="skills">
        <!-- <div id="animated-border-box-glow"></div> -->
        <div id="animated-border-box" class="p-3 my-3">
          <h4 class="fw-bold" >{{ skill.title }}</h4>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>

  </div>
  <div v-else>
    <SpinnerComp></SpinnerComp>
  </div>
</div>
<br><br>
<br><br>
<br><br>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import DownloadLink from "@/components/DownloadLink";

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
    SpinnerComp ,
    DownloadLink
  },
  data() {
    return {
      pdfUrl: '/path/to/my/file.pdf',
      pdfFileName: 'my-pdf-file.pdf'
    };
  }
};
</script>

<style scoped>


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
</style>
