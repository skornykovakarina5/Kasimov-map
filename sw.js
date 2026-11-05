const V='v2';
const CORE=['./','index.html','page.js','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).catch(()=>{}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==V)await caches.delete(k);await clients.claim()})()));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==location.origin||r.headers.has('range'))return;
 const fresh=/\.(html|json|js)$/.test(u.pathname)||u.pathname.endsWith('/');
 e.respondWith((async()=>{const c=await caches.open(V);
  if(fresh){try{const f=await fetch(r);if(f.ok)c.put(r,f.clone());return f}catch(_){return(await c.match(r))||(await c.match('index.html'))}}
  const m=await c.match(r);if(m)return m;
  try{const f=await fetch(r);if(f.ok)c.put(r,f.clone());return f}catch(_){return Response.error()}})())});
