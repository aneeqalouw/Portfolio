<template>
	<header>
		<div class="header-content">
			<h2>Hello world, I'm <span>|Aneeqa</span></h2>
			<p class="lead">Aspiring Web Developper</p>
      <router-link to="/projects">
        <button>Check out my Work -></button>
      </router-link>
      <br><br>
      <br><br>
      <div class="links">
      <div class="row">
        <div class="col">
          <a href="https://www.instagram.com/that.malay.chick?igsh=dzk4ZTN5cDdrNHpt">
            <img src="https://drive.google.com/uc?id=19QOp-EEIB-9huNFbfH2Ke9r8J45wyXf_" alt="Instagram">
          </a>
        </div>
        <div class="col">
          <a href ="https://www.linkedin.com/in/aneeqa-louw-2684411ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src="https://drive.google.com/uc?id=1rHNVhesQg6hFYyCPgbrRKWFaH55v285l" alt="Linkedin">
          </a>
        </div>
        <div class="col">
          <a href="https://www.facebook.com/profile.php?id=100083356901831&mibextid=kFxxJD" target="_blank">
            <img src="https://drive.google.com/uc?id=1wXWZr85x_La55A8wa43baSLTTqxKW5Hn" alt="Facebook">
          </a>
        </div>
      </div>
    </div>
		</div>
	</header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

header {
	height: 100vh;
	width: 100%;
	background-image: linear-gradient(white, pink, pink);
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	background-attachment: fixed;
}

header .header-content {
	position: relative;
	color: #010101;
	text-align: center;
}
header h2 {
	font-size: 3em;
	margin-bottom: 10px;
	font-weight: 1000;
}
header h2 span {
	color: #dd1b52;
}
header button {
	border: 2px solid #0a0a0a;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 1.2em;
	background-color: transparent;
	color: #090909;
}
header button:hover {
	-webkit-transition: all .5s;
	transition: all .5s;
	background-color: #ad1c4c;
	border-color: #ad1c4c;
  color: antiquewhite;

}
img{
  width: 30px;
  height: 30px;
}

</style>
