const os =require('os');
// This code imports the os module and uses it to work with operating system-related information.

// Get the OS platform & user information
// Returns the platform of the operating system (e.g., 'linux', 'darwin', 'win32').
console.log("Platform: ",os.platform());
// Returns the hostname of the operating system.
console.log("User: ", os.userInfo());

// Get the OS CPU architecture
// Returns the CPU architecture of the operating system (e.g., 'x64', 'arm').
console.log("CPU Architecture: ", os.arch());

// Get free system memory
// Returns the amount of free system memory in bytes.
console.log("Free Memory: ", os.freemem(), "bytes");

// Get total system memory
// Returns the total amount of system memory in bytes.
console.log("Total Memory: ", os.totalmem(), "bytes");

// Get system uptime
// Returns the system uptime in seconds.
console.log("Uptime: ", os.uptime(), "seconds");

// Get home directory
// Returns the home directory of the current user.
console.log("Home Directory: ", os.homedir());

// Get hostname
// Returns the hostname of the operating system.
console.log("Hostname: ", os.hostname());

// Get network interfaces
// Returns an object containing network interfaces and their details.
console.log("Network Interfaces: ", os.networkInterfaces());

// Get CPU information
// Returns an array of objects containing information about each CPU core.
console.log("CPU Info: ", os.cpus());

// Get temporary directory
// Returns the path to the temporary directory.
console.log("Temporary Directory: ", os.tmpdir());

// Get OS name
// Returns the operating system name.
console.log("OS Type: ", os.type());

// Get OS release information
// Returns the operating system release version.
console.log("OS Release: ", os.release());

// Get OS load average
// Returns an array containing the system load averages for the last 1, 5, and 15 minutes.
console.log("Load Average: ", os.loadavg());

// This code imports the os module and uses it to retrieve various operating system-related information such as platform, memory, CPU, and network interfaces.