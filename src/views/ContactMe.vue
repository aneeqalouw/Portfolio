<template>
  <div class="container text-white">
    <h2 class="display-4 fw-bold d-block d-md-flex justify-content-center" id="head">
      Contact me
    </h2>
    <br /><br />
  
    <!-- form -->
    <div class="container">
      <div class="row d-block d-md-flex justify-content-center gap-5 ">
      <div class="col d-block" id="form">
        <h3>Send a message</h3>
        <br><br>
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
            <button class="btn btn-dark my-4" id="send">Get in touch</button>
          </div>
        </form>
      </div>
      <br /><br />
      <br /><br />
  
  
      <!-- details -->
      <div class="col my-5" id="details" >
        <h4>Get in touch</h4>
        <br><br>
        <div class="row" id="detail">
          <div class="row">
            <a class="d-flex gap-2 justify-content-center" href="mailto:aneeqalouw057@gmail.com?" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" fill="white"/>
              </svg>
              <p>aneeqalouw057@gmail.com</p>
            </a>
          </div>
        </div>
        <div class="row" id="detail">
          <div>
            <a class="d-flex gap-2 justify-content-center" href="tel:+27-83-424-6185" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5559 12.906L16.1009 13.359C16.1009 13.359 15.0179 14.435 12.0629 11.497C9.10788 8.55898 10.1909 7.48298 10.1909 7.48298L10.4769 7.19698C11.1839 6.49498 11.2509 5.36698 10.6339 4.54298L9.37388 2.85998C8.60988 1.83998 7.13488 1.70498 6.25988 2.57498L4.68988 4.13498C4.25688 4.56698 3.96688 5.12498 4.00188 5.74498C4.09188 7.33198 4.80988 10.745 8.81388 14.727C13.0609 18.949 17.0459 19.117 18.6749 18.965C19.1909 18.917 19.6389 18.655 19.9999 18.295L21.4199 16.883C22.3799 15.93 22.1099 14.295 20.8819 13.628L18.9719 12.589C18.1659 12.152 17.1859 12.28 16.5559 12.906Z" fill="white"/>
            </svg>
            <p>+27 83 424 6185</p>
            </a>
  
          </div>
        </div>
        <div class="row" id="detail">
          <div>
            <a class="d-flex gap-2 justify-content-center" href="https://www.google.com/maps/d/u/0/viewer?mid=1lhs71HbZ6S6cAR6VQVrpW2dolhw&ll=-33.98215743335129%2C18.38364600000002&z=12" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.148 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z" fill="white"/>
              </svg>
              <p>Cape Town, South Africa</p>
            </a>
          </div>
        </div> <br>

        
        <!-- **socials -->
        <div class="row w-25 d-flex justify-content-center" id="line"></div>
        <div class="row d-inline">
          <a href="https://www.linkedin.com/in/aneeqa-louw-2684411ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.41 0.000139831H1.47C1.27958 -0.00250479 1.0905 0.0323873 0.913566 0.102824C0.73663 0.17326 0.575303 0.27786 0.438797 0.410652C0.302292 0.543443 0.193281 0.701824 0.117992 0.876749C0.0427024 1.05167 0.00260839 1.23972 0 1.43014V18.5701C0.00260839 18.7606 0.0427024 18.9486 0.117992 19.1235C0.193281 19.2985 0.302292 19.4568 0.438797 19.5896C0.575303 19.7224 0.73663 19.827 0.913566 19.8975C1.0905 19.9679 1.27958 20.0028 1.47 20.0001H18.41C18.6004 20.0028 18.7895 19.9679 18.9664 19.8975C19.1434 19.827 19.3047 19.7224 19.4412 19.5896C19.5777 19.4568 19.6867 19.2985 19.762 19.1235C19.8373 18.9486 19.8774 18.7606 19.88 18.5701V1.43014C19.8774 1.23972 19.8373 1.05167 19.762 0.876749C19.6867 0.701824 19.5777 0.543443 19.4412 0.410652C19.3047 0.27786 19.1434 0.17326 18.9664 0.102824C18.7895 0.0323873 18.6004 -0.00250479 18.41 0.000139831ZM6.03 16.7401H3.03V7.74014H6.03V16.7401ZM4.53 6.48014C4.11626 6.48014 3.71947 6.31578 3.42691 6.02323C3.13436 5.73067 2.97 5.33388 2.97 4.92014C2.97 4.5064 3.13436 4.10961 3.42691 3.81705C3.71947 3.5245 4.11626 3.36014 4.53 3.36014C4.7497 3.33522 4.97218 3.35699 5.18288 3.42402C5.39357 3.49105 5.58774 3.60183 5.75266 3.7491C5.91757 3.89637 6.04953 4.07682 6.13987 4.27862C6.23022 4.48043 6.27692 4.69904 6.27692 4.92014C6.27692 5.14124 6.23022 5.35985 6.13987 5.56166C6.04953 5.76346 5.91757 5.94391 5.75266 6.09118C5.58774 6.23845 5.39357 6.34923 5.18288 6.41626C4.97218 6.48329 4.7497 6.50505 4.53 6.48014ZM16.85 16.7401H13.85V11.9101C13.85 10.7001 13.42 9.91014 12.33 9.91014C11.9927 9.91261 11.6642 10.0184 11.3888 10.2133C11.1135 10.4082 10.9045 10.6828 10.79 11.0001C10.7117 11.2352 10.6778 11.4827 10.69 11.7301V16.7301H7.69V7.73014H10.69V9.00014C10.9625 8.52725 11.3589 8.13766 11.8364 7.87334C12.314 7.60902 12.8546 7.47999 13.4 7.50014C15.4 7.50014 16.85 8.79014 16.85 11.5601V16.7401Z" fill="#F8F8F8"/>
            </svg>
          </a>
          <a href="https://github.com/aneeqalouw">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.00007C9.11346 0.970743 6.33338 2.08868 4.27073 4.1082C2.20809 6.12772 1.03166 8.88356 1 11.7701C1.01112 14.0512 1.74494 16.2702 3.09606 18.1082C4.44718 19.9462 6.34607 21.3088 8.52 22.0001C9.07 22.1001 9.27 21.7701 9.27 21.4801V19.6501C6.21 20.3001 5.56 18.2101 5.56 18.2101C5.3563 17.554 4.92323 16.9931 4.34 16.6301C3.34 15.9701 4.42 15.9801 4.42 15.9801C4.76565 16.0263 5.09635 16.1502 5.38731 16.3424C5.67826 16.5346 5.92192 16.7902 6.1 17.0901C6.41033 17.6282 6.91953 18.023 7.51801 18.1894C8.11649 18.3559 8.75639 18.2807 9.3 17.9801C9.35591 17.4325 9.60389 16.9223 10 16.5401C7.56 16.2701 5 15.3501 5 11.2201C4.97818 10.1428 5.37624 9.09919 6.11 8.31008C5.77583 7.38514 5.81529 6.36639 6.22 5.47007C6.22 5.47007 7.15 5.18008 9.22 6.57008C11.0219 6.08991 12.9181 6.08991 14.72 6.57008C16.82 5.18008 17.72 5.47007 17.72 5.47007C18.1247 6.36639 18.1642 7.38514 17.83 8.31008C18.5808 9.08472 19.0004 10.1213 19 11.2001C19 15.3401 16.42 16.2501 14 16.5201C14.265 16.7773 14.4697 17.0901 14.5994 17.4359C14.729 17.7818 14.7805 18.152 14.75 18.5201V21.4701C14.75 21.8201 14.95 22.1001 15.5 21.9901C17.6678 21.2945 19.5603 19.9316 20.9072 18.0962C22.2541 16.2608 22.9866 14.0467 23 11.7701C22.9683 8.88356 21.7919 6.12772 19.7293 4.1082C17.6666 2.08868 14.8865 0.970743 12 1.00007Z" fill="#F8F8F8"/>
            </svg>
          </a>
        </div>
        <div class="row w-25 d-flex justify-content-center" id="line"></div>
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

#form {
  width: 500px;
  height: 770px;
  padding: 80px;
  border: white groove;
  background-color: black;
  

}
input{
  background: transparent;
  border: white solid 0.5px;
}
textarea{
  background: transparent;
  border: white solid 0.5px;
}
a{
  text-decoration: none;
  color: white;
}
#line{
  height: 2px;
  background-color: white;
  margin-left: 37%;
  margin-block: 10px;
}
#send:hover{
  background-color:#D19D49 ;
}
</style>
