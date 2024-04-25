const fs = require('fs');
const BSON = require('bson');

const pathBSONArchive = './sample.bson';

const dataBSON = fs.readFileSync(pathBSONArchive);

const dataJSON = BSON.deserialize(dataBSON);

const pathJSONArchive = './sample.json';

fs.writeFileSync(pathJSONArchive, JSON.stringify(dataJSON, null, 2));

console.log('Conversion successfully completed!');