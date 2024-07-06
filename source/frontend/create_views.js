import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.resolve(__dirname, './dist/src/pages');
const viewsDir = path.resolve(__dirname, './dist/application/views');

if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir, { recursive: true });
} 

fs.readdirSync(pagesDir).forEach(file => {
  const pageName = path.parse(file).name;
  const pathFrom = path.join(pagesDir, `${pageName}.html`)
  const pathTo = path.join(viewsDir, `${pageName}.php`)
  
  fs.copyFile(pathFrom, pathTo, (err) => {});
});
