<template>
	<div class="d-block d-md-flex justify-content-center align-items-center" id="container">
		<div class="main-heading">
			<h1 class="text-light">Hello world, I'm <span class="fw-bold">|Aneeqa</span> <br> <br>
				<span>
					<p class="fs-5">Aspiring web developer</p>
				</span>
			</h1>
		</div>
	</div>

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#container {
  height: 100vh;
  width: 100%;
  background: linear-gradient(132deg, #fcfbfb,#ff0e7b, #fc1384,#fc2e7d,#f8b3fb,#f9b7d7);
  background-size: 400% 400%;
  animation: BackgroundGradient 15s ease infinite;
}

h1 {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* transform: translateX(-50%) translateY(-50%); */
  color: #030303;
  font-weight: 400;
  text-align: center;
  font-size: 2em;
  padding: 5px;
}

/* header {
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
} */

/* header .header-content {
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
} */

/* animations */
@keyframes BackgroundGradient {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

</style>
