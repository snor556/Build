import React,{useState,useEffect} from 'react';

export default function UserProfile({userId}){
    const [user,setUser] = useState(null);

    useEffect(() => {
        if(!userId){return}
        setUser(null);
        fetch(`https://api.example.com/user/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error('error fetching data',err));
    },[userId])


if(!user){
    return <p>loading</p>
}
 
return <h1>{user.name}</h1>
}
