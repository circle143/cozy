import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles, a as styles$1, b as styles$2, c as styles$3 } from '../chunks/index.95d291e9_D7ixQ0x7.mjs';
import { $ as $$Dish, d as dish } from '../chunks/menu_DKbVM97u.mjs';
import { $ as $$Reserve } from '../chunks/Reserve_CgurJRrT.mjs';
import { $ as $$Layout } from '../chunks/Layout_DW-B3o3c.mjs';
export { renderers } from '../renderers.mjs';

const $$Celebration = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.celebration, "class")}> <div${addAttribute(`container ${styles.container}`, "class")}> <h2 class="clash-display">
Transform Every Moment into a Celebration!
</h2> <p class="text">
Welcome to Cozy - The Casual Lounge! Dive into an exceptional dining
			and drinking experience where comfort meets sophistication. Whether
			you're enjoying a romantic evening, a relaxed gathering with
			friends, or a lively event, Cozy sets the perfect scene for
			unforgettable memories.
</p> <div${addAttribute(styles.action, "class")}> <a href="/reservation" data-type="button" data-variant="primary">Book a Table</a> </div> </div> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/home/Celebration/Celebration.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const links = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/menu",
      text: "Menu"
    },
    {
      link: "/gallery",
      text: "Gallery"
    },
    {
      link: "/reservation",
      text: "Reservation"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$1.hero, "class")}> <nav${addAttribute(styles$1.nav, "class")}> <div${addAttribute(styles$1.logo, "class")}> <a href="/"><img src="/logo.svg" alt="Cozy Lounge"> </a> </div> <div${addAttribute(styles$1.links, "class")}> <ul> ${links.map((item) => {
    return renderTemplate`<li> <a data-type="link"${addAttribute(item.link, "href")}> ${item.text} </a> </li>`;
  })} </ul> </div> </nav> <div${addAttribute(styles$1.cozy, "class")}> <div id="embla"${addAttribute(styles$1.image, "class")}> <div${addAttribute(styles$1.embla__viewport, "class")} id="embla__viewport"> <div${addAttribute(styles$1.embla__container, "class")}> <div${addAttribute(styles$1.embla__slide, "class")}> <img src="/home/hero/one.JPG" alt=""> </div> <div${addAttribute(styles$1.embla__slide, "class")}> <img src="/home/hero/two.jpeg" alt=""> </div> <div${addAttribute(styles$1.embla__slide, "class")}> <img src="/home/hero/three.jpeg" alt=""> </div> </div> </div> </div> <div${addAttribute(styles$1.content, "class")}> <p${addAttribute(`clash-display ${styles$1.subheading}`, "class")}>
Cozy- The Casual Lounge
</p> <h1${addAttribute(`clash-display ${styles$1.heading}`, "class")}>
Where Comfort Meets Flavor
</h1> <div${addAttribute(styles$1.action, "class")}> <a href="/reservation" data-type="button" data-variant="primary">
Book a Table
</a> </div> </div> </div> <div${addAttribute(styles$1.menu, "class")}> <img${addAttribute(styles$1.image, "class")} src="/home/hero-2.webp" alt=""> <div${addAttribute(styles$1.content, "class")}> <h4 class="clash-display"> <a data-type="link" href="/menu">Our Menu</a> </h4> <p>Delicious dishes for every palate.</p> </div> </div> <div${addAttribute(styles$1.delivery, "class")}> <img${addAttribute(styles$1.image, "class")} src="/home/hero-3.webp" alt=""> <div${addAttribute(styles$1.content, "class")}> <h4 class="clash-display"> <a href="https://www.zomato.com/ncr/cozy-the-casual-lounge-sector-75-noida?amp=1" target="_blank" data-type="link">Delivery</a> </h4> <p>Fresh flavors delivered to you.</p> </div> </div> <div${addAttribute(styles$1.inside, "class")}> <img${addAttribute(styles$1.image, "class")} src="/home/hero-4.webp" alt=""> <div${addAttribute(styles$1.content, "class")}> <h4 class="clash-display"> <a href="/gallery" data-type="link">Inside Cozy Lounge</a> </h4> <p>Cozy ambiance, memorable dining experience.</p> </div> </div> </div> `;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/home/hero/Hero.astro", void 0);

const $$Offer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container ${styles$2.offer}`, "class")}> <div${addAttribute(styles$2.image, "class")}> <img src="/home/offer.jpg" alt="" width="500" height="300"> </div> <div${addAttribute(styles$2.content, "class")}> <h2${addAttribute(`clash-display ${styles$2.heading}`, "class")}>What We Offer</h2> <p class="text">
Cozy - The Casual Lounge isn't just a place to eat! It's a haven for
			relaxation and enjoyment, featuring comforting dishes with a touch
			of casual elegance, set in a warm and inviting atmosphere.
</p> </div> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/home/Offer/Offer.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const title1 = "Our Menu";
  const button1 = {
    name: "Download Our Food Menu",
    file: "/FoodMenu.pdf"
  };
  const button2 = {
    name: "Download Our Bar Menu",
    file: "/CozyDrink.pdf"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$3.menu, "class")}> <div class="container"> ${renderComponent($$result, "Dish", $$Dish, { "button2": button2, "button1": button1, "title1": title1, "data": dish })} </div> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/home/MenuHome/Menu.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cozy Lounge - Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Offer", $$Offer, {})} ${renderComponent($$result2, "MenuHome", $$Menu, {})} ${renderComponent($$result2, "Celebration", $$Celebration, {})} ${renderComponent($$result2, "Reserve", $$Reserve, { "title": "home" })} ` })}`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/index.astro", void 0);

const $$file = "C:/Users/setha/OneDrive/Desktop/cozy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
