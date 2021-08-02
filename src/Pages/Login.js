import React from 'react';

function Login() {

  return (
    <div>
        <div className='Login-Box' >
          </div>
        <input type="email"  placeholder="Email" id="Login-Email-Box" />
        <input type="password" placeholder="Password" id="Login-Password-Box" /> 
        <div  className="Login-User-Logo" > </div>
        <div className="Login-Password-Logo" > </div>
        <button  type='button' className="Login-Sign-In"> Sign In </button>
    </div>
  );
}

export default Login;