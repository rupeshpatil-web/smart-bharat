if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),l={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>l[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4edf56f2bffa7eb431c8fae018aac51d"},{url:"/_next/static/P9JTc7GBuYhxUC_l_KC_l/_buildManifest.js",revision:"d2face06f42ae750a01318510da14ce3"},{url:"/_next/static/P9JTc7GBuYhxUC_l_KC_l/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/341.2903e54d3da731c1.js",revision:"2903e54d3da731c1"},{url:"/_next/static/chunks/414-f6f8c7f4eea3878d.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/472.a3826d29d6854395.js",revision:"a3826d29d6854395"},{url:"/_next/static/chunks/4bd1b696-db971fca1f9e0010.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/567-1758681dd1ff1d7a.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/684-64644b3e0977cc6a.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/75-1957998bb07b1dc7.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/962-281d0d3f974103b6.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/970-16d1cf60314a49fa.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/_not-found/page-b63df5a8d3225455.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/emergency/page-69e42ed4a1032547.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/health-calendar/page-3cd9144cf27e76ab.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/layout-ecce052d1fe88b64.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/page-e2c3cd012c73e5cd.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/settings/page-6e315a54223fc5dc.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/app/updates/page-bd41c5b92546a48e.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/framework-f593a28cde54158e.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/main-8cbd1ca6e2bba740.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/main-app-952395c93a087d1c.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/pages/_app-92f2aae776f86b9c.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/pages/_error-71d2b6a7b832d02a.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-fdac6bff0780541a.js",revision:"P9JTc7GBuYhxUC_l_KC_l"},{url:"/_next/static/css/6786ecf832534b55.css",revision:"6786ecf832534b55"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/a1386beebedccca4-s.woff2",revision:"d3aa06d13d3cf9c0558927051f3cb948"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/c3bc380753a8436c-s.woff2",revision:"5a1b7c983a9dc0a87a2ff138e07ae822"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f10b8e9d91f3edcb-s.woff2",revision:"63af7d5e18e585fad8d0220e5d551da1"},{url:"/_next/static/media/fe0777f1195381cb-s.woff2",revision:"f2a04185547c36abfa589651236a9849"},{url:"/manifest.json",revision:"e3d59327f9852c66da3e748085c14b2e"},{url:"/placeholder-logo.png",revision:"b7d4c7dd55cf683c956391f9c2ce3f5b"},{url:"/placeholder-logo.svg",revision:"1e16dc7df824652c5906a2ab44aef78c"},{url:"/placeholder-user.jpg",revision:"82c9573f1276f9683ba7d92d8a8c6edd"},{url:"/placeholder.jpg",revision:"887632fd67dd19a0d58abde79d8e2640"},{url:"/placeholder.svg",revision:"35707bd9960ba5281c72af927b79291f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
