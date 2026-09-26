import { dev } from 'astro';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dev({
  root: __dirname,
}).then((server) => {
  console.log('Astro dev server started programmatically on port 4321');
}).catch(console.error);
