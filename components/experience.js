// ─── Experience Component ───
import { EXPERIENCE, UI } from '../data/content.js';
import { getLang, onLangChange } from '../data/i18n.js';
import { icon } from './icons.js';

export function renderExperience() {
  const el = document.getElementById('experience');
  if (!el) return;

  function render() {
    const lang = getLang();
    const jobs = EXPERIENCE[lang];
    const ui = UI[lang];

    el.innerHTML = `
      <div style="max-width:var(--max-w);margin:0 auto">
        <div class="section-header">
          <div class="rv">
            <div class="section-tag">
              <div class="section-tag-line"></div>
              <span class="section-tag-text">${ui.career}</span>
            </div>
            <h2 class="section-heading">${ui.experience}</h2>
          </div>
          <p class="rv d2 section-desc">${ui.expDesc}</p>
        </div>

        <div style="display:flex;flex-direction:column;gap:14px">
          ${jobs.map((job, i) => `
            <div class="exp-card rv d${i + 1}">
              <div class="exp-card-glow"></div>
              <div class="exp-grid-inner" style="display:grid;grid-template-columns:170px 1fr auto;gap:36px;align-items:start">
                <div>
                  <div class="exp-date">${job.date}</div>
                  <div class="exp-location">${icon('map-pin', 11)}<span>${job.location}</span></div>
                </div>
                <div>
                  <div class="exp-company">${job.company}</div>
                  <div class="exp-role">${job.role}</div>
                  <ul style="list-style:none;padding:0">
                    ${job.bullets.map(b => `<li class="exp-bullet">${icon('chevron-right', 12)}<span>${b}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="hm exp-tags-col" style="display:flex;flex-direction:column;gap:5px;align-items:flex-end">
                  ${job.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  render();
  onLangChange(() => render());
}
