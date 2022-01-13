// -- HIDE ARROW MAIN --

window.addEventListener("scroll", () => {
  if (window.scrollY < 50) {
    // gsap.set(".arrow-main", {opacity: 0});
    gsap.to(".arrow-main", .3, {opacity: 0});
  } else {
    gsap.to(".arrow-main", .3, {opacity: 1});
  }
})
// -- HIDE ARROW MAIN END --
// NAME ANIMATION

var tl = gsap.timeline({ paused: true});
tl.to('#name',1, {y:-100});
tl.to('#name',1, {x:400}, "frame-1");
tl.to('#surname',1, {x:-360}, "frame-1");
tl.to('#name',1, {y:0});

var tlReverse = gsap.timeline({paused: true});
tlReverse.to('#surname',1, {y:-100});
tlReverse.to('#name',1, {x:0}, "frame-1");
tlReverse.to('#surname',1, {x:0}, "frame-1");
tlReverse.to('#surname',1, {y:0});


const firstAnim = document.querySelector("#name.first-anim");
const myName = document.getElementById("#name");
var flag = true;
function anim() {
    if (!tl.isActive() && flag && !tlReverse.isActive()) {
        tl.play(0);
        flag = !flag;
      } else if (!tl.isActive() && !flag){
        tlReverse.play(0);
        flag = !flag;
      }
}

const userName = document.querySelector('.name');
userName.addEventListener('mouseenter', anim);

// ARROW SCROLL TO SELECTED SECTION

function scrollToAbout() {
  gsap.to(window , .3 , {scrollTo: "#about-section"});
}
function scrollToProjects() {
  gsap.to(window , .5 , {scrollTo: "#projects-wrapper"});
}
function scrollToMain() {
  gsap.to(window , .5 , {scrollTo: "#main-view"});
}
// --- ARROW SCROLL TO SELECTED SECTION END ---

var tlArrow = gsap.timeline({repeat: -1});
tlArrow.to('.arrow',.5, {y:10})
.to('.arrow',.5, {y:0});

// --- FIRST PAGE ---
gsap.set("#about-section .about-left-wrapper .headline", {x: 0, opacity: 1});
gsap.set("#about-section .about-left-wrapper .hex", {x: 0, opacity: 1});
gsap.set("#about-section .about-left-wrapper .details", {x: 0, opacity: 1});

gsap.timeline({
  scrollTrigger: {
    trigger: "#about-section",
    start: "center 80%",
    end: "top bottom",
    scrub: 3,
    pin: true
  }
})
.from("#about-section .about-left-wrapper .headline", 3,{ x: -100, opacity: 0 })
.from("#about-section .about-left-wrapper .hex", 3,{ x: -100, opacity: 0 })
.from("#about-section .about-left-wrapper .details",3, { x: -100, opacity: 0})
.from("#about-section .about-right-wrapper", { borderLeft: "1px solid #ffffff", x: 20})
.from("#about-section .about-right-wrapper .headline", { x: 100, opacity: 0 })
.from("#about-section .about-right-wrapper .details", { x: 50, opacity: 0});


// const aboutClick = document.getElementById('about-click');
// const imgFirst = document.getElementById('img-first');
// const card = document.getElementById('card');
// const imgBox = document.getElementById('img-box-first');
// const bgCardFirst = document.getElementById('bg-card-first');
// function aboutClickVisible() {
//   aboutClick.style.display = "block";
// }

// imgFirst.addEventListener('click', () =>{
//   card.classList.add('card-move');
//   imgBox.classList.add('img-box-rotate');
//   aboutClick.style.display = "none";
// })
// aboutClick.addEventListener('click', () =>{
//   card.classList.add('card-move');
//   imgBox.classList.add('img-box-rotate');
//   aboutClick.style.display = "none";
// })
// bgCardFirst.addEventListener('click', () =>{
//   card.classList.remove('card-move');
//   imgBox.classList.remove('img-box-rotate');
//   window.setTimeout(aboutClickVisible, 900);
  
// })


// --- FIRST PAGE END ---
// const detailsTwo = document.getElementById('details-two');
// const imgBoxTwo = document.getElementById('img-box-sec');
// const bgCardTwo = document.getElementById('bg-card-two');
// const detailsThree = document.getElementById('details-three');
// const detailsFive = document.getElementById('details-five');
// const detailsSix = document.getElementById('details-six');
// const imgBoxThree = document.getElementById('img-box-three');
// const bgCardThree = document.getElementById('bg-card-three');



// function noImgOne() {
//   imgBox.style.display = "none";
// }
// function noImgTwo() {
//   imgBoxTwo.style.display = "none";
// }
// function ImgOne() {
//   imgBox.style.display = "block";
// }
// function ImgTwo() {
//   imgBoxTwo.style.display = "block";
// }
// detailsTwo.addEventListener('click', () =>{

//   imgBoxTwo.classList.add('img-box-rotate');
//   imgBoxTwo.style.zIndex = "1";
//   detailsFive.style.opacity = "0";
//   window.setTimeout(noImgOne, 800);

// })
// bgCardTwo.addEventListener('click', () =>{
//   imgBoxTwo.classList.remove('img-box-rotate');
//   imgBoxTwo.style.zIndex = "-1";
//   detailsFive.style.opacity = "1";
//   window.setTimeout(ImgOne, 50);
// })

// detailsThree.addEventListener('click', () =>{

//   imgBoxThree.classList.add('img-box-rotate');
//   imgBoxThree.style.zIndex = "2";
//   detailsSix.style.opacity = "0";
//   window.setTimeout(noImgTwo, 800);

// })
// bgCardThree.addEventListener('click', () =>{
//   imgBoxThree.classList.remove('img-box-rotate');
//   imgBoxThree.style.zIndex = "-2";
//   imgBoxTwo.style.display = "block";
//   detailsSix.style.opacity = "1";
//   window.setTimeout(ImgTwo, 50);
// })
// -- ABOUT SECTION DISABLE CLICKS -- 
// function unableClicks() {
//   aboutSection.classList.remove('dis-click');
// }
// const aboutSection = document.getElementById('about-section');
// aboutSection.addEventListener('click', () => {
//   aboutSection.classList.add('dis-click');
//   window.setTimeout(unableClicks, 1000);
// })

// -- CLICK ANIMATION -- 

// var tlClick = gsap.timeline({repeat: -1});
// tlClick.to('#about-click', .15 , {opacity:0, delay: .3})
// .to('#about-click',.15, {opacity:1, delay: .3});
// -- CLICK ANIMATION END -- 

// -- PROJECTS ANIMATIONS --
gsap.set(".project-desc", {x: 30});
gsap.set(".project-view", {x: -30});

gsap.timeline({
  scrollTrigger: {
    trigger: "#project-1",
    start: "center 80%",
    end: "top bottom",
    scrub: 2,
    pin: true
  },
})
  .from("#project-1 .project-desc",  { x: -20 }, "frame-1")
  .from("#project-1 .project-view", { x: 20 }, "frame-1");
  gsap.timeline({
    scrollTrigger: {
      trigger: "#project-2",
      start: "center 80%",
      end: "top bottom",
      scrub: 2,
      pin: true
    }
  })
  .from("#project-2 .project-desc",  { x: -20 }, "frame-1")
  .from("#project-2 .project-view", { x: 20 }, "frame-1");
  gsap.timeline({
    scrollTrigger: {
      trigger: "#project-3",
      start: "center 80%",
      end: "top bottom",
      scrub: 2,
      pin: true
    }
  })
  .from("#project-3 .project-desc",  { x: -20 }, "frame-1")
  .from("#project-3 .project-view", { x: 20 }, "frame-1");
  
// -- PROJECTS ANIMATIONS END --