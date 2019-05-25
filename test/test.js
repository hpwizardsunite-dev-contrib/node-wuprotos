const WUProtos = require('..');
let fs = require('fs');

var stream = fs.readFileSync('./test/GameDataWrapper.bytes', 'binary');

var decoded = WUProtos.Data.GameDataWrapper.fromObject(stream);

//var encoded = WUProtos.Data.GameDataWrapper.encode(stream).finish();
//decoded = WUProtos.Data.GameDataWrapper.decode(encoded);

console.log(`Templates Read Success! Count: ` + decoded.messages.length + `, environement: ` + decoded.environment + `, basis batch Id: ` + decoded.basis_batch_id);
