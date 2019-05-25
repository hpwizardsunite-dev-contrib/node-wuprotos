const protobufjs = require('protobufjs');
const path = require('path');

let root = new protobufjs.Root();
const protos = root.loadSync(path.join(__dirname, 'proto', 'WUProtos.proto.js'), { keepCase: true });

module.exports = protos.WUProtos;
