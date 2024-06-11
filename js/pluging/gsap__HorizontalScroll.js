import { gsap, ScrollToPlugin, ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#work"),
  panelsContainer = document.querySelector("#work-container"),
  tween;
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    console.log("click");
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = cont.scrollWidth - innerWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  });
});

/* work */
const cont = document.querySelector("#work-container");
const work = gsap.utils.toArray("#work-container .work");

tween = gsap.to(work, {
  x: () => -1 * (cont.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#work-container",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont.scrollWidth - innerWidth),
    onUpdate: (self) => {
    //  console.log(self.progress)
    }
  }
});


/***上色背景***/ 
const workbg = document.getElementById('workbg');
function color0(){
  workbg.removeAttribute('class');
  // console.log("boxbg0 enter")
}
function color1(){
  workbg.removeAttribute('class');
  workbg.classList.add('boxbg1');
  // console.log("boxbg1 enter")
}

function color2(){
  workbg.removeAttribute('class');
  workbg.classList.add('boxbg2');

  // console.log("boxbg2 enter")
}
function color3(){
  workbg.removeAttribute('class');

  workbg.classList.add('boxbg3');
  // console.log("boxbg3 enter")
}
function color4(){
  workbg.removeAttribute('class');
  workbg.classList.add('boxbg4');
  // console.log("boxbg4 enter")
}
function color5(){
  workbg.removeAttribute('class');
  workbg.classList.add('boxbg5');
  // console.log("boxbg5 enter")
}
/*********/
ScrollTrigger.create({
  trigger: ".box1",
  containerAnimation: tween,
  start: "center 65%",
  end: "center 51%",
  // markers:true,

  onEnter: () => color1()
  // onEnterBack: () => color0()
});

ScrollTrigger.create({
  trigger: ".box2",
  containerAnimation: tween,
  start: "center 65%",
  end: "center 51%",

  onEnter: () => color2(),
  onEnterBack: () => color1()

});


ScrollTrigger.create({
  trigger: ".box3",
  containerAnimation: tween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => color3(),
  onEnterBack: () => color2()

});

ScrollTrigger.create({
  trigger: ".box4",
  containerAnimation: tween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => color4(),
  onEnterBack: () => color3()

});

ScrollTrigger.create({
  trigger: ".box5",
  containerAnimation: tween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => color5(),
  onEnterBack: () => color4(),

});

/***************/
