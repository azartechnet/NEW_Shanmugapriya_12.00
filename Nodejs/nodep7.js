const fs=require('fs'); 
console.log("start");
const data=fs.readFileSync("sample.txt");
console.log(data.toString());
console.log("end");