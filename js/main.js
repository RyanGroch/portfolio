const navbar = document.querySelector(".header");
const navbarHeight = navbar.offsetHeight;
let lastScrollTop;

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop < navbarHeight) {
    navbar.classList.add("static");
    navbar.classList.remove("hidden");
    navbar.classList.remove("fixed");
  } else if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden");
    navbar.classList.remove("static");
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.add("fixed");
    navbar.classList.remove("static");
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

const projects = document.querySelectorAll(".project");
const aboutMe = document.querySelector("#about-me");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);
projects.forEach((project) => observer.observe(project));
observer.observe(aboutMe);
