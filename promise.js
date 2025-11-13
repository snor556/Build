function fetchUserData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve({name : 'snorr', age : 13});
            }
            else{
                reject('not able to fetch data');
            }
        },2000);
    })
}

fetchUserData()
.then((data)=>{
    console.log('data :',data);
})
.catch((err)=>{
    console.log('error :',err);
})
.finally(() => {
    console.log('data fetched successfully');
})