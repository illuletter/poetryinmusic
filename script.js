const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const slideThree = document.getElementById("slideThree");
const slideFour = document.getElementById("slideFour");
const slideFive = document.getElementById("slideFive");
const slideFivePtOne = document.getElementById("slideFivePtOne");
const slideFivePtTwo = document.getElementById("slideFivePtTwo");
const slideFivePtThree = document.getElementById("slideFivePtThree");
const slideSix = document.getElementById("slideSix");
window.addEventListener("scroll", function() {
  if (window.scrollY <= 250) {
    slideOne.style.opacity = "1";
  } else {
    slideOne.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY <= 500) {
    slideTwo.style.opacity = "1";
  } else {
    slideTwo.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY <= 750) {
    slideThree.style.opacity = "1";
  } else {
    slideThree.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY <= 1000) {
    slideFour.style.opacity = "1";
  } else {
    slideFour.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY <= 1750) {
    slideFive.style.opacity = "1";
  } else {
    slideFive.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY <= 1250) {
    slideFivePtOne.style.opacity = "1";
  } else {
    slideFivePtOne.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY >= 1250 && window.scrollY <= 1500) {
    slideFivePtTwo.style.opacity = "1";
  } else {
    slideFivePtTwo.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY >= 1500 && window.scrollY <= 1750) {
    slideFivePtThree.style.opacity = "1";
  } else {
    slideFivePtThree.style.opacity = "0";
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY >= 1750) {
    slideSix.style.opacity = "1";
    slideSix.style.zIndex = "7";
  } else {
    slideSix.style.opacity = "0";
    slideSix.style.zIndex = "1";
  }
});