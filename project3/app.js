let hero = document.querySelector(".hero");
let silder = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();
//parameter1要控制對象

time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    silder,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);

//讓整個網站的enter key都無法使用
window.addEventListener("keypress", (e) => {
  console.log(e);
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//防止FORMS內部BUTTON送出表單
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//45646546464
