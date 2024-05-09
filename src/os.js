const os = require("os")

console.log(os.arch());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.machine());
console.log(os.networkInterfaces()['Wi-Fi'][0].address);
console.log(os.platform());
console.log(os.userInfo().username);
console.log(os.type());
console.log(os.version());
console.log(os.totalmem());
console.log(os.tmpdir());
console.log(os.uptime());