const os = require('os');

// return the current user info
const user = os.userInfo();

// return how long the laptop was running in seconds
const upTime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: `${os.totalmem()} MB`,
  freeMem: `${os.freemem()} MB`,
};

console.log(currentOS);
