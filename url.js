var url = require('url');
var adr = 'http://localhost:8081/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

//***Transformar a query que está na URL num Objeto***
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }

console.log(''); //
console.log('Propriedades do Objeto: '); //
console.log(qdata.year); //returns '2017'
console.log(qdata.month); //returns 'february'

//Adicionar outra informação ao objeto
qdata.lixo = 'lixo'

console.log('Todo o Objeto:', qdata)

//Remover propriedade lixo do objeto
delete qdata.lixo;

console.log('Todo o Objeto depois:', qdata)
