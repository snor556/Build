const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port  = 3000;

app.use(cookieParser());

app.get('/setCookie',(req,res) =>{
    res.cookie('userName','snorr',{
        maxAge :900000,
        httpOnly : true
    });
    res.send('cookie is set Sucessfully');
});
app.get('/getcookie',(req,res) =>{
    const username = req.cookies.userName;
    if(username){
        res.send(`welcome back ${username}`);
    }
    else{
        res.send('no cookie present')
    }
});

app.get('/clearCookie',(req,res) =>{
    res.clearCookie(userNAme);
    res.send('successfully cleared cookies');
})

app.listen(port,() => {
    console.log(`running on port http://localhost:${port}/`);
})