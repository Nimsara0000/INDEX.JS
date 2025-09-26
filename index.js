<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>❇️NIMAH FAMILY FREE BOT❇️</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{
  font-family:'Poppins',sans-serif;
  color:#fff;
  overflow-x:hidden;
  background-color:#000;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  position:relative;
  transition: background 0.5s,color 0.5s;
}

/* Background Video */
.video-background{
  position:fixed;
  top:0; left:0;
  width:100%; height:100%;
  object-fit:cover;
  z-index:-1;
}

/* Loading Screen */
#loading-screen{
  position:fixed;
  top:0; left:0;
  width:100%; height:100%;
  background:rgba(0,0,0,0.8);
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  z-index:9999;
}
.spinner{
  width:80px;
  height:80px;
  border:6px solid transparent;
  border-top:6px solid #0066ff;
  border-radius:50%;
  animation: spin 1s linear infinite;
  position:relative;
}
.spinner::after{
  content:'';
  position:absolute;
  width:100%;
  height:100%;
  border:6px solid transparent;
  border-bottom-color:#00ccff;
  border-radius:50%;
  animation: spin 1.5s linear infinite;
}
@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
.loading-text{
  margin-top:20px;
  font-size:20px;
  color:#fff;
  font-weight:bold;
  text-shadow:0 0 8px #00aaff;
}
.progress-container{
  width:80%;
  background:#444;
  margin-top:30px;
  height:20px;
  border-radius:10px;
  overflow:hidden;
}
.progress-bar{
  height:100%;
  width:0;
  background:#0066ff;
  text-align:center;
  line-height:20px;
  color:white;
  border-radius:10px;
}

/* Header */
header{
  padding:20px;
  text-align:center;
  backdrop-filter:blur(10px);
  box-shadow:0 4px 10px rgba(0,0,0,0.7);
  position:relative;
  border:3px solid transparent;
  border-image: linear-gradient(90deg,#00c0ff,#0066ff,#3399ff,#00ccff) 1;
  animation:borderGlowHeader 3s infinite alternate;
}
header h1{
  font-size:36px;
  font-weight:700;
  background:linear-gradient(90deg,#00c0ff,#0066ff,#3399ff,#00ccff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  text-shadow:0 2px 10px rgba(0,102,255,0.6);
  animation:textGlow 2s infinite alternate;
}
.info{
  font-size:14px;
  color:#bbb;
  margin-top:5px;
}

/* Buttons */
.button-container{
  display:flex;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
  margin:40px 0;
  opacity:0;
  animation: showButtons 2s forwards;
  animation-delay:5s;
}
.button{
  padding:20px 40px;
  background:linear-gradient(135deg,#0066ff,#00ccff,#3399ff,#0033cc);
  color:#fff;
  border:2px solid #fff;
  font-weight:bold;
  font-size:18px;
  text-transform:uppercase;
  text-align:center;
  box-shadow:0 8px 20px rgba(0,0,0,0.5);
  transition:transform 0.3s ease,box-shadow 0.3s ease,background 0.4s ease;
  display:flex;
  align-items:center;
  gap:10px;
  background-size:300% 300%;
  animation:gradientAnimation 5s ease infinite;
  border-radius:12px;
  text-decoration:none;
}
.button i{font-size:18px;}
.button:hover{transform:scale(1.1);box-shadow:0 12px 30px rgba(0,153,255,0.8);}

@keyframes gradientAnimation{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
@keyframes showButtons{from{opacity:0;transform:translateY(50px);}to{opacity:1;transform:translateY(0);}}

/* Footer */
footer{
  width:100%;
  padding:15px;
  background:rgba(0,0,0,0.7);
  text-align:center;
  color:#00ccff;
  text-shadow:0 0 10px #00ccff,0 0 20px #00ccff,0 0 40px #00ccff;
  border-top:2px solid #00ccff;
  position:fixed;
  bottom:0;
  left:0;
  animation:borderGlow 2s infinite alternate;
  display:flex;
  flex-direction:column;
  align-items:center;
}
footer span{font-weight:bold; font-size:18px; margin-top:5px; background:linear-gradient(90deg,#00c0ff,#00ccff,#3399ff,#0066ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-shadow:0 0 15px #00ccff; animation:glow 2s infinite alternate;}

/* Glow animations */
@keyframes glow{from{text-shadow:0 0 5px #00ccff,0 0 15px #00ccff,0 0 30px #00ccff;}to{text-shadow:0 0 15px #00ccff,0 0 30px #00ccff,0 0 60px #00ccff;}}
@keyframes borderGlow{from{border-top:2px solid #00ccff;box-shadow:0 -2px 10px #00ccff;}to{border-top:2px solid #00ccff;box-shadow:0 -2px 20px #00ccff;}}
@keyframes textGlow{from{text-shadow:0 0 5px #00ccff,0 0 15px #00ccff;}to{text-shadow:0 0 15px #00ccff,0 0 30px #00ccff;}}
@keyframes borderGlowHeader{from{border-color:#00c0ff;}to{border-color:#00ccff;}}

/* Mode toggle */
.mode-toggle{
  position:absolute;
  top:20px; right:20px;
  font-size:22px;
  padding:10px;
  border:none;
  background:#0044aa;
  color:#fff;
  border-radius:50%;
  cursor:pointer;
}

@media (max-width:480px){
  header h1{font-size:24px;}
  .button-container{gap:10px;}
  .button{padding:15px 25px;font-size:16px;}
}
</style>

<script>
window.onload=function(){setTimeout(()=>startLoading(),1000);};
function startLoading(){
let progress=0;
const progressBar=document.getElementById('progress-bar');
const loadingScreen=document.getElementById('loading-screen');
const loadingText=document.getElementById('loading-text');
const interval=setInterval(()=>{
if(progress<100){progress+=Math.floor(Math.random()*3)+1;if(progress>100)progress=100;progressBar.style.width=`${progress}%`;loadingText.innerHTML=`Loading... ${progress}%`;
}else{clearInterval(interval);setTimeout(()=>{loadingScreen.style.display='none';fetchIPAndTime();},700);}
},60);
}
async function fetchIPAndTime(){
try{
const response=await fetch('https://ipapi.co/json/');
const data=await response.json();
document.getElementById('ip-info').innerHTML=`IP Address: ${data.ip} | Country: ${data.country_name}`;
setInterval(()=>{const now=new Date();document.getElementById('time-info').innerHTML=`Current Time: ${now.toLocaleTimeString()}`;},1000);
}catch(error){console.error('Error fetching IP:',error);}
}
function toggleMode(){
document.body.classList.toggle('light-mode');
document.getElementById('mode-toggle').textContent=document.body.classList.contains('light-mode')?'☀️':'🌙';
}
</script>
</head>

<body>

<video autoplay muted loop class="video-background">
  <source src="https://files.catbox.moe/x8t2n3.mp4" type="video/mp4">
</video>

<div id="loading-screen">
  <div class="spinner"></div>
  <div class="loading-text" id="loading-text">Loading... 0%</div>
  <div class="progress-container">
    <div id="progress-bar" class="progress-bar"></div>
  </div>
</div>

<header>
<h1>❇️NIMAH FAMILY FREE BOT❇️</h1>
<div class="info" id="ip-info">Loading IP Address...</div>
<div class="info" id="time-info">Loading Time...</div>
<button onclick="toggleMode()" id="mode-toggle" class="mode-toggle" title="Toggle Light/Dark Mode">🌙</button>
</header>

<div class="button-container">
<a href="https://nima-family-free-bot-2v-2.onrender.com/" class="button">
  <i class="fas fa-link"></i> Pair Code
</a>
<a href="https://wa.me/+94760743488?text=Hello_NIMA" class="button">
  <i class="fas fa-user-shield"></i> Contact Owner
</a>
</div>

<footer>
<span>2025 | POWERED BY LOKU NIMAH</span>
</footer>

</body>
</html>
