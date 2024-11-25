// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
    gsap.from("#home h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("#home p", { opacity: 0, y: 50, delay: 0.5, duration: 1 });
    gsap.from(".btn", { opacity: 0, scale: 0.8, delay: 1, duration: 1 });
  
    // About Section Animation
    gsap.from("#about h2", { opacity: 0, x: -100, scrollTrigger: "#about" });
    gsap.from("#about p", { opacity: 0, x: 100, delay: 0.3, scrollTrigger: "#about" });
  
    // Project Cards Animation
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: "#projects",
    });
  });