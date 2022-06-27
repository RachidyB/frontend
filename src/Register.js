import React, { useEffect, useState } from 'react';
import {Link , Route, useHistory } from 'react-router-dom';
import Error from './helpers/Error';
import Succes from './helpers/Succes.js';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty' ;
import {SignUp} from './api/auth.js'
import Login from './Login';
import { useNavigate } from 'react-router-dom';





export default function Register() {
//LOGIN 

    let navigate = useNavigate();

    //REGISTER
  const  [count , setCount] = useState(0);
 

  const [formData , setFormData] = useState ({
    username :'',
    email :'',
    password :'',
    repassword :'',
    succesMsg : false,
    errorMsg : false,
 })
 const {
     username ,
     email ,
     password ,
     repassword ,
     succesMsg ,
     errorMsg
 } = formData ;



 const handleChange = (evt) =>{
    setFormData({ 
        ...formData,
  [evt.target.name ] : evt.target.value,
   succesMsg : '',
   errorMsg : '' ,

  }
  )
  console.log(formData);
} 
  ;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if( isEmpty(username) || isEmpty(email) ||  isEmpty(password) ||  isEmpty(repassword)){
        setFormData({
            ...formData, errorMsg: 'All field are required'
        }) }
        else if (!isEmail(email)){
            setFormData({
                ...formData,errorMsg: 'Invalid email'
            })
        }
        else if(password!=repassword){

            setFormData({
                ...formData,errorMsg: 'Passwords doesnt match'
            })
        }
        else {
            //success
            
            const {username , email , password}= formData;
            const data ={username , email , password};
            SignUp(data).then((reponse)=> {
            if(reponse.data.errorMessage)
            {
            setFormData({
                ...formData,errorMsg: reponse.data.errorMessage
            })
            }
            else{
               
                console.log('Axios signup sucess ', reponse);
                setFormData({
                username :'',
                email : '',
                password : '' ,
                repassword : '',
                succesMsg : reponse.data.sucesMessage
                }) ;
                navigate('/Home');

                

            }              
        }).catch((error) =>{
            console.log('Axios signup error :', error );
            
        })
        };
       
        
    };


    return (
        <div>
            <section>
                <div class="containerr" id='Login'>
                    
                    <div class="user signupBx ">

                        <div class="formBx ">

                            <form onSubmit={handleSubmit} noValidate >
                                <h2>Create an account</h2>
                                {errorMsg && Error(errorMsg)} {succesMsg && Succes(succesMsg)}

                                <input type="text" name="username" value={username} placeholder="Username" onChange={handleChange}  />
                                <input type="email" name="email" value={email} placeholder="Email Address" onChange={handleChange} />
                                <input type="password" name="password" value={password} placeholder="Create Password" onChange={handleChange}/>
                                <input type="password" name="repassword" value={repassword} placeholder="Confirm Password"  onChange={handleChange}/>
                                <input type="submit" name="submit" value="Sign up" />
                                <p class="signup">Already have an account? <a href="/Login"  >Sign in.</a></p>
                            </form>
                        </div>
                        <div class="imgBx"><img src="backGround3.jpg" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
