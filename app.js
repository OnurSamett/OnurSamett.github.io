// ─── Main App Entry ───
import { initCursor }       from './components/cursor.js';
import { renderNav }        from './components/nav.js';
import { renderHero }       from './components/hero.js';
import { renderMarquee }    from './components/marquee.js';
import { renderAbout }      from './components/about.js';
import { renderExperience } from './components/experience.js';
import { renderProjects }   from './components/projects.js';
import { renderSkills }     from './components/skills.js';
import { renderContact }    from './components/contact.js';
import { renderFooter }     from './components/footer.js';
import { onLangChange }     from './data/i18n.js';

// ─── Render All Components ───
function init() {
  renderNav();
  renderHero();
  renderMarquee();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();

  // Init custom cursor (desktop only)
  if (window.innerWidth > 768) {
    initCursor();
  }

  // Scroll reveal observer
  initScrollReveal();

  // Re-observe newly rendered elements after language change
  onLangChange(() => {
    // Small delay to let DOM update
    requestAnimationFrame(() => {
      initScrollReveal();
      // Re-init cursor hover detection
      if (window.innerWidth > 768) {
        setupCursorHovers();
      }
    });
  });
}

// ─── Scroll Reveal ───
let observer;
function initScrollReveal() {
  // Disconnect old observer
  if (observer) observer.disconnect();

  const els = document.querySelectorAll('.rv');
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('on');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  els.forEach(el => observer.observe(el));
}

// ─── Cursor hover re-setup ───
function setupCursorHovers() {
  const ring = document.getElementById('c-ring');
  if (!ring) return;
  const interactiveEls = document.querySelectorAll('a, button, .sp, .exp-card, .pc, .nav-toggle, .cert-toggle, .ctl, .foc-c, .ic, .lang-opt');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('link'));
    el.addEventListener('mouseleave', () => ring.classList.remove('link'));
  });
}

// ─── Bootstrap ───
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
