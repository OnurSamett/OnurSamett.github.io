/**
 * @file i18n.js
 * @description Localization engine. Manages language state, persistence in localStorage, 
 * and provides a translation helper function (t) for reactive UI updates.
 */
// ─── i18n — Language Management ───

let currentLang = localStorage.getItem('lang') || 'tr';
const listeners = [];

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  listeners.forEach(fn => fn(lang));
}

export function onLangChange(fn) {
  listeners.push(fn);
}

export function t(obj) {
  // obj = { tr: '...', en: '...' }
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj.tr || '';
}
