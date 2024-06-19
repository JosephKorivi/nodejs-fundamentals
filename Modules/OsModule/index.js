//  import os module to perform 

const os = require("os");

//  os.EOL says about end of line marker

console.log(os.EOL);

//  os.availableParallelism() returns an estimate of the default amount of parallelism a program should use. Always returns a value greater than zero

console.log(os.availableParallelism());

//  os.arch() returns operating system CPU eg: x64

console.log(os.arch());

//  os.constants Contains commonly used operatinf system- specific constants for error codes

console.log(os.constants);

//   os.cpus() Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.

console.log(os.cpus());


//  os.freemem() returns the amount of free system memory in bytes as an integer

console.log(os.freemem());


//   os.homedir()  returns the string path of the current users home directory

console.log(os.homedir());


//   os.hostname()  returns the hostname of the operating system as a string 

console.log(os.hostname());

//   os.machine() returns the machine type as a String eg: arm64, x86_64

console.log(os.machine());