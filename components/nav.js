// ─── Nav Component ───
import { NAV_LINKS, PERSONAL, UI } from '../data/content.js';
import { getLang, setLang, onLangChange } from '../data/i18n.js';

export function renderNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function render() {
    const lang = getLang();
    const links = NAV_LINKS[lang];
    const ui = UI[lang];

    nav.innerHTML = `
      <div class="nav-inner">
        <a href="#" class="nav-logo" aria-label="Ana Sayfa">
          <span class="nav-logo-dot"></span>
          <span class="nav-logo-text">${PERSONAL.shortName}</span>
        </a>

        <div style="display:flex;align-items:center;gap:20px">
          <!-- Language Toggle -->
          <div class="lang-toggle" id="lang-btn">
            <span class="lang-opt ${lang === 'tr' ? 'active' : ''}" data-lang="tr">TR</span>
            <span class="lang-opt ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</span>
          </div>

          <button class="nav-toggle" id="nav-toggle" aria-label="Menü">
            <span></span><span></span><span></span>
          </button>

          <div class="nav-links" id="nav-links">
            ${links.map(l => `<a href="${l.href}" class="nav-l">${l.label}</a>`).join('')}
            <a href="#contact" class="nav-cta">${ui.contact}</a>
          </div>
        </div>
      </div>
    `;

    // Scroll effect
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile toggle
    const toggle = document.getElementById('nav-toggle');
    const linksEl = document.getElementById('nav-links');
    if (toggle && linksEl) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        linksEl.classList.toggle('open');
      });
      linksEl.querySelectorAll('.nav-l').forEach(l => {
        l.addEventListener('click', () => {
          toggle.classList.remove('open');
          linksEl.classList.remove('open');
        });
      });
    }

    // Language toggle
    document.querySelectorAll('#lang-btn .lang-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const newLang = opt.dataset.lang;
        if (newLang !== getLang()) {
          setLang(newLang);
        }
      });
    });
  }

  render();
  onLangChange(() => render());
}
