const { readFileSync, writeFileSync } = require('fs'); // readFileSync take 2 parameters 
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8') // first parameter is path, second is character type 
const second = readFileSync('./content/second.txt', 'utf8') 

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'}) // writeFileSync created a new file and wrote the result. it takes 3 parameter. first is path, second is write something to create, third one is an object ${flag: a} if we use this node will append this

console.log('done with this task');
console.log('starting the new one');