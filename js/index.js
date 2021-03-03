var container = document.querySelector(".container")
var firstClick = true;
// var bar = new ldBar(".ldBar");

var startPage = gsap.timeline({ paused: true });

startPage
    .addLabel('start')
    .to('.dia-mulher-text', .7, { scale: 1, opacity: 1, rotationZ: '0.01deg', ease: 'power2.out' }, "start+=" + .1)
    .to('.logo-text', 1, { opacity: 1, ease: 'power1.out' }, "start+=" + .1)
    .to('.phone-anim', .8, { opacity: 1, scale: 1, rotationZ: '0.01deg', ease: 'power1.out' }, "start+=" + .4)
    .to('.arrow-anim', .6, { opacity: 1, x: 0, rotationZ: '0.01deg', ease: 'back(1.8).out' }, "start+=" + .6)
    .to('.loading-text-anim', 1, { opacity: 1, ease: 'power1.out' }, "start+=" + .7)
    .to('.logo-db-anim', 1, { opacity: 1, scale: 1, rotationZ: '0.01deg', ease: 'back(1.8).out' }, "start+=" + .7)

window.addEventListener("load", function () {
    // bar.set(100);

    startPage.play();

    // document.body.addEventListener("click", function () {
    //     if (firstClick) {
    //         gsap.to(container, 1, { opacity: 1, ease: "power2.out" });
    //         gsap.to(".loading-screen", .3, { opacity: 0, display: 'none', ease: "power2.out" });
    //         firstClick = false;
    //     }
    // })
    
})