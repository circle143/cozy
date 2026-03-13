import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import { $ as $$Categories, a as $$Gallery, b as ambianceImages } from '../../chunks/gallery_C65E4Naa.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BuBS4tBO.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DW-B3o3c.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cozy Lounge - Gallery" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Gallery" })} ${renderComponent($$result2, "Categories", $$Categories, { "page": "ambiance" })} ${renderComponent($$result2, "Gallery", $$Gallery, { "images": ambianceImages })} ` })}`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/gallery/ambiance/index.astro", void 0);

const $$file = "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/gallery/ambiance/index.astro";
const $$url = "/gallery/ambiance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
