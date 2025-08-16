// Smooth scroll for nav and buttons
document.querySelectorAll('nav a, .btn').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero text fade-in
document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.animate-text');
  setTimeout(() => {
    heroText.style.transition = 'opacity 2s ease-in-out';
    heroText.style.opacity = '1';
  }, 500);
});
