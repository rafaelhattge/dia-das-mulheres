var container = document.querySelector(".container")
/* construct manually */
var bar = new ldBar(".ldBar");
var firstClick = true;

window.addEventListener("load", function () {
    bar.set(100);
    gsap.to(".load-txt-1", .6, { opacity: 0, ease: "power2.out", delay: .7 });
    gsap.to(".load-txt-2", .6, { opacity: 1, ease: "power2.out", delay: .8  });

    // document.body.addEventListener("click", function () {
    //     if (firstClick) {
    //         gsap.to(container, 1, { opacity: 1, ease: "power2.out" });
    //         gsap.to(".loading-screen", .3, { opacity: 0, display: 'none', ease: "power2.out" });
    //         firstClick = false;
    //     }
    // })
    
})