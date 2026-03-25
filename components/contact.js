// ─── Contact Component ───
import { CONTACT_LINKS, UI } from '../data/content.js';
import { getLang, onLangChange } from '../data/i18n.js';
import { icon } from './icons.js';

export function renderContact() {
  const el = document.getElementById('contact');
  if (!el) return;

  function getIcon(link) {
    if (link.href.includes('mailto')) return icon('mail', 15);
    if (link.href.includes('github')) return icon('github', 15);
    if (link.href.includes('linkedin')) return icon('linkedin', 15);
    if (link.href.includes('tel')) return icon('phone', 15);
    return '';
  }

  function render() {
    const ui = UI[getLang()];

    el.innerHTML = `
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;background:radial-gradient(circle at center,rgba(37,99,235,.06) 0%,transparent 60%);pointer-events:none"></div>

      <div style="max-width:var(--max-w);margin:0 auto">
        <div class="rv">
          <div class="section-tag center">
            <div class="section-tag-line"></div>
            <span class="section-tag-text">${ui.letsChat}</span>
          </div>
        </div>
        <h2 class="rv d1 contact-heading" style="font-family:var(--font-display);font-weight:800;font-size:clamp(3.2rem,8vw,6.5rem);letter-spacing:-.04em;line-height:1;margin:20px 0 48px">
          ${ui.contactTitle}<br>
          <span style="color:var(--accent-light)">${ui.contactHighlight}</span>
        </h2>

        <div class="rv d2 contact-links" style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
          ${CONTACT_LINKS.map(l => `
            <a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''} class="ctl ${l.cls}">
              ${getIcon(l)} ${l.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  render();
  onLangChange(() => render());
}
