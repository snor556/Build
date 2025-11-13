function fetchUserData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve({name:'snorr',age:12});
            }
            else{
                reject('data not able to fetch');
            }
        },2000);
    });
}

async function getUserData(){
    try {
    let data = await fetchUserData();
    console.log('data fetched successfully',data);
    } catch (error) {
        console.log('error :',error);
    }

}
getUserData();