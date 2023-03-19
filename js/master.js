let links = document.querySelectorAll(".navbar .nav-link");

let s1 = document.querySelector("#home").offsetHeight;
let s2 = document.querySelector("#services").offsetHeight;
let s3 = document.querySelector("#projects").offsetHeight;
let s4 = document.querySelector("#about").offsetHeight;
let s5 = document.querySelector("#review").offsetHeight;
let s6 = document.querySelector("#blog").offsetHeight;
let s7 = document.querySelector("#contact").offsetHeight;

window.onscroll = function () {
  if (this.pageYOffset < s1) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[0].classList.add("active");
  } else if (this.pageYOffset > s1 && this.pageYOffset < s2 + s1) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[1].classList.add("active");
  } else if (this.pageYOffset > s2 + s1 && this.pageYOffset < s3 + s2 + s1) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[2].classList.add("active");
  } else if (
    this.pageYOffset > s3 + s2 + s1 &&
    this.pageYOffset < s4 + s3 + s2 + s1
  ) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[3].classList.add("active");
  } else if (
    this.pageYOffset > s4 + s3 + s2 + s1 &&
    this.pageYOffset < s5 + s4 + s3 + s2 + s1
  ) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[4].classList.add("active");
  } else if (
    this.pageYOffset > s5 + s4 + s3 + s2 + s1 &&
    this.pageYOffset < s6 + s5 + s4 + s3 + s2 + s1
  ) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[5].classList.add("active");
  } else {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links[6].classList.add("active");
  }
};

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
