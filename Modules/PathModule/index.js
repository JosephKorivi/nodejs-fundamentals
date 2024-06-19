//  import the path module

let path = require("path");

let myPath = "D:/NodeJS/Modules/PathModule/index.js";

let basename = path.basename(myPath);       // basename 

let delimiter = path.delimiter;     // delimiter

let dirname = path.dirname(myPath);     // dirname

let ext = path.extname(myPath);     // extension Name

// let format = path.format(myPath);   //    displays the format of the object

let abs = path.isAbsolute(myPath);      // determines if the path is an absolute path or not

let join = path.join(...myPath);        // joins the specified path segments into one path

let normal = path.normalize(myPath);    // when multiple, sequential path segment separation characters are found they are replaced by single instance

let parsedPath = path.parse(myPath);       // parse the mentioned path 

let posix = path.posix;

let rel = path.relative(myPath, myPath + "something");

let resolve = path.resolve(...myPath);

let sep = path.sep

let win = path.win32;


console.log(`The Basename is: ${basename}`);

console.log(`The Delimiter is: ${delimiter}`);

console.log(`The dirname is: ${dirname}`);

console.log(`The Extension is: ${ext}`);

// console.log(`The format is: ${format}`)

console.log(`The Absolute Path is: ${abs}`);

console.log(`The join is: ${join}`);

console.log(`The Normalized is: ${normal}`);

console.log(`The ParsedPath is: ${parsedPath}`);

console.log(`The posix is: ${posix}`);

console.log(`The relative is: ${rel}`);

console.log(`The Resolve is: ${resolve}`);

console.log(`The sep is: ${sep}`);

console.log(`The Win32 is: ${win}`);