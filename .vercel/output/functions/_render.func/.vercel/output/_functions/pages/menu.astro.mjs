import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DW-B3o3c.mjs';
import { s as styles } from '../chunks/index.8c9cafd9_CC0KzNgi.mjs';
import { $ as $$Dish, d as dish, a as drinks } from '../chunks/menu_DKbVM97u.mjs';
import { $ as $$Hero } from '../chunks/Hero_BuBS4tBO.mjs';
export { renderers } from '../renderers.mjs';

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const title1 = "Food Menu";
  const title2 = "Drinks Menu";
  const button1 = {
    name: "Download Our Food Menu",
    file: "/FoodMenu.pdf"
  };
  const button2 = {
    name: "Download Our Bar Menu",
    file: "/CozyDrink.pdf"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.menu, "class")}> <div class="container"> ${renderComponent($$result, "Dish", $$Dish, { "button1": button1, "title1": title1, "data": dish })} </div> <div class="container"> ${renderComponent($$result, "Dish", $$Dish, { "button1": button2, "title1": title2, "data": drinks })} <p>Alcohol service is subject to valid license availability on operating days.</p> </div> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/Menu/Menu.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cozy Lounge - Menu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Menu" })} ${renderComponent($$result2, "Menu", $$Menu, {})} ` })}`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/menu/index.astro", void 0);

const $$file = "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/menu/index.astro";
const $$url = "/menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
