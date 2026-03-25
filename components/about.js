// ─── About Component ───
import { INFO_CARDS, ABOUT_TEXT, UI } from '../data/content.js';
import { getLang, onLangChange } from '../data/i18n.js';
import { icon } from './icons.js';

export function renderAbout() {
  const el = document.getElementById('about');
  if (!el) return;

  function render() {
    const lang = getLang();
    const cards = INFO_CARDS[lang];
    const text = ABOUT_TEXT[lang];
    const ui = UI[lang];

    el.innerHTML = `
      <div style="max-width:var(--max-w);margin:0 auto">
        <div class="rv" style="margin-bottom:52px">
          <div class="section-tag">
            <div class="section-tag-line"></div>
            <span class="section-tag-text">${ui.profile}</span>
          </div>
          <h2 class="section-heading">${ui.whoAmI}</h2>
        </div>

        <div class="about-grid" style="display:grid;grid-template-columns:1.4fr 1fr;gap:80px;align-items:center">
          <div class="rv d1" style="display:flex;flex-direction:column;gap:18px">
            ${text.map(t => `<p style="font-size:1.1rem;color:var(--text-secondary);line-height:1.8">${t}</p>`).join('')}
          </div>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${cards.map((c, i) => `
              <div class="ic rv d${i + 1}">
                <div class="ic-icon">${icon(c.icon, 17)}</div>
                <div>
                  <div class="ic-title">${c.title}</div>
                  <div class="ic-sub">${c.sub}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  render();
  onLangChange(() => render());
}
