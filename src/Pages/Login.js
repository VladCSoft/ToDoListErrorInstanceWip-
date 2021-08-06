import React, {useState} from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  
  const adminUser = {
    email: "vlad.cojocaru@gsp.com" ,
    password : "Gsp123"
  }

  const [user, setUser] = useState({email: "" , password: "" }) ;
  const [error , setError] = useState ("");

  const Login = details => {
    if (details.email == adminUser.email && details.password == adminUser.password) {
    setUser({
      email: details.email,
      password: details.password
    }) ;
   } else {
    setError("* Credidentials are not valid!") ;
  } 
  } 

  const Logout = () => {
    setUser({ email: "", password: ""}); 
  }
    
  return (
    <div className="Login-Function" >
      {(user.email != "") ? (
        <div className="welcome">
          <h2 className="Login-Message"> You have logged in successfully!</h2>
          <button onClick={Logout} className="Login-Logout-Button"> Logout </button>
        </div> 
      ) : (
        <LoginForm Login={Login} error={error} />
      ) }
    </div>
  );
}

export default Login;