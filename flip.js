var button = document.querySelector('.button');
var left = document.getElementById('left');
var cover = document.getElementById('cover');


button.addEventListener('click',function(){
    left.classList.toggle('is-flipped-left');
    cover.classList.toggle('is-flipped-cover');
    var audio = new Audio('FlightSong.mp3');
    audio.play();
    document.getElementById("myAudio").play();
});
