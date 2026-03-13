import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Ce-45e_u.mjs';
import { manifest } from './manifest_DKa3FinY.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/cozy-reservation.astro.mjs');
const _page2 = () => import('./pages/gallery/ambiance.astro.mjs');
const _page3 = () => import('./pages/gallery/events.astro.mjs');
const _page4 = () => import('./pages/gallery/food.astro.mjs');
const _page5 = () => import('./pages/gallery/kitchen.astro.mjs');
const _page6 = () => import('./pages/gallery.astro.mjs');
const _page7 = () => import('./pages/menu.astro.mjs');
const _page8 = () => import('./pages/reservation.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/cozy-reservation.js", _page1],
    ["src/pages/gallery/ambiance/index.astro", _page2],
    ["src/pages/gallery/events/index.astro", _page3],
    ["src/pages/gallery/food/index.astro", _page4],
    ["src/pages/gallery/kitchen/index.astro", _page5],
    ["src/pages/gallery/index.astro", _page6],
    ["src/pages/menu/index.astro", _page7],
    ["src/pages/reservation/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9e556fc2-baeb-4f8b-a801-5a07dc6eedc9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
