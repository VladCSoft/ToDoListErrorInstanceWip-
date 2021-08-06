import React, {useState} from 'react';
import {Login} from '../Pages/Login.js'; 

function LoginForm({ Login , error}) {

    const [details , setDetails] = useState({email: "" , password: ""});
    /*const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
    const [hasLength, setHasLength] = useState(false);
    

    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;
    let number = /[0-9]/g;
    let specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

    if(Login.user.password.match(lowerCase)) {
      setHasLowerCase(true);
    }

    if(Login.user.password.match(upperCase)) {
      setHasUpperCase(true);
    }

    if(Login.userpassword.match(number)) {
      setHasNumber(true);
    }

    if(Login.user.password.match(specialChar)) {
      setHasSpecialCharacter(true);
    }

    if(Login.user.password.length >= 8 && Login.user.password.length <=16) {
      setHasLength(true);
    }
    */

    const submitHandler = e => {
      e.preventDefault() ;
      
      Login (details);
    }



  return (
    <form onSubmit={submitHandler}>
        <div className='Login-Box' > </div>
        <div className='Text-Container'>
        <label> </label> 
        <input type="email" name="email" placeholder="Email" id="Login-Email-Box" onChange={e => setDetails({...details , email: e.target.value})} value={details.email} />
        </div>
        <input type="password" name="password" placeholder="Password" id="Login-Password-Box" onChange={e => setDetails({...details , password: e.target.value})} value={details.password} />
        <div  className="Login-User-Logo" > </div>
        <div className="Login-Password-Logo" > </div>
        <button  type='submit' className='Login-Sign-In'> Sign In </button>
        {(error != "") ? ( <div className="Error-Message">{error}</div>) : ""}

    </form>
    
  );
}

export default LoginForm;