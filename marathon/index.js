document.addEventListener("DOMContentLoaded", function () {
  var playButton1 = document.getElementById("play-video1");
  var playButton2 = document.getElementById("play-video2");
  var video1 = document.getElementById("video1");
  var video2 = document.getElementById("video2");
  //click  on button change the color  click those button
  var button11 = document.getElementById("btn-11");
  var button12 = document.getElementById("btn-12");
  var button13 = document.getElementById("btn-13");
  var button14 = document.getElementById("btn-14");
  // change the color this card
  var cardColor = document.getElementById("color-1");

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

  button11.addEventListener("click", () => {
    cardColor.style.backgroundColor = "red";
    button11.style.backgroundColor = "red";
  });
  button12.addEventListener("click", () => {
    cardColor.style.backgroundColor = "green";
    button12.style.backgroundColor = "green";
  });
  button13.addEventListener("click", () => {
    cardColor.style.backgroundColor = "yellow";
    button13.style.backgroundColor = "yellow";
  });
  button14.addEventListener("click", () => {
    cardColor.style.backgroundColor = "blue";
    button14.style.backgroundColor = "blue";
  });
});

function changeTabColor(tabNumber) {
  // Remove the "active-tab" class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active-tab"));

  // Add the "active-tab" class to the clicked tab
  const tab = document.getElementById(`tab${tabNumber}`);
  tab.classList.add("active-tab");

  // Hide all tab content
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => content.classList.remove("active"));

  // Show the corresponding tab content
  const content = document.getElementById(`content${tabNumber}`);
  content.classList.add("active");
}
