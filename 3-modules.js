//CommonJS, every file is a module (by default) , that means node uses CommonJS 
// Modules --> farklı dosyalardaki kodları tek bir dosyada çalıştırmamızı sağlar
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);