const CACHE="codebound-rpg-v1";
const FILES=["./","./index.html","./manifest.json","./icon.svg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return response}).catch(()=>caches.match("./index.html"))))});
