const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'app', 'favicon.png');
const dest = path.join(__dirname, 'src', 'app', 'icon.png');

try {
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Renamed ${src} to ${dest}`);
  } else {
    console.error(`Source not found: ${src}`);
  }
} catch (err) {
  console.error(`Failed to rename: ${err.message}`);
}
