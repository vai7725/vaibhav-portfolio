// grabbing the elements
const hamburger = document.querySelector(".hamburger");
const hamBar1 = document.querySelector(".ham-bar1");
const hamBar2 = document.querySelector(".ham-bar2");
const hamBar3 = document.querySelector(".ham-bar3");
const navbar = document.querySelector(".navbar-phone");
const navbarLinks = document.querySelector(".nav-phone-links");

// event listeners

// hamburger icon
hamburger.addEventListener("click", () => {
  if (
    !navbarLinks.classList.contains("nav-phone-links-visible") &&
    !navbar.classList.contains("navbar-phone-height") &&
    !hamBar1.classList.contains("bar1") &&
    !hamBar2.classList.contains("bar2") &&
    !hamBar3.classList.contains("bar3")
  ) {
    navbarLinks.classList.add("nav-phone-links-visible");
    navbar.classList.add("navbar-phone-height");
    hamBar1.classList.add("bar1");
    hamBar2.classList.add("bar2");
    hamBar3.classList.add("bar3");
  } else if (
    navbarLinks.classList.contains("nav-phone-links-visible") &&
    navbar.classList.contains("navbar-phone-height") &&
    hamBar1.classList.contains("bar1") &&
    hamBar2.classList.contains("bar2") &&
    hamBar3.classList.contains("bar3")
  ) {
    navbarLinks.classList.remove("nav-phone-links-visible");
    navbar.classList.remove("navbar-phone-height");
    hamBar1.classList.remove("bar1");
    hamBar2.classList.remove("bar2");
    hamBar3.classList.remove("bar3");
  }
});
