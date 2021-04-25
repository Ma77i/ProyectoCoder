
ScrollReveal().reveal('.headline',{
  duration: 2500
});

var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause() {
  if (count == 0){
    count = 1;
    audio.play();
  }
  else {
    count = 0;
    audio.pause();
  }
}



var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

