function validateDetails(username,password){
    if(username.length < 5 ||username.length > 15){
        console.log('error in username');
        return false
    }
   for (let i = 0; i < username.length; i++) {
            let char = username[i];
            let isDigit = (char >= '0' && char <= '9');
            let isUpCase = (char >= 'A' && char <= 'Z');
            let isLowCase = (char >= 'a' && char <= 'z');
            if(!isDigit&&!isLowCase&&!isUpCase){
                console.log('error in username');
                return false
            }            
            
        }
    
    if (password.length <8){
        console.log('invalid password ')
        return false;
    }
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for(let i = 0 ; i< password.length;i++){
        let char = password[i];
        if(char >= 'A' && char <='Z') {hasUpper = true}
        if(char >= 'a' && char <='z'){hasLower = true}
        if(char >= '0' && char <= '9'){hasDigit = true}
    }
    if(!hasUpper||!hasDigit||!hasLower){
        console.log('invalid password');
        return false;
    }
    console.log('valid username');
}
validateDetails("John123", "Password1");  // ✅ Valid
validateDetails("Jo!", "Password1");      // ❌ Invalid username
validateDetails("John123", "pass");       // ❌ Invalid password
