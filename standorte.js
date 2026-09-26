(() => {
  const PLACEHOLDER = 'assets/standort-platzhalter.svg';
  const list = window.STANDORTE || [];
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const cityLine = s => [s.postalCode, s.city].filter(Boolean).join(' ');
  const label = s => [s.name, s.address].filter(Boolean).join(', ');

  const grid = document.getElementById('standorte-grid');
  if (grid) {
    list.forEach(s => {
      const card = el('a', 'location-card');
      card.href = 'standort.html?slug=' + encodeURIComponent(s.slug);
      card.innerHTML = `<img src="${esc(s.images[0] || PLACEHOLDER)}" alt="${esc(s.name)} – ${s.images[0] ? 'Standortbild' : 'vorläufige Darstellung'}" loading="lazy"><span class="location-caption"><b>${esc(label(s))}</b><small>Standort ansehen ›</small></span>`;
      grid.appendChild(card);
    });
  }

  const detail = document.getElementById('standort-detail');
  if (detail) {
    const slug = new URLSearchParams(location.search).get('slug');
    const s = list.find(x => x.slug === slug);
    if (!s) { detail.innerHTML = '<p>Dieser Standort wurde nicht gefunden. <a href="standorte.html">Zurück zur Übersicht</a></p>'; return; }
    document.title = s.name + ' – Negus GmbH';
    document.querySelectorAll('[data-standort-name]').forEach(n => n.textContent = s.name);
    const hours = s.openingHours.map(h => `<tr><th>${esc(h.day)}</th><td>${h.time ? esc(h.time) : 'Öffnungszeiten folgen'}</td></tr>`).join('');
    const addr = [s.address, cityLine(s)].filter(Boolean).map(esc).join('<br>') || 'Adresse folgt';
    const imgs = Array.from({ length: 6 }, (_, i) => s.images[i] || PLACEHOLDER);
    const gallery = imgs.map((src, i) => `<figure><img src="${esc(src)}" alt="${esc(s.name)} – ${s.images[i] ? 'Bild' : 'vorläufige Darstellung'} ${i + 1}" loading="${i ? 'lazy' : 'eager'}"></figure>`).join('');
    detail.innerHTML = `<div class="location-info"><div><p class="eyebrow">ADRESSE</p><p class="location-address">${addr}</p></div><div><p class="eyebrow">ÖFFNUNGSZEITEN</p><table class="hours">${hours}</table></div></div><div class="gallery">${gallery}</div><p><a class="button" href="standorte.html">‹ ALLE STANDORTE</a></p>`;
  }
})();
