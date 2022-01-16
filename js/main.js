// -- HIDE ARROW MAIN --

window.addEventListener("scroll", () => {
  if (window.scrollY < 50) {
    // gsap.set(".arrow-main", {opacity: 0});
    gsap.to(".arrow-main", 0.3, { opacity: 0 });
  } else {
    gsap.to(".arrow-main", 0.3, { opacity: 1 });
  }
});
// -- HIDE ARROW MAIN END --
// NAME ANIMATION

var tl = gsap.timeline({ paused: true });
tl.to("#name", 1, { y: "-100%" });
tl.to("#name", 1, { x: "120%" }, "frame-1");
tl.to("#surname", 1, { x: "-95%" }, "frame-1");
tl.to("#name", 1, { y: 0 });

var tlReverse = gsap.timeline({ paused: true });
tlReverse.to("#surname", 1, { y: "-100%" });
tlReverse.to("#name", 1, { x: 0 }, "frame-1");
tlReverse.to("#surname", 1, { x: 0 }, "frame-1");
tlReverse.to("#surname", 1, { y: 0 });

const firstAnim = document.querySelector("#name.first-anim");
const myName = document.getElementById("#name");

var flag = true;
function anim() {
  let windowSize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (windowSize > 1200) {
    if (!tl.isActive() && flag && !tlReverse.isActive()) {
      tl.play(0);
      flag = !flag;
    } else if (!tl.isActive() && !flag) {
      tlReverse.play(0);
      flag = !flag;
    }
  }
}

const userName = document.querySelector(".name");
userName.addEventListener("mouseenter", anim);

// ARROW SCROLL TO SELECTED SECTION

function scrollToAbout() {
  let windowSize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (windowSize > 1200) {
    gsap.to(window, 0.3, { scrollTo: "#about-section" });
  } else {
    gsap.to(window, 0.3, { scrollTo: ".about-section-mobile" });
  }
}
function scrollToProjects() {
  gsap.to(window, 0.5, { scrollTo: "#projects-wrapper" });
}
function scrollToMain() {
  gsap.to(window, 0.5, { scrollTo: "#main-view" });
}
// --- ARROW SCROLL TO SELECTED SECTION END ---

var tlArrow = gsap.timeline({ repeat: -1 });
tlArrow.to(".arrow", 0.5, { y: 10 }).to(".arrow", 0.5, { y: 0 });

// --- FIRST PAGE ---

    gsap.set("#about-section .about-left-wrapper .headline", {
      x: 0,
      opacity: 1,
    });
    gsap.set("#about-section .about-left-wrapper .hex", { x: 0, opacity: 1 });
    gsap.set("#about-section .about-left-wrapper .details", {
      x: 0,
      opacity: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about-section",
          start: "center 80%",
          end: "top bottom",
          scrub: 3,
          pin: true,
        },
      })
      .from("#about-section .about-left-wrapper .headline", 3, {
        x: -100,
        opacity: 0,
      })
      .from("#about-section .about-left-wrapper .hex", 3, {
        x: -100,
        opacity: 0,
      })
      .from("#about-section .about-left-wrapper .details", 3, {
        x: -100,
        opacity: 0,
      })
      .from("#about-section .about-right-wrapper", {
        borderLeft: "1px solid #ffffff",
        x: 20,
      })
      .from("#about-section .about-right-wrapper .headline", {
        x: 100,
        opacity: 0,
      })
      .from("#about-section .about-right-wrapper .details", {
        x: 50,
        opacity: 0,
      });

    // -- PROJECTS ANIMATIONS --
    gsap.set("#projects-wrapper .project-desc", { x: 30 });
    gsap.set("#projects-wrapper .project-view", { x: -30 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#project-1",
          start: "center 80%",
          end: "top bottom",
          scrub: 2,
          pin: true,
        },
      })
      .from("#project-1 .project-desc", { x: -20 }, "frame-1")
      .from("#project-1 .project-view", { x: 20 }, "frame-1");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#project-2",
          start: "center 80%",
          end: "top bottom",
          scrub: 2,
          pin: true,
        },
      })
      .from("#project-2 .project-desc", { x: -20 }, "frame-1")
      .from("#project-2 .project-view", { x: 20 }, "frame-1");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#project-3",
          start: "center 80%",
          end: "top bottom",
          scrub: 2,
          pin: true,
        },
      })
      .from("#project-3 .project-desc", { x: -20 }, "frame-1")
      .from("#project-3 .project-view", { x: 20 }, "frame-1");

// -- PROJECTS ANIMATIONS END --
