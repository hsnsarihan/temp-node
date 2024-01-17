const operatingSys = require('os'); // os is already built-in.

// info about current user
const user = operatingSys.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${operatingSys.uptime()}`);

// bunch of informations about current system

const myOS = {
    name: operatingSys.type(),
    release : operatingSys.release(),
    totalMem : operatingSys.totalmem(),
    freeMem : operatingSys.freemem(),
}

console.log(myOS);