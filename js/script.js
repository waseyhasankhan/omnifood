// const myName = "Wasey Hasan Khan";
// const h1 = document.querySelector(".heading-primary");
// const h2 = document.querySelector(".heading-secondary");
// const h3 = document.querySelector(".heading-tertiary");
// console.log(myName);
// console.log(h1);
// console.log(h2);
// console.log(h3);
// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "#f1245d";
//   h1.style.color = "#fff";
//   h1.textContent = myName;
//   h1.style.padding = "5rem";
//   alert(`Your name is ${myName}`);
// });
///////////////////////////////////////////////////
// Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      //   console.log(sectionEl);
    }
    // Mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
  //   Mobile Navigation
  const sectionHeroEl = document.querySelector(".section-hero");
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      // console.log(ent);
      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }
      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      //   In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionHeroEl);
  //   console.log(obs);
});

///////////////////////////////////////////////////
// Fixing flexbox gap missing in some Safari versions
// function checkFlexGap() {
//   const flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   const isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }

// checkFlexGap();
