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

// ARROW SCROLL TO ABOUT


const arrow = document.querySelector(".arrow");
arrow.addEventListener('click', () => {
  gsap.to(window , .3 , {scrollTo: "#about-section"});
})

var tlArrow = gsap.timeline({repeat: -1});
tlArrow.to('.arrow',.5, {y:10})
.to('.arrow',.5, {y:0});

// --- FIRST PAGE ---

const imgFirst = document.getElementById('img-first');
const card = document.getElementById('card');
const imgBox = document.getElementById('img-box-first');
const bgCardFirst = document.getElementById('bg-card-first');

imgFirst.addEventListener('click', () =>{
  card.classList.add('card-move');
  imgBox.classList.add('img-box-rotate');
})
bgCardFirst.addEventListener('click', () =>{
  card.classList.remove('card-move');
  imgBox.classList.remove('img-box-rotate');
})


// --- FIRST PAGE END ---
const detailsTwo = document.getElementById('details-two');
const imgBoxTwo = document.getElementById('img-box-sec');
const bgCardTwo = document.getElementById('bg-card-two');
const detailsThree = document.getElementById('details-three');
const detailsFive = document.getElementById('details-five');
const detailsSix = document.getElementById('details-six');
const imgBoxThree = document.getElementById('img-box-three');
const bgCardThree = document.getElementById('bg-card-three');

// function changeIndex() {
  
// }

function noImgOne() {
  imgBox.style.display = "none";
}
function noImgTwo() {
  imgBoxTwo.style.display = "none";
}
detailsTwo.addEventListener('click', () =>{

  imgBoxTwo.classList.add('img-box-rotate');
  imgBoxTwo.style.zIndex = "1";
  detailsFive.style.opacity = "0";
  window.setTimeout(noImgOne, 800);

})
bgCardTwo.addEventListener('click', () =>{
  imgBoxTwo.classList.remove('img-box-rotate');
  imgBoxTwo.style.zIndex = "-1";
  detailsFive.style.opacity = "1";
  imgBox.style.display = "block";
})

detailsThree.addEventListener('click', () =>{

  imgBoxThree.classList.add('img-box-rotate');
  imgBoxThree.style.zIndex = "2";
  detailsSix.style.opacity = "0";
  window.setTimeout(noImgTwo, 800);

    // imgBoxTwo.style.zIndex = "-1";
})
bgCardThree.addEventListener('click', () =>{
  imgBoxThree.classList.remove('img-box-rotate');
  imgBoxThree.style.zIndex = "-2";
  imgBoxTwo.style.display = "block";
  // imgBoxTwo.style.zIndex = "1";
  detailsSix.style.opacity = "1";
})

function unableClicks() {
  aboutSection.classList.remove('dis-click');
}
const aboutSection = document.getElementById('about-section');
aboutSection.addEventListener('click', () => {
  aboutSection.classList.add('dis-click');
  window.setTimeout(unableClicks, 1000);
})