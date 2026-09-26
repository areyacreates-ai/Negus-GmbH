/* Zentrale Standortdaten – neue Standorte hier als weiteres Objekt ergänzen.
   Übersicht (standorte.html) und Detailseite (standort.html?slug=…) werden daraus erzeugt.
   images: bis zu sechs Bildpfade; fehlende Bilder werden durch den Platzhalter ersetzt.
   openingHours: Liste aus { day, time }. */
window.STANDORTE = [
  { slug: 'standort-1', name: 'Standort 1', address: '', postalCode: '', city: '', openingHours: [{ day: 'Montag – Sonntag', time: '' }], images: [] },
  { slug: 'standort-2', name: 'Standort 2', address: '', postalCode: '', city: '', openingHours: [{ day: 'Montag – Sonntag', time: '' }], images: [] },
  { slug: 'standort-3', name: 'Standort 3', address: '', postalCode: '', city: '', openingHours: [{ day: 'Montag – Sonntag', time: '' }], images: [] }
];
