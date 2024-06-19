const fs = require("fs");

// fs.writeFileSync("sample.txt", "hey there this is fileSystem module");

// fs.appendFileSync("sample.txt", " Joseph Korivi");

// fs.writeFile("test.txt", "hello this is test file for testing fs.writeFile method in fs module", 
//     function (error) {
//     if(!error) {
//         console.log("file created successfully...");
//     }
// });

// let data = fs.readFileSync("sample.txt");
// console.log(data.toString());

// fs.readFile ("test.txt", {encoding: "utf-8"}, function (error, data) {
//     if(!error) {
//         console.log(data);
//     }
// })

fs.unlink ("test.txt", function(error) {
    if(!error) {
        console.log("File Removed Success");
    }
})