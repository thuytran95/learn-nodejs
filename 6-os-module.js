// INFOR ABOUT CURRENT USER
const os = require('os');
const user = os.userInfo();
// method returns the system uptime in seconds

// OPERATOR SYSTEM
console.log(`The system Uptime is ${os.uptime()} seconds`);
const currentOS={
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem()
}

console.log(currentOS)