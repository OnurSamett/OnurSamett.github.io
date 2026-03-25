// ─── Marquee Component ───
import { MARQUEE_ITEMS } from '../data/content.js';

export function renderMarquee() {
  const elements = document.querySelectorAll('.marquee-wrap');
  if (elements.length === 0) return;

  // Duplicate for seamless loop
  const allItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  const html = `
    <div class="marquee-track">
      ${allItems.map(t => `
        <div class="marquee-item">
          <span class="marquee-text">${t}</span>
          <span class="marquee-dot">◆</span>
        </div>
      `).join('')}
    </div>
  `;

  elements.forEach(el => {
    el.innerHTML = html;
  });
}
