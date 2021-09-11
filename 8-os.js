const os = require('os') //built in module

// info on current user

const user = os.userInfo()


console.log(user)

//method returns the system uptime in secs

console.log(`the system uptime ${os.uptime()} seconds`)

const currentOS = {

        name: os.type(),
        release: os.release(),
        totalMem: os.totalmem(),
        freeMem: os.freemem(),

}

console.log(currentOS)