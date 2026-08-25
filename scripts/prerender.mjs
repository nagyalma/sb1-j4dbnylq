import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const { render, routes } = await import('../.ssg-temp/entry-server.js');

const template = readFileSync(join(root, 'dist/index.html'), 'utf-8');

for (const route of routes) {
  try {
    const html = render(route);
    const output = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    const outDir = route === '/' ? join(root, 'dist') : join(root, 'dist', route.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), output);
    console.log(`  ✓ ${route}`);
  } catch (err) {
    console.warn(`  ⚠ ${route}: ${err.message}`);
    // Write un-rendered fallback so Netlify still serves the SPA
    const outDir = route === '/' ? join(root, 'dist') : join(root, 'dist', route.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), template);
  }
}

// Cleanup SSR temp bundle
try { rmSync(join(root, '.ssg-temp'), { recursive: true, force: true }); } catch {}

console.log(`\n[prerender] Done — ${routes.length} routes processed.`);
