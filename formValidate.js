function validateCredentials(username,password){ //create a function
    const userNamePattern = /^[A-Za-z0-9]{5-15}/   // determine the condition 
    const passwordPattern = /^(?=.*A-Z)(?=.*a-z)(?=.*0-9)(?=.*\d).{8,}$/  //condition for password


    const error = [];
    //to keep track of error

    if(!userNamePattern.test(username)){  //check if condition satisfy
        error.push('invalid username');
    }
    if(!passwordPattern.test(password)){
        error.push('invalid password');
    }

    if(error.length>0){ //check if there is any error added in error array
        console.log(error.join('\n'));
        return false;
    }
    else{
        console.log('valid password and username');
        return true;
    }
} 

//regex for email validation
// let emailPattern  = /^[^/s@]@[^/s@]+\.[^/s@]+$/
// '//' => regex delimiter || ^=> start of the string 
//  [^/s@] =>  any character other than space or @