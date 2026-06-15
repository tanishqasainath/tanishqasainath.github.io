document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Nav background on scroll
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  const updateNav = () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    nav.classList.toggle('nav-solid', window.scrollY > heroBottom - 100);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Footer year
  const el = document.querySelector('.footer-year');
  if (el) el.textContent = `© ${new Date().getFullYear()}`;
});
