// @ts-check
let fs = require('fs').promises;
let path = require('path');

async function parseDir(directory, rel) {
    let content = '';
    for (let child of await fs.readdir(directory)) {
        let sub = path.join(directory, child);
        let stat = await fs.stat(sub);
        if (stat.isDirectory()) {
            content += await parseDir(sub, `${rel}/${child}`);
        } else if (child.endsWith('.proto')) {
            content += `import public "${rel}/${child}";\n`;
        }
    }
    return content;
}

async function build() {
    let content = '';

    content += 'syntax = "proto3";\n';
    content += 'package WUProtos;\n\n';

    for (let child of await fs.readdir(__dirname)) {
        let sub = path.join(__dirname, child);
        let stat = await fs.stat(sub);
        if (stat.isDirectory()) {
            content += await parseDir(sub, child);
        }
    }

    await fs.writeFile(path.join(__dirname, 'WUProtos.proto'), content);
}

build().then(() => console.log('Done.'));
