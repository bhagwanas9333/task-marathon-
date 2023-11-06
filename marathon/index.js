document.addEventListener("DOMContentLoaded", function () {
  var playButton1 = document.getElementById("play-video1");
  var playButton2 = document.getElementById("play-video2");
  var video1 = document.getElementById("video1");
  var video2 = document.getElementById("video2");

  playButton1.addEventListener("click", function (ev) {
    video1.src += "&autoplay=1";
    video2.src = video2.src.replace("&autoplay=1", "");
    ev.preventDefault();
  });

  playButton2.addEventListener("click", function (ev) {
    video2.src += "&autoplay=1";
    video1.src = video1.src.replace("&autoplay=1", "");
    ev.preventDefault();
  });
});
