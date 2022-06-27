import React, { useState } from 'react' ;
import Error from './helpers/Error';
import Succes from './helpers/Succes.js';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty' ;
import {Signin} from './api/auth.js'
import { useNavigate } from 'react-router-dom';



export default function Login() {
  

    let navigate = useNavigate();

const [formData , setFormData] = useState({
    username :'',
    password :'',
    errorMsg : false,
 }) ;

 const {
    
    username ,
     password ,
     errorMsg ,
     
 } = formData ;

 const handleChange = (evt) =>{
    setFormData({ 
        ...formData,
  [evt.target.name ] : evt.target.value,
   succesMsg : '',
   errorMsg : ''
  }
  )
  console.log(formData);
} ;
  


  
const handleSubmit = (evt) => {
    evt.preventDefault();

    if( isEmpty(username) ||  isEmpty(password) )
    {
        setFormData({
            ...formData, errorMsg: 'All field are required' ,
        }) 
    }       
        else {
            //success
            
           const {username , password}= formData;
           const data ={username , password};

           Signin(data)
           .then((response) =>{ 
               if(response.data.errorMessage){
                setFormData({
                ...formData,errorMsg: response.data.errorMessage , 
            }); }
            else{
               
                navigate('/Home');
                
            }
            }).catch((error) =>{
            console.log('Axios signup error :', error );
            
        }
        );
        
        }

}

    return (
        <div> 
            <section>
            <div className="containerr" id='Login'>
                <div className="user signinBx">

                    <div className="imgBx"><img src="backGround2.jpg"/></div>
                    <div className="formBx" >
                        <form onSubmit={handleSubmit} noValidate >
                            <h2>Sign In</h2>
                            {errorMsg && Error(errorMsg)}

                            <input type="text" name="username" value={username}  placeholder="username" onChange={handleChange} />
                            <input type="password" name="password" value={password}  placeholder="Password" onChange={handleChange}  />
                            <input type="submit" name="" value="Login" />
                            <p className="signup">don't have an account? <a href="/Register"  >Sign up.</a></p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
