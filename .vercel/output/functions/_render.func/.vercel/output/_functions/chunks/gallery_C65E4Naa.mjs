import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles, a as styles$1 } from './index.ff05d315_BzP-AZB_.mjs';

const $$Astro$1 = createAstro();
const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Categories;
  const { page } = Astro2.props;
  const pages = [
    {
      display: "All",
      link: "/gallery"
    },
    {
      display: "Ambiance",
      link: "/gallery/ambiance"
    },
    {
      display: "Food",
      link: "/gallery/food"
    },
    {
      display: "Events",
      link: "/gallery/events"
    },
    {
      display: "Kitchen",
      link: "/gallery/kitchen"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container ${styles.categories}`, "class")}> ${pages.map((item) => {
    return renderTemplate`<a data-type="link"${addAttribute(item.link, "href")}${addAttribute(item.display.toLowerCase() === page, "data-active")}> ${item.display} </a>`;
  })} </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/categories/Categories.astro", void 0);

const $$Astro = createAstro();
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images } = Astro2.props;
  function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  const shuffledImages = shuffleArray(images);
  const GROUP_SIZE = 3;
  let imgArr = [];
  for (let i = 0; i < shuffledImages.length; i += GROUP_SIZE) {
    imgArr.push(shuffledImages.slice(i, i + GROUP_SIZE));
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container ${styles$1.gallery}`, "class")}> ${imgArr.map((group) => renderTemplate`<div${addAttribute(styles$1.images, "class")}> ${group.map((img) => renderTemplate`<img${addAttribute(img, "src")} loading="lazy">`)} </div>`)} </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/gallery/Gallery.astro", void 0);

const foodImages = [
  "/gallery/food/food1.jpg",
  "/gallery/food/food2.jpg",
  "/gallery/food/food3.jpg",
  "/gallery/food/food4.jpg",
  "/gallery/food/food5.jpg",
  "/gallery/food/food6.jpg",
  "/gallery/food/food7.jpg",
  "/gallery/food/food8.jpg",
  "/gallery/food/food9.jpg",
  "/gallery/food/food10.jpg",
  "/gallery/food/food11.jpeg",
  "/gallery/food/food12.jpeg",
  "/gallery/food/food13.jpeg",
  "/gallery/food/food14.jpeg",
  "/gallery/food/food15.jpeg",
  "/gallery/food/food16.jpeg",
  "/gallery/food/food17.jpeg",
  "/gallery/food/food18.jpeg",
  "/gallery/food/food19.jpeg",
  "/gallery/food/food20.jpeg",
  "/gallery/food/food21.jpeg",
  "/gallery/food/food22.jpeg"
];
const eventsImages = [
  "/gallery/events/event1.JPG",
  "/gallery/events/event2.JPG",
  "/gallery/events/event3.JPG",
  "/gallery/events/event4.JPG",
  "/gallery/events/event5.JPG",
  "/gallery/events/event6.JPG",
  "/gallery/events/event7.JPG",
  "/gallery/events/event9.JPG",
  "/gallery/events/event10.JPG",
  "/gallery/events/event11.JPG",
  "/gallery/events/event12.JPG",
  "/gallery/events/event13.JPG",
  "/gallery/events/event14.jpg",
  "/gallery/events/event15.JPG",
  "/gallery/events/event16.jpg",
  "/gallery/events/event17.jpg",
  "/gallery/events/event18.jpg",
  "/gallery/events/event19.jpg",
  "/gallery/events/event20.jpg",
  "/gallery/events/event21.jpg",
  "/gallery/events/event22.jpg",
  "/gallery/events/event23.JPG",
  "/gallery/events/event24.JPG",
  "/gallery/events/event25.JPG",
  "/gallery/events/event26.JPG",
  "/gallery/events/event27.JPG",
  "/gallery/events/event28.JPG",
  "/gallery/events/event29.JPG",
  "/gallery/events/event30.JPG",
  "/gallery/events/event31.JPG",
  "/gallery/events/event32.JPG",
  "/gallery/events/event33.JPG",
  "/gallery/events/event34.JPG",
  "/gallery/events/event35.JPG",
  "/gallery/events/event36.JPG",
  "/gallery/events/event37.JPG",
  "/gallery/events/event38.jpeg",
  "/gallery/events/event39.jpeg",
  "/gallery/events/event40.jpeg",
  "/gallery/events/event41.jpeg",
  "/gallery/events/event42.jpeg"
];
const ambianceImages = [
  "/gallery/ambiance/ambiance1.JPG",
  "/gallery/ambiance/ambiance2.jpg",
  "/gallery/ambiance/ambiance3.jpg",
  "/gallery/ambiance/ambiance4.jpg",
  "/gallery/ambiance/ambiance5.jpg",
  "/gallery/ambiance/ambiance6.jpg",
  "/gallery/ambiance/ambiance7.jpg",
  "/gallery/ambiance/ambiance8.jpg",
  "/gallery/ambiance/ambiance9.jpg",
  "/gallery/ambiance/ambiance10.jpg",
  "/gallery/ambiance/ambiance11.jpg",
  "/gallery/ambiance/ambiance12.jpg",
  "/gallery/ambiance/ambiance13.jpg",
  "/gallery/ambiance/ambiance14.jpg",
  "/gallery/ambiance/ambiance15.jpg",
  "/gallery/ambiance/ambiance16.jpg",
  "/gallery/ambiance/ambiance17.jpg",
  "/gallery/ambiance/ambiance18.jpg",
  "/gallery/ambiance/ambiance19.jpg",
  "/gallery/ambiance/ambiance20.jpg",
  "/gallery/ambiance/ambiance21.jpeg",
  "/gallery/ambiance/ambiance22.jpeg",
  "/gallery/ambiance/ambiance23.jpeg",
  "/gallery/ambiance/ambiance24.jpeg",
  "/gallery/ambiance/ambiance25.jpeg"
];
const kitcherImages = [
  "/gallery/kitcher/k2.jpg",
  "/gallery/kitcher/k3.jpg",
  "/gallery/kitcher/k4.jpg",
  "/gallery/kitcher/k5.jpeg",
  "/gallery/kitcher/k6.jpeg",
  "/gallery/kitcher/k7.jpeg",
  "/gallery/kitcher/k8.jpg",
  "/gallery/kitcher/k9.jpg",
  "/gallery/kitcher/k10.jpg",
  "/gallery/kitcher/k11.jpg",
  "/gallery/kitcher/k12.jpg",
  "/gallery/kitcher/k13.jpg",
  "/gallery/kitcher/k14.jpg",
  "/gallery/kitcher/k15.JPG",
  "/gallery/kitcher/k16.JPG",
  "/gallery/kitcher/k17.JPG"
];
const images = [
  ...ambianceImages,
  ...kitcherImages,
  ...foodImages,
  ...eventsImages
];

export { $$Categories as $, $$Gallery as a, ambianceImages as b, eventsImages as e, foodImages as f, images as i, kitcherImages as k };
