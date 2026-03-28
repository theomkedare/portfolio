const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\omked\\.gemini\\antigravity\\brain\\4932f3b7-f5d4-40c2-b9d5-be22ec8107ad\\om_portfolio_icon_1774707329955.png';
const dests = [
  path.join(__dirname, 'src', 'app', 'favicon.ico'),
  path.join(__dirname, 'src', 'app', 'icon.png'),
  path.join(__dirname, 'public', 'favicon.ico'),
  path.join(__dirname, 'public', 'icon.png')
];

dests.forEach(dest => {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied to ${dest}`);
  } catch (err) {
    console.error(`Failed to copy to ${dest}: ${err.message}`);
  }
});
