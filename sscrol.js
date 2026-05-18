document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.scroll-animate');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Un-observe if you want elements to stay permanently after appearing once
        // scrollObserver.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.15, // Triggers when 15% of the card is visible on screen
    rootMargin: "0px 0px -50px 0px" // Slight offset for a cleaner scrolling pop
  });

  cards.forEach(card => scrollObserver.observe(card));
});
