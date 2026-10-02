// Service worker mínimo. Su única función es cumplir el requisito técnico
// que piden Chrome/Brave para permitir instalar la página como app.
// No guarda nada en caché ni cambia cómo funciona NaPlus.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Deja pasar todas las peticiones normalmente, tal cual las haría el navegador.
  event.respondWith(fetch(event.request));
});
