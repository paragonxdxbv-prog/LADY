import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src', 'public');
const destDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const file of files) {
  fs.renameSync(path.join(srcDir, file), path.join(destDir, file));
}
console.log('Moved all files from src/public to public');
