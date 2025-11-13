const fs = require('fs');

const fileName = 'example.txt';
console.log('\n --------program started --------');

fs.readFile(fileName,'utf-8',(err,data) =>{
    if(err){
        console.log('error reading data', err);
        return
    }
    console.log(' \n file is being read succesfully');
    console.log(data);
});

console.log('\n program started reading the file');