<template>
  <div class="container my-5 text-white" v-if="$store.state.testimonials">
    <h2 class="fs-1 fw-bold d-flex justify-content-center" id="head">
      What others have to say
    </h2>
    <br /><br />
    <br /><br />
    <section
      class="d-flex justify-content-center justify-content-evenly gap-5 flex-wrap my-4"
    >
      <div
        class="row"
        v-for="testimonial in testimonials"
        :key="testimonial.name"
      >
        <div class="w-100" id="box">
          <img :src="testimonial.profile" alt="profile" />
          <h5>{{ testimonial.name }} {{ testimonial.surname }}</h5>
          <br /><br />
          <span style="float: left;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011C3 9.511 5.457 6.374 9.03 4.823L9.923 6.201C6.588 8.005 5.936 10.346 5.676 11.822C6.213 11.544 6.916 11.447 7.605 11.511C9.409 11.678 10.831 13.159 10.831 15C10.831 15.9283 10.4623 16.8185 9.80587 17.4749C9.1495 18.1312 8.25926 18.5 7.331 18.5C6.81766 18.4955 6.31034 18.389 5.83856 18.1866C5.36679 17.9841 4.93999 17.6899 4.583 17.321ZM14.583 17.321C13.553 16.227 13 15 13 13.011C13 9.511 15.457 6.374 19.03 4.823L19.923 6.201C16.588 8.005 15.936 10.346 15.676 11.822C16.213 11.544 16.916 11.447 17.605 11.511C19.409 11.678 20.831 13.159 20.831 15C20.831 15.9283 20.4623 16.8185 19.8059 17.4749C19.1495 18.1312 18.2593 18.5 17.331 18.5C16.8177 18.4955 16.3103 18.389 15.8386 18.1866C15.3668 17.9841 14.94 17.6899 14.583 17.321Z" fill="#D19D49"/>
            </svg>
          </span>
          <p>{{ testimonial.quotes }}</p>
          <span style="float: right;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4169 6.679C20.4469 7.773 20.9999 9 20.9999 10.989C20.9999 14.489 18.5439 17.626 14.9699 19.177L14.0769 17.799C17.4119 15.995 18.0639 13.654 18.3249 12.178C17.7879 12.456 17.0849 12.553 16.3949 12.489C14.5909 12.322 13.1689 10.841 13.1689 9C13.1689 8.07174 13.5377 7.1815 14.194 6.52513C14.8504 5.86875 15.7407 5.5 16.6689 5.5C17.7419 5.5 18.7689 5.99 19.4169 6.679ZM9.41692 6.679C10.4469 7.773 10.9999 9 10.9999 10.989C10.9999 14.489 8.54392 17.626 4.96992 19.177L4.07692 17.799C7.41192 15.995 8.06392 13.654 8.32392 12.178C7.78692 12.456 7.08392 12.553 6.39492 12.489C4.59092 12.323 3.16992 10.842 3.16992 9C3.16992 8.07174 3.53867 7.1815 4.19505 6.52513C4.85143 5.86875 5.74166 5.5 6.66992 5.5C7.74292 5.5 8.76992 5.99 9.41792 6.679" fill="#D19D49"/>
            </svg>
          </span>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <SpinnerComp></SpinnerComp>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials;
        },
    },
    mounted() {
        this.$store.dispatch("fetchTestimonials");
    },
    components: { SpinnerComp }
};
</script>

<style scoped>
#head {
  animation: slide 1.5s forwards ;
}
img[alt="profile"] {
  width: 10rem;
  height: 10rem;
}
#box {
  /* width: 30rem;
  padding: 10px; */
  border: groove #D19D49;
}
.quote2{
    position: relative;
    float: right;
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
