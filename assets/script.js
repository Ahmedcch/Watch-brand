alert(
  "The only button that works is the Navigation button on the right. The rest of the buttons are empty buttons only for display"
);

/* Start this code is for when  Scroll Down Hide Header and when Scroll Up Showing header*/

const header = document.querySelector("header");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-10.2rem";
  }
  prevScrollpos = currentScrollPos;
};

/* End */

// (Start)make a header background-color white when i start scrolling
window.addEventListener("scroll", () => {
  header.classList.remove("active");
});
// (End)

// start play & pause video section
let video = document.getElementById("Test_Video");
let pauseButton1 = document.getElementById("PauseButton1");
let playButton1 = document.getElementById("playButton1");
function pauseButton() {
  video.pause();
  pauseButton1.style.display = "none";
  playButton1.style.display = "block";
}
function playButton() {
  video.play();
  pauseButton1.style.display = "block";
  playButton1.style.display = "none";
}
// End
// Start this code is for a watches photo slider buttons
const sliderButtonLeft = document.querySelector(".prev");
const sliderButtonRight = document.querySelector(".next");
const slides1 = document.getElementById("watcheBox1");
const slides2 = document.getElementById("watcheBox2");
const slides3 = document.getElementById("watcheBox3");
const slides4 = document.getElementById("watcheBox4");
const slides5 = document.getElementById("watcheBox5");
function prevSlide() {
  console.log("youclicked");
  slides1.style.marginLeft = "0";
  slides1.style.filter = "none";
  slides2.style.filter = "none";
  slides2.style.marginLeft = "0";
  sliderButtonRight.style.display = "block";
  sliderButtonLeft.style.display = "none";
}

function nextSlide() {
  slides1.style.marginLeft = "-190px";
  slides1.style.filter = "brightness(0.5)";
  slides2.style.filter = "brightness(0.5)";
  slides2.style.marginLeft = "-190px";
  slides2.style.zIndex = "2";
  sliderButtonLeft.style.display = "block";
  sliderButtonRight.style.display = "none";
}
// End

// Start seven section video button code
let Sevenvideo = document.getElementById("SevenTestVideo");
let SevenpauseButton1 = document.getElementById("SevenPauseButton1");
let SevenplayButton1 = document.getElementById("SevenplayButton1");
function pauseButtonSeven() {
  Sevenvideo.pause();
  SevenpauseButton1.style.display = "none";
  SevenplayButton1.style.display = "block";
}
function playButtonSeven() {
  Sevenvideo.play();
  SevenpauseButton1.style.display = "block";
  SevenplayButton1.style.display = "none";
}
// End
// Start royal section video button code
let royalVideo = document.getElementById("royalVideo");
let royalplayButton1 = document.getElementById("royalplayButton1");
function pauseButtonRoyal() {
  royalVideo.pause();
  royalplayButton1.style.display = "block";
}
function playButtonRoyal() {
  royalVideo.play();
  royalplayButton1.style.display = "none";
  royalVideo.style.display = "block";
}
// End
// Start this code is for a podcust photo slider buttons

const sliderButtonLeft2 = document.querySelector(".prev2");
const sliderButtonRight2 = document.querySelector(".next2");
const slides12 = document.getElementById("podcastBox1");
const slides22 = document.getElementById("podcastBox2");
const slideh3 = document.getElementById("podcastBox1h3");
const slidep = document.getElementById("podcastBox1p");
const slideap = document.getElementById("podcastBox1ap");

function prevSlide2() {
  // console.log("youclicked");
  slides12.style.marginLeft = "0";
  slides12.style.filter = "none";
  slides22.style.filter = "none";
  slides22.style.marginLeft = "0";
  sliderButtonRight2.style.display = "block";
  sliderButtonLeft2.style.display = "none";
  slideh3.style.color = "white";
  slidep.style.color = "white";
  slideap.style.color = "white";
}

function nextSlide2() {
  slides12.style.marginLeft = "-170px";
  slides12.style.filter = "brightness(0.5)";
  slides22.style.marginLeft = "-190px";
  slides22.style.zIndex = "2";
  sliderButtonLeft2.style.display = "block";
  sliderButtonRight2.style.display = "none";
  slideh3.style.color = "rgb(50, 50, 50)";
  slidep.style.color = "rgb(50, 50, 50)";
  slideap.style.color = "rgb(50, 50, 50)";
}
// End

//Start button for the navigation menu open and close
// const navSection = document.querySelector(".navCover");
const navSection = document.querySelector(".navCover");
const pageBody = document.querySelector("body");
function openNavBar() {
  navSection.style.display = "block";
  pageBody.style.overflow = "hidden";
}
function closeNavBar() {
  navSection.style.display = "none";
  pageBody.style.overflowY = "scroll";
}
// End
// the project is finished
