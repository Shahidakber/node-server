const fs = require('fs');

console.log("started");
// fs.readFile('./sample.txt',(err,data)=>{
//     console.log(err)
//     console.log(data.toString())
// })
// console.log("Completed");

const readStream = fs.createReadStream('./sample.txt');
readStream.on('data',partofdata=>{
      console.log(partofdata.toString())
})
readStream.on('end',partofdata=>{
    console.log("completed")
})