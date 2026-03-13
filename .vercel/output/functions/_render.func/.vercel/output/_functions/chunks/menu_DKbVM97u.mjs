import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles } from './index.c7bec952_DuySjbPj.mjs';

const $$Astro = createAstro();
const $$Dish = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dish;
  const { button1, button2, title1, data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div> <h2${addAttribute(`clash-display ${styles.heading}`, "class")}>${title1}</h2> </div> <div${addAttribute(styles.dish, "class")}> ${data.map((dish) => renderTemplate`<div${addAttribute(styles.dishItem, "class")}> <div${addAttribute(styles.img, "class")}> <img${addAttribute(dish.dish_img, "src")}${addAttribute(dish.dish_name, "alt")}> </div> <div${addAttribute(styles.dish_content, "class")}> ${button2 && renderTemplate`<div${addAttribute(styles.dish_name, "class")}> <div${addAttribute(styles.bg1, "class")}> <h3>${dish.dish_name}</h3> </div> <div${addAttribute(styles.bg1, "class")}> <p>${dish.dish_price}</p> </div> </div>`} ${!button2 && renderTemplate`<div${addAttribute(styles.dish_name, "class")}> <div${addAttribute(styles.bg2, "class")}> <h3>${dish.dish_name}</h3> </div> <div${addAttribute(styles.bg2, "class")}> <p>${dish.dish_price}</p> </div> </div>`} <p>${dish.dish_content}</p> </div> </div>`)} </div> <div${addAttribute(styles.action, "class")}> <a target="_blank"${addAttribute(button1.file, "href")} data-type="button" data-variant="primary">${button1.name}</a> ${button2 && renderTemplate`<a${addAttribute(button2.file, "href")} target="_blank" data-type="button" data-variant="primary"> ${button2.name} </a>`} </div> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/home/Dish/Dish.astro", void 0);

const dish = [
  {
    dish_name: "Tandoori Veg Platter",
    dish_img: "/menu/one.png",
    dish_price: "₹1095",
    dish_content: "An assortment of hara bhara kabab, paneer tikka, soya chaap, and dahi ke kabab."
  },
  {
    dish_name: "Tandoori Non Veg Platter",
    dish_img: "/menu/two.jpg",
    dish_price: "₹1195",
    dish_content: "An assortment of fish tikka, chicken seekh, chicken tikka, and mutton seekh."
  },
  {
    dish_name: "Basil Paneer Tikka",
    dish_img: "/menu/three.jpg",
    dish_price: "₹450",
    dish_content: "Paneer, bell peppers, and onions marinated in fresh basil pesto and grilled. An Italian twist on our favorite paneer tikka."
  },
  {
    dish_name: "Pahadi Chicken Tikka",
    dish_img: "/menu/four.png",
    dish_price: "₹445/545",
    dish_content: "Boneless chicken cubes marinated in green chutney and baked to perfection."
  },
  {
    dish_name: "Mushroom Chilli",
    dish_img: "/menu/five.png",
    dish_price: "₹535",
    dish_content: "An Oriental stir-fry specialty. Ginger mushroom chilli features button mushrooms delicately flavored with chilli."
  },
  {
    dish_name: "Firangi Chicken Tikka",
    dish_img: "/menu/seven.png",
    dish_price: "₹535",
    dish_content: "Chicken tikka kebabs in a richly spiced yogurt marinade. Grilled, barbecued, or griddled to perfection."
  },
  {
    dish_name: "Potato Factory - Plain/Peri Peri/Fully Loaded",
    dish_img: "/menu/six.webp",
    dish_price: "₹295/330/390",
    dish_content: "A combo of mixed-flavored fries."
  },
  {
    dish_name: "Fish Tikka",
    dish_img: "/menu/eight.png",
    dish_price: "₹655",
    dish_content: "Cubes of boneless fish marinated with yogurt and Indian spices, grilled in a hot tandoor."
  },
  {
    dish_name: "Crispy Corn with Chilli Pepper",
    dish_img: "/menu/nine.jpg",
    dish_price: "₹450",
    dish_content: "Indo-Chinese style corn kernels deep-fried and sautéed in a delicious flavored sauce."
  },
  {
    dish_name: "Bhatti Ka Murgh Half/Full",
    dish_img: "/menu/ten.png",
    dish_price: "₹475/835",
    dish_content: "Chicken prepared with an authentic Indian recipe, marinated overnight in yogurt with a perfect blend of spices."
  }
];
const drinks = [
  {
    dish_name: "Silk And Pink",
    dish_img: "/bar/Silk&Pink.png",
    dish_price: "₹749",
    dish_content: "Vodka, Litchi Juice, Cranberry Juice, Green Cardmom, Triple Sec, Lime Juice"
  },
  {
    dish_name: "Sanorita",
    dish_img: "/bar/Sanorita.jpg",
    dish_price: "₹399",
    dish_content: "Orange Juice, Strawberry Crush, Lime Juice"
  },
  {
    dish_name: "Beerita",
    dish_img: "/bar/Beerita.png",
    dish_price: "₹799",
    dish_content: "Vodka, Kala Khata, Salt, Chaat Masala, Lime Juice, Top Up Beer"
  },
  {
    dish_name: "Cucumber Lemonade Fizz",
    dish_img: "/bar/CucumberLemonadeFizz.png",
    dish_price: "₹399",
    dish_content: "Fresh Cucumber, Lime Juice, Black Papper,Top Up With Soda"
  },
  {
    dish_name: "Smoke Irish",
    dish_img: "/bar/SmokeIrish.png",
    dish_price: "₹799",
    dish_content: "Ipish Whisky, Baileys, Chocolat Syrup & Espresso."
  },
  {
    dish_name: "Chilli Guava",
    dish_img: "/bar/ChilliGuava.png",
    dish_price: "₹399",
    dish_content: "Guava Juice, Chaat Masala, Black Papper, Black Salt, Lime Juice"
  },
  {
    dish_name: "Cosmopolitan",
    dish_img: "/bar/Cosmopolitian.png",
    dish_price: "₹525",
    dish_content: "A crisp, citrus-kissed classic with smooth vodka and a vibrant berry twist."
  },
  {
    dish_name: "Spicy Mango",
    dish_img: "/bar/SpicyMango.png",
    dish_price: "₹399",
    dish_content: "Mango Juice, Chaat Masala, Black Pappe, Black Salt, Lime Juice"
  }
];

export { $$Dish as $, drinks as a, dish as d };
