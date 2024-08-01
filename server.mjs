import * as components from './dist/server/all.mjs';
import { renderers } from './dist/server/renderers.mjs';
import { manifest } from './dist/server/entry.mjs';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = await AstroContainer.create({
  manifest,
  renderers,
  resolve(s) {
    const found = manifest.entryModules[s];
    if(found) {
      return `/dist/client/${found}`;
    }
    return found;
  }
});


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,   
 'views'));
const port = 5000;

app.get("/", async (req, res) => {
  const html = await container.renderToString(components.MyComponent);
  console.log(html);
  res.render('index', { body: html, title: "Welcome to Astro-in-Express" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
