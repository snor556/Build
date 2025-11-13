const fs = require('fs');

function myCallback(err,data){
    if(err){
        console.log('error while reading',err);
        return;
    }
    else{
        console.log('file is read successfully');
        console.log(data);
    }
}
console.log('file reading started');

fs.readFile('example.txt','utf-8',myCallback);
console.log('file is being read in background');