var fs = require("fs");




function readFileSync(filePath) {
  var data = fs.readFileSync(filePath);
  console.log(data.toString());
  console.log("程序结束");
}

function readFile(filePath) {
  var data = fs.readFile(filePath, function (err, data) {
    console.log(data.toString());
  })
  console.log("程序结束");
}

readFile("server.js");
// readFileSync("server.js");