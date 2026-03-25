// ─── Footer Component ───
import { PERSONAL } from '../data/content.js';
import { icon } from './icons.js';

export function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;

  el.innerHTML = `
    <div class="footer-inner">
      <div style="display:flex;align-items:center;gap:8px">
        <span class="footer-brand">${PERSONAL.shortName}.</span>
        <span class="footer-copy">&copy; ${new Date().getFullYear()}</span>
      </div>
      <div style="display:flex;gap:18px;align-items:center">
        <a href="${PERSONAL.github}" target="_blank" rel="noreferrer" class="footer-link" aria-label="GitHub">${icon('github', 16)}</a>
        <a href="${PERSONAL.linkedin}" target="_blank" rel="noreferrer" class="footer-link" aria-label="LinkedIn">${icon('linkedin', 16)}</a>
        <a href="mailto:${PERSONAL.email}" class="footer-link" aria-label="Email">${icon('mail', 16)}</a>
      </div>
    </div>
  `;
}
