function setCookies(){

//determine the name and value of cookie
    let cookieName = 'userName';
    let cookieValue = 'Snorr';

    //now initalize time
    let date = new Date();
    //now set expiry time;

    date.setTime(date.getTime() + 7*24*60*60*1000); //set exact timer for 7 days;
    let expires = 'expires=' + date.toUTCString();
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/'
    console.log(document.cookie); 
}

setCookies();