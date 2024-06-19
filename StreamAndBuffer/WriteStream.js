const fs = require("fs");

const readStream = fs.createReadStream("data.txt");
const writeStream = fs.createWriteStream("output.txt");
readStream.on("data.txt", function (buffer) {
    writeStream.write(buffer);
})


