import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles } from './index.655c6a06_BNCGjGvY.mjs';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.hero, "class")}${addAttribute(title, "data-title")}> <h1 class="clash-display container">${title}</h1> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/hero/Hero.astro", void 0);

export { $$Hero as $ };
