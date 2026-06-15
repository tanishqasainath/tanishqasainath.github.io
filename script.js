/* ============================================
   TANISHQA S — Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Smooth scroll for nav links ---
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
    if (window.scrollY > heroBottom - 100) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Reveal animations (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach(el => observer.observe(el));

  // --- Reveal hero elements immediately ---
  document.querySelectorAll('.hero .reveal').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });

  // --- Footer year ---
  const yearEl = document.querySelector('.footer-year');
  if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()}`;
  }

  // --- Parallax effect on hero ornaments ---
  const ornaments = document.querySelectorAll('.hero-ornament');
  if (ornaments.length && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      ornaments.forEach((orn, i) => {
        const speed = i === 0 ? 0.05 : 0.03;
        orn.style.transform = `translate(${scrolled * speed * 0.5}px, ${scrolled * speed * -1}px)`;
      });
    }, { passive: true });
  }

  // --- Smooth section number reveal on hover ---
  document.querySelectorAll('.section-header').forEach(header => {
    const number = header.querySelector('.section-number');
    if (number) {
      header.addEventListener('mouseenter', () => {
        number.style.color = 'var(--color-accent-dark)';
      });
      header.addEventListener('mouseleave', () => {
        number.style.color = '';
      });
    }
  });

  console.log('🌸 Tanishqa — site ready');
});
