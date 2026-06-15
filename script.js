document.addEventListener('DOMContentLoaded', () => {

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Scroll-based nav background ---
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');

  const updateNav = () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    nav.classList.toggle('nav-solid', window.scrollY > heroBottom - 100);
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Reveal animations ---
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // --- Reveal hero elements immediately ---
  document.querySelectorAll('.hero .reveal').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 80);
  });

  // --- Footer year ---
  const yearEl = document.querySelector('.footer-year');
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()}`;
});
