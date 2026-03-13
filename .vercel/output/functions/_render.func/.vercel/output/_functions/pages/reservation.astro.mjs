import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_BuBS4tBO.mjs';
import { $ as $$Reserve } from '../chunks/Reserve_CgurJRrT.mjs';
import { $ as $$Layout } from '../chunks/Layout_DW-B3o3c.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cozy Lounge - Reservation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Reservation" })} ${renderComponent($$result2, "Reserve", $$Reserve, { "title": "reservation" })} ` })}`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/reservation/index.astro", void 0);

const $$file = "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/reservation/index.astro";
const $$url = "/reservation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
