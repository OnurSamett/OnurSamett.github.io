// ─── Hero Component ───
import { PERSONAL, STATS, UI } from '../data/content.js';
import { getLang, onLangChange, t } from '../data/i18n.js';
import { icon } from './icons.js';

export function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;

  function render() {
    const lang = getLang();
    const stats = STATS[lang];
    const ui = UI[lang];

    el.innerHTML = `
      <div style="position:absolute;top:-180px;left:-150px;width:700px;height:700px;background:radial-gradient(circle at center,rgba(37,99,235,.08) 0%,transparent 65%);animation:orb1 9s ease-in-out infinite;pointer-events:none"></div>
      <div style="position:absolute;bottom:-200px;right:-100px;width:550px;height:550px;background:radial-gradient(circle at center,rgba(37,99,235,.05) 0%,transparent 65%);animation:orb2 11s ease-in-out infinite;pointer-events:none"></div>

      <div class="hm" style="position:absolute;right:6%;top:50%;transform:translateY(-50%);width:300px;height:300px;pointer-events:none;opacity:.1">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation:spinSlow 32s linear infinite">
          <circle cx="160" cy="160" r="155" stroke="url(#rg)" stroke-width="1" stroke-dasharray="6 12"/>
          <circle cx="160" cy="160" r="110" stroke="#2563EB" stroke-width=".5" stroke-dasharray="3 10"/>
          <circle cx="160" cy="160" r="65" stroke="#60A5FA" stroke-width=".4"/>
          <defs><linearGradient id="rg" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse"><stop stop-color="#2563EB"/><stop offset="1" stop-color="#60A5FA"/></linearGradient></defs>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
          <div style="width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 18px rgba(37,99,235,.5)"></div>
        </div>
      </div>

      <div style="max-width:var(--max-w);margin:0 auto;width:100%">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;animation:fadeUp .8s .2s both">
          <div style="width:32px;height:1px;background:var(--accent)"></div>
          <span style="font-size:var(--text-xs);letter-spacing:.18em;text-transform:uppercase;color:var(--accent-light);font-weight:500">${t(PERSONAL.title)}</span>
        </div>

        <h1 class="hero-title" style="font-family:var(--font-display);font-weight:800;font-size:clamp(3.6rem,9.5vw,8rem);line-height:1;letter-spacing:-.04em;overflow:visible">
          <div style="overflow:visible;display:block">
            <span style="display:inline-block;color:var(--text);animation:heroIn .85s cubic-bezier(.16,1,.3,1) 0s both">Onur</span>
            <span style="display:inline-block;color:var(--text);animation:heroIn .85s cubic-bezier(.16,1,.3,1) .12s both"> Samet</span>
          </div>
          <div style="overflow:visible;display:block">
            <span style="display:inline-block;color:var(--accent-light);animation:heroIn .85s cubic-bezier(.16,1,.3,1) .24s both">Özkan</span>
            <span style="display:inline-block;color:var(--accent-light);animation:heroIn .85s cubic-bezier(.16,1,.3,1) .36s both">.</span>
          </div>
        </h1>

        <p style="margin-top:32px;max-width:500px;font-size:var(--text-md);color:var(--text-dim);line-height:1.8;animation:fadeUp .8s .5s both">${t(PERSONAL.description)}</p>

        <div style="margin-top:40px;display:flex;gap:12px;flex-wrap:wrap;animation:fadeUp .8s .65s both">
          <a href="#projects" class="btn-a">${ui.seeProjects} ${icon('arrow-right', 15)}</a>
          <a href="${PERSONAL.github}" target="_blank" rel="noreferrer" class="btn-b">${icon('github', 15)} GitHub</a>
          <a href="mailto:${PERSONAL.email}" class="btn-b">${icon('mail', 15)} ${ui.email}</a>
        </div>

        <div class="hero-stats" style="margin-top:64px;display:flex;gap:48px;flex-wrap:wrap;animation:fadeUp .8s .8s both">
          ${stats.map(s => `
            <div>
              <div class="hero-stat-number" style="font-family:var(--font-display);font-size:2.4rem;font-weight:800;letter-spacing:-.04em;color:var(--text);line-height:1">${s.number}</div>
              <div style="font-size:var(--text-xs);letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);margin-top:4px">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="hm" style="position:absolute;bottom:36px;left:5%;display:flex;align-items:center;gap:12px;animation:fadeUp .8s 1.1s both">
        <div style="width:36px;height:1px;background:rgba(110,110,144,.35);position:relative;overflow:hidden">
          <div style="position:absolute;inset:0;background:var(--accent);animation:scan 2.2s 1.5s ease-in-out infinite"></div>
        </div>
        <span style="font-size:var(--text-xs);letter-spacing:.14em;text-transform:uppercase;color:rgba(110,110,144,.5)">${ui.discover}</span>
      </div>
    `;
  }

  render();
  onLangChange(() => render());
}
