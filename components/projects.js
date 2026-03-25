// ─── Projects Component ───
import { PROJECTS, UI } from '../data/content.js';
import { getLang, onLangChange } from '../data/i18n.js';
import { icon } from './icons.js';

export function renderProjects() {
  const el = document.getElementById('projects');
  if (!el) return;

  function render() {
    const lang = getLang();
    const projects = PROJECTS[lang];
    const ui = UI[lang];

    el.innerHTML = `
      <div style="max-width:var(--max-w);margin:0 auto">
        <div class="section-header">
          <div class="rv">
            <div class="section-tag">
              <div class="section-tag-line"></div>
              <span class="section-tag-text">${ui.portfolio}</span>
            </div>
            <h2 class="section-heading">${ui.projectsTitle}</h2>
          </div>
          <p class="rv d2 section-desc">${ui.projectsDesc}</p>
        </div>

        <div class="projects-grid" style="display:grid;grid-template-columns:repeat(12,1fr);gap:12px">
          ${projects.map((p, i) => `
            <div class="pc rv d${(i % 4) + 1}" style="grid-column:span ${p.span}">
              <div class="pc-icon">${icon(p.icon, 21)}</div>
              <div class="pc-title ${p.large ? 'large' : 'small'}">${p.name}</div>
              <p class="pc-desc">${p.desc}</p>
              <div class="pc-tags">${p.tech.map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noreferrer" class="pc-link">${icon('github', 13)} ${ui.viewOnGithub} ${icon('external-link', 11)}</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  render();
  onLangChange(() => render());
}
