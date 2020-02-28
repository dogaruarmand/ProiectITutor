var myVideo = document.getElementById("canyon-video");
var h2Video = document.getElementById("video-title");
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
}
function makeBig() { 
    myVideo.width = 720; 
    h2Video.style.width = "720px"; 
}
function makeSmall() { 
    myVideo.width = 320; 
    h2Video.style.width = "320px"; 
}
function makeNormal() { 
    myVideo.width = 520; 
    h2Video.style.width = "520px"; 
}