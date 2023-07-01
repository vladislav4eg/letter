gsap.registerPlugin(ScrollTrigger);
gsap.set("#ok", {opacity: 0,});
gsap.set("#okLine", {opacity: 0, strokeDasharray: 19, strokeDashoffset: 19});


const timeline = gsap.timeline({  });
timeline
	.from("#letter-wrap", {y: 200})
	.to("#letter-wrap", {y: 0, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#cursor", { duration: 0.5, scale: 0.95})
	.to("#btn-play", {duration: 1, scale: 0.97 })
	.to("#ok", {autoAlpha: 1, strokeDashoffset: 0, duration: 1, ease: "power1.out"})
	.to("#okLine", {opacity: 1, strokeDashoffset: 0, duration: 2, ease: "power1.out" })
	.to("#letter-wrap", { y: -200, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#letter-wrap", {duration: 1, opacity: 0, ease: "power2.out"})
	.to("#cursor", {duration: 0.5, scale: 1})
	.to("#btn-play", {duration: 1, scale: 1})
	.to("#letter-wrap", {y: 0})
	.to("#ok", {autoAlpha: 0, ease: "power1.out"})
	.to("#okLine", {opacity: 0, ease: "power1.out"})
	.to("#icon1", {autoAlpha: 0})
	.to("#icon2", {autoAlpha: 1})

	.from("#letter-wrap", {y: 200})
	.to("#letter-wrap", {y: 0, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#cursor", { duration: 0.5, scale: 0.95})
	.to("#btn-play", {duration: 1, scale: 0.97 })
	.to("#ok", {autoAlpha: 1, strokeDashoffset: 0, duration: 1, ease: "power1.out"})
	.to("#okLine", {opacity: 1, strokeDashoffset: 0, duration: 2, ease: "power1.out" })
	.to("#letter-wrap", { y: -200, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#letter-wrap", {duration: 1, opacity: 0, ease: "power2.out"})
	.to("#cursor", {duration: 0.5, scale: 1})
	.to("#btn-play", {duration: 1, scale: 1})
	.to("#letter-wrap", {y: 0})
	.to("#ok", {autoAlpha: 0, ease: "power1.out"})
	.to("#okLine", {opacity: 0, ease: "power1.out"})
	.to("#icon2", {autoAlpha: 0})
	.to("#icon3", {autoAlpha: 1})

	.from("#letter-wrap", {y: 200})
	.to("#letter-wrap", {y: 0, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#cursor", { duration: 0.5, scale: 0.95})
	.to("#btn-play", {duration: 1, scale: 0.97 })
	.to("#ok", {autoAlpha: 1, strokeDashoffset: 0, duration: 1, ease: "power1.out"})
	.to("#okLine", {opacity: 1, strokeDashoffset: 0, duration: 2, ease: "power1.out" })
	.to("#letter-wrap", { y: -200, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#letter-wrap", {duration: 1, opacity: 0, ease: "power2.out"})
	.to("#cursor", {duration: 0.5, scale: 1})
	.to("#btn-play", {duration: 1, scale: 1})
	.to("#letter-wrap", {y: 0})
	.to("#ok", {autoAlpha: 0, ease: "power1.out"})
	.to("#okLine", {opacity: 0, ease: "power1.out"})
	.to("#icon3", {autoAlpha: 0})
	.to("#icon4", {autoAlpha: 1})

	.from("#letter-wrap", {y: 200})
	.to("#letter-wrap", {y: 0, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#cursor", { duration: 0.5, scale: 0.95})
	.to("#btn-play", {duration: 1, scale: 0.97 })
	.to("#ok", {autoAlpha: 1, strokeDashoffset: 0, duration: 1, ease: "power1.out"})
	.to("#okLine", {opacity: 1, strokeDashoffset: 0, duration: 2, ease: "power1.out" })
	.to("#letter-wrap", { y: -200, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#letter-wrap", {duration: 1, opacity: 0, ease: "power2.out"})
	.to("#cursor", {duration: 0.5, scale: 1})
	.to("#btn-play", {duration: 1, scale: 1})
	.to("#letter-wrap", {y: 0})
	.to("#ok", {autoAlpha: 0, ease: "power1.out"})
	.to("#okLine", {opacity: 0, ease: "power1.out"})
	.to("#icon4", {autoAlpha: 0})
	.to("#icon5", {autoAlpha: 1})


	.from("#letter-wrap", {y: 200})
	.to("#letter-wrap", {y: 0, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#cursor", { duration: 0.5, scale: 0.95})
	.to("#btn-play", {duration: 1, scale: 0.97 })
	.to("#ok", {autoAlpha: 1, strokeDashoffset: 0, duration: 1, ease: "power1.out"})
	.to("#okLine", {opacity: 1, strokeDashoffset: 0, duration: 2, ease: "power1.out" })
	.to("#letter-wrap", { y: -200, duration: 1, opacity: 1, ease: "power2.out"})
	.to("#letter-wrap", {duration: 1, opacity: 0, ease: "power2.out"})
	.to("#cursor", {duration: 0.5, scale: 1})
	.to("#btn-play", {duration: 1, scale: 1})
	.to("#letter-wrap", {y: 0})
	.to("#ok", {autoAlpha: 0, ease: "power1.out"})
	.to("#okLine", {opacity: 0, ease: "power1.out"})
	.to("#icon5", {autoAlpha: 0})
	.to("#icon6", {autoAlpha: 1})

ScrollTrigger.create({
  animation: timeline, 
  trigger: ".content",
  start: "0% 0%",
	end: "100%+=" + timeline.duration() * 10 + "0%",
  scrub: 1, 
	pin: '.content',
});

