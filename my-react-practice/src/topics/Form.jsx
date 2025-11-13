import React,{useState} from 'react'; //import react and useState

function UserForm(){ //create function userForm
    //set name , email and submitted
    
    const [name,setName] = useState('');  
    const [email,setEmail] = useState('');
    const [submitted,setSubmitted] = useState(false);
 

    //when submit 
    const handleSubmit = (e) =>{
        e.preventDefault();  //prevent refereshing on submit
          //set submitted = true means submitted
        setSubmitted(true);
    };
    return(
        <div>
            <h2>user form</h2>
            {submitted ?(   //checks if submitted
                <div>
                    <h1>thank you for submitting</h1>
                    <strong>Name :</strong>{name}<br/>
                    <strong>Email:</strong>{email}<br/>

                </div>
             ):
             (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name:{""}  
                            {/* this represent extra space */}
                            <input type = 'text' value = {name} onChange={(e) => {setName(e.target.value)}} required/>
                            {/* changes the content of the value when writing in it  */}
                        </label>
                    </div>
                    <div>
                        <label>
                            email:{""}
                            <input type = 'email' value = {email} onChange={(e) => {setEmail(e.target.value)}} required/>

                        </label>
                    </div>
                    <button type = 'submit'>Submit</button>

                </form>
             )}
        </div>
    );

}

export default UserForm;