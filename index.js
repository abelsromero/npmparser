var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('./data.js', 'utf8'));

const table = "MY_TABLE"

console.log(obj)
obj.forEach(row => console.log(`insert into $MY_TABLE values ('${row.texto}', ${row.numero})`))