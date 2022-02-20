const os = require('os')
// The OS module provides information about the computer's operating system.

// info about current user--->
const user = os.userInfo()
console.log(user);
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOs);