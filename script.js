// Animate products on scroll
const products = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 0.6s ease-out';
    }
  });
}, { threshold: 0.2 });

products.forEach(card => {
  observer.observe(card);
});
