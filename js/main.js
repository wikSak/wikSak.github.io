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
const myName = document.querySelector("#name");
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
