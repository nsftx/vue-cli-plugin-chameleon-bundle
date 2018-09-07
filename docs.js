const fs = require('fs');
const path = require('path');

const srcPath = path.resolve('./README.md');
const baseDir = path.dirname(__dirname).split('vue-cli-plugin-chameleon-bundle')[0];
const destPath = path.resolve(baseDir, 'chameleon-docs/developers/bundles', 'vue-cli-plugin.md')

const fileContent = fs.readFileSync(srcPath).toString();
const frontMatter = `---
title: "Vue CLI Bundle Plugin"
---\n\n`;

fs.writeFileSync(destPath, `${frontMatter}${fileContent}`);