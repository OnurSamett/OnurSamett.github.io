// ─── Skills Component ───
import { SKILL_CATEGORIES, LANGUAGES_DATA, CERTIFICATIONS, FOCUS_AREAS, UI } from '../data/content.js';
import { getLang, onLangChange, t } from '../data/i18n.js';
import { icon } from './icons.js';

const VISIBLE_CERTS = 6;

export function renderSkills() {
  const el = document.getElementById('skills');
  if (!el) return;

  function render() {
    const lang = getLang();
    const cats = SKILL_CATEGORIES[lang];
    const focus = FOCUS_AREAS[lang];
    const ui = UI[lang];
    const visibleCerts = CERTIFICATIONS.slice(0, VISIBLE_CERTS);
    const hiddenCerts  = CERTIFICATIONS.slice(VISIBLE_CERTS);
    const hasHidden    = hiddenCerts.length > 0;

    el.innerHTML = `
      <div style="max-width:var(--max-w);margin:0 auto">
        <div class="section-header">
          <div class="rv">
            <div class="section-tag">
              <div class="section-tag-line"></div>
              <span class="section-tag-text">${ui.competencies}</span>
            </div>
            <h2 class="section-heading">${ui.skillsTitle}</h2>
          </div>
          <p class="rv d2 section-desc">${ui.skillsDesc}</p>
        </div>

        <div class="skills-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:64px">
          <div>
            ${cats.map(cat => `
              <div class="rv" style="margin-bottom:36px">
                <div class="cat-label">${cat.label}</div>
                <div style="display:flex;flex-wrap:wrap;gap:7px">
                  ${cat.items.map(s => `<span class="sp">${s}</span>`).join('')}
                </div>
              </div>
            `).join('')}

            <div class="rv d2">
              <div class="cat-label">${ui.certsLabel}</div>
              <div class="certs-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                ${visibleCerts.map(c => renderCert(c)).join('')}
              </div>
              ${hasHidden ? `
                <div class="certs-hidden" id="certs-hidden" style="display:none;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
                  ${hiddenCerts.map(c => renderCert(c)).join('')}
                </div>
                <button class="cert-toggle" id="cert-toggle">
                  ${icon('chevron-down', 13)} ${hiddenCerts.length} ${ui.showMore}
                </button>
              ` : ''}
            </div>
          </div>

          <div>
            <div class="rv" id="lang-bars" style="margin-bottom:44px">
              <div class="cat-label">${ui.langLevels}</div>
              ${LANGUAGES_DATA.map(l => `
                <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
                  <div style="width:85px;font-size:var(--text-sm);color:var(--text);flex-shrink:0">${t(l.name)}</div>
                  <div style="flex:1;height:3px;background:rgba(255,255,255,.05);border-radius:100px;overflow:hidden">
                    <div class="lang-fill" data-pct="${l.pct}" style="width:0%"></div>
                  </div>
                  <div style="font-size:var(--text-xs);letter-spacing:.08em;color:var(--text-dim);width:44px;text-align:right">${t(l.level)}</div>
                </div>
              `).join('')}
            </div>

            <div class="rv d2">
              <div class="cat-label">${ui.focusAreas}</div>
              <div style="display:flex;flex-direction:column;gap:8px">
                ${focus.map(f => `
                  <div class="foc-c">
                    <div class="foc-icon">${icon(f.icon, 17)}</div>
                    <div>
                      <div style="font-size:var(--text-sm);font-weight:500;color:var(--text);margin-bottom:2px">${f.title}</div>
                      <div style="font-size:var(--text-xs);color:var(--text-dim)">${f.sub}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Language bars animation
    const langBars = document.getElementById('lang-bars');
    if (langBars) {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          langBars.querySelectorAll('.lang-fill').forEach(bar => { bar.style.width = bar.dataset.pct + '%'; });
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(langBars);
    }

    // Cert toggle
    const certToggle = document.getElementById('cert-toggle');
    const certsHidden = document.getElementById('certs-hidden');
    if (certToggle && certsHidden) {
      certToggle.addEventListener('click', () => {
        const isShown = certsHidden.style.display === 'grid';
        certsHidden.style.display = isShown ? 'none' : 'grid';
        certToggle.innerHTML = isShown
          ? `${icon('chevron-down', 13)} ${hiddenCerts.length} ${ui.showMore}`
          : `${icon('chevron-down', 13)} ${ui.showLess}`;
      });
    }
  }

  render();
  onLangChange(() => render());
}

function renderCert(c) {
  return `
    <div class="cert-c">
      <div class="cert-icon-wrap">${icon(c.icon, 14)}</div>
      <div style="min-width:0">
        <div style="font-size:var(--text-sm);color:var(--text);font-weight:500;line-height:1.3">${t(c.name)}</div>
        <div style="font-size:var(--text-xs);color:var(--text-dim);margin-top:2px">${c.org}</div>
      </div>
    </div>
  `;
}

