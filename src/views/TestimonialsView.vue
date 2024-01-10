<template>
  <div class="container my-5">
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
        <div class="shadow" id="box">
          <img :src="testimonial.profile" alt="profile" />
          <h5>{{ testimonial.name }} {{ testimonial.surname }}</h5>
          <br /><br />
          <div class="quotes">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011C3 9.511 5.457 6.374 9.03 4.823L9.923 6.201C6.588 8.005 5.936 10.346 5.676 11.822C6.213 11.544 6.916 11.447 7.605 11.511C9.409 11.678 10.831 13.159 10.831 15C10.831 15.9283 10.4623 16.8185 9.80587 17.4749C9.1495 18.1312 8.25926 18.5 7.331 18.5C6.81766 18.4955 6.31034 18.389 5.83856 18.1866C5.36679 17.9841 4.93999 17.6899 4.583 17.321ZM14.583 17.321C13.553 16.227 13 15 13 13.011C13 9.511 15.457 6.374 19.03 4.823L19.923 6.201C16.588 8.005 15.936 10.346 15.676 11.822C16.213 11.544 16.916 11.447 17.605 11.511C19.409 11.678 20.831 13.159 20.831 15C20.831 15.9283 20.4623 16.8185 19.8059 17.4749C19.1495 18.1312 18.2593 18.5 17.331 18.5C16.8177 18.4955 16.3103 18.389 15.8386 18.1866C15.3668 17.9841 14.94 17.6899 14.583 17.321Z"
                fill="black"
              />
            </svg>
          </div>
          <p>{{ testimonial.quotes }}</p>
          <div class="quote2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.417 6.679C20.447 7.773 21 9 21 10.989C21 14.489 18.544 17.626 14.97 19.177L14.077 17.799C17.412 15.995 18.064 13.654 18.325 12.178C17.788 12.456 17.085 12.553 16.395 12.489C14.591 12.322 13.169 10.841 13.169 9C13.169 8.07174 13.5377 7.1815 14.1941 6.52513C14.8505 5.86875 15.7407 5.5 16.669 5.5C17.742 5.5 18.769 5.99 19.417 6.679ZM9.41698 6.679C10.447 7.773 11 9 11 10.989C11 14.489 8.54398 17.626 4.96998 19.177L4.07698 17.799C7.41198 15.995 8.06398 13.654 8.32398 12.178C7.78698 12.456 7.08398 12.553 6.39498 12.489C4.59098 12.323 3.16998 10.842 3.16998 9C3.16998 8.07174 3.53873 7.1815 4.19511 6.52513C4.85149 5.86875 5.74173 5.5 6.66998 5.5C7.74298 5.5 8.76998 5.99 9.41798 6.679"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
#head {
  background: -webkit-linear-gradient(rgb(245, 56, 88), rgb(249, 113, 136));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
img[alt="profile"] {
  width: 10rem;
  height: 10rem;
}
#box {
  width: 23rem;
  padding: 50px;
}
.quote2{
    position: relative;
    float: right;
}
</style>
