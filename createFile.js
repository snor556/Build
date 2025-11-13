const fs = require('fs')
const readline = require('readline');

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question('enter file name', (filename)=>{
    r1.question('enter content',(content) => {
        fs.writeFile(filename,content, (err) =>{
            if(err){
                console.log('error creating file',err);
            }
            else{
                console.log('file created successfully ')
            }
            r1.close();
        })
    })

})