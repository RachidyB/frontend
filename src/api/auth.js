import axios from "axios";

export const SignUp=async(data)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        },
    };
    const reponse=await axios.post('https://car-rental-v2.herokuapp.com/api/register/',data,config)
    return reponse; 
};

export const Signin =  async(data) => {
    const config = {
        headers: {
        'Content-Type' : 'application/json' 
    },
    };
   const response = await axios.post('https://car-rental-v2.herokuapp.com/api/login/', data , config);
   return response; 

};