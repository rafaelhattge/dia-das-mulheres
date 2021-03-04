var container = document.querySelector(".container")
var firstClick = true;

var startPage = gsap.timeline({ paused: true });


startPage
    .addLabel('start')
    .to('.logo-db-anim', 1, { opacity: 1, scale: 1, rotationZ: '0.01deg', ease: 'back(1.8).out' }, "start+=" + .3)
    
    .to('.text-anima', 1, { opacity: 1, y: 0, ease: 'power2.out', stagger: .2 }, "start+=" + .3)

    .to('.phone-anim', .8, { opacity: 1, scale: 1, rotationZ: '0.01deg', ease: 'power1.out' }, "start+=" + .4)
    .to('.arrow-anim', .6, { opacity: 1, x: 0, rotationZ: '0.01deg', ease: 'back(1.8).out' }, "start+=" + .6)
    .to('.arrow-anim', 1, { x: 4, repeat: 10, yoyo: true, ease: 'none' }, "start+=" + 1.2)

window.addEventListener("load", function () {
    startPage.play();
})