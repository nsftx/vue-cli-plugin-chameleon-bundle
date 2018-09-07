const fs = require('fs');
const path = require('path');

const srcPath = path.resolve('./README.md');
const baseDir = path.dirname(__dirname).split('vue-cli-plugin-chameleon-bundle')[0];
const destPath = path.resolve(baseDir, 'chameleon-docs/developers/bundles', 'vue-cli-plugin.md')

fs.createReadStream(srcPath).pipe(fs.createWriteStream(destPath));
