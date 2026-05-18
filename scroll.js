document.addEventListener("DOMContentLoaded", () => {
  const animatedCards = document.querySelectorAll('.scroll-animate');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Scrolling DOWN into view: Add classes to reveal and sharpen
        entry.target.classList.add('show');
      } else {
        // Scrolling UP out of view: Remove classes to hide and re-blur
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1, // Triggers quickly as soon as 10% enters/leaves the screen
    rootMargin: "-20px 0px -20px 0px" // Bounds offset to keep transitions smooth
  });

  animatedCards.forEach(card => scrollObserver.observe(card));
});
