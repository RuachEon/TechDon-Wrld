// TECHDON WRLD - Glitch & cyber effects
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.cyber-nav');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  document.querySelectorAll('.cyber-nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      nav?.classList.remove('active');
    });
  });

  // Random glitch trigger on page load
  setInterval(() => {
    document.body.classList.add('glitch-active');
    setTimeout(() => {
      document.body.classList.remove('glitch-active');
    }, 400);
  }, 8000 + Math.random() * 6000);

  // Hover glitch on cards
  document.querySelectorAll('.glitch-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('glitch-active');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('glitch-active');
    });
  });
});