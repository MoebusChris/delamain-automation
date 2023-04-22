import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/entry/_page.svelte.1191405f.js","_app/immutable/chunks/index.49a1fc66.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.10ff321c.js","_app/immutable/chunks/index.50efabe1.js","_app/immutable/entry/_page.ts.4ed993c7.js"];
export const stylesheets = ["_app/immutable/assets/_page.19523b36.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
