<template>
  <div class="container text-white">
    <h2 class="display-4 fw-bold d-block d-md-flex justify-content-center" id="head">
      Get in touch
    </h2>
    <br /><br />
  
    <!-- form -->
    <div class="container">
      <div class="row d-block d-md-flex justify-content-center gap-5 ">
      <div class="col d-block" id="form">
        <h3>Send a message</h3>
        <form action="https://formspree.io/f/xayrnwry" method="post">
          <div class="row">
            <label>Name</label>
            <input type="text" placeholder="First name" required name="name" />
          </div>
          <br /><br />
          <div class="row">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email address"
              required
              name="email"
            />
          </div>
          <br /><br />
          <div class="row">
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              name="message"
            ></textarea>
            <button class="btn btn-dark my-3">Get in touch</button>
          </div>
        </form>
      </div>
      <br /><br />
      <br /><br />
  
  
      <!-- details -->
      <div class="col my-4 d-block" id="details" style="padding-top: 80px;">
        <div class="row" id="detail">
          <div class="row d-flex justify-content-center">
            <a href="mailto:aneeqalouw057@gmail.com?">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" fill="white"/>
              </svg>
            </a>
          </div>
          <p>aneeqalouw057@gmail.com</p>
        </div>
        <div class="row" id="detail">
          <div>
            <a href="tel:+27-83-424-6185">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5559 12.906L16.1009 13.359C16.1009 13.359 15.0179 14.435 12.0629 11.497C9.10788 8.55898 10.1909 7.48298 10.1909 7.48298L10.4769 7.19698C11.1839 6.49498 11.2509 5.36698 10.6339 4.54298L9.37388 2.85998C8.60988 1.83998 7.13488 1.70498 6.25988 2.57498L4.68988 4.13498C4.25688 4.56698 3.96688 5.12498 4.00188 5.74498C4.09188 7.33198 4.80988 10.745 8.81388 14.727C13.0609 18.949 17.0459 19.117 18.6749 18.965C19.1909 18.917 19.6389 18.655 19.9999 18.295L21.4199 16.883C22.3799 15.93 22.1099 14.295 20.8819 13.628L18.9719 12.589C18.1659 12.152 17.1859 12.28 16.5559 12.906Z" fill="white"/>
              </svg>
            </a>
  
          </div>
          <p>+27 83 424 6185</p>
        </div>
        <div class="row" id="detail">
          <div>
            <a href="https://www.google.com/maps/d/u/0/viewer?mid=1lhs71HbZ6S6cAR6VQVrpW2dolhw&ll=-33.98215743335129%2C18.38364600000002&z=12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.148 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z" fill="white"/>
              </svg>
  
            </a>
          </div>
          <p>Cape Town, South Africa</p>
        </div>
        <br><br>
        <!-- socials -->
        <p>---socials---</p>
      </div>
  
      <br /><br />
    </div>
  
    </div>
  
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#form {
  width: 500px;
  height: 700px;
  padding: 80px;
  border: #D19D49 groove;
  

}
input{
  background: transparent;
  border: #D19D49 solid 0.5px;
}
textarea{
  background: transparent;
  border: #D19D49 solid 0.5px;
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
</style>
