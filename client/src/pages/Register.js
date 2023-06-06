import React, {useState} from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "./Register.css";

function Register(){
    const [usernameReg, setUsernameReg]=useState('')
    const [passwordReg, setPasswordReg]=useState('')
    const [mobReg, setMobReg]=useState('')
    const [cpasswordReg, setCpasswordReg]=useState('')
    const [errorMsg, setErrorMsg] = useState('');

    
    const sregister=()=>{
      Axios.post("http://localhost:3001/register", {
        MobNumber: mobReg,
        Username:usernameReg,
        Password: passwordReg,
        Cpassword: cpasswordReg,
      }).then((response)=>{
        console.log(response);
        if(response.data === 'User already exists') {
          setErrorMsg("Username already exists");
        } else if(response.data === 'fill all fields') {
          setErrorMsg("Please fill all the fields");
        }else if(response.data === 'Password mismatch'){
          setErrorMsg("Password does not match");
        }else{
          setErrorMsg("User Created Successfully");
        }
      });
    };


  return(
    <div >
    <center>
      <div className="obox">
        <br/>
        <h1 className="head">Register</h1>
        <input type="text" className="inpbox" placeholder="Mobile Number" id="MobNumber" onChange={(e)=>{
            setMobReg(e.target.value);
        }}/>   
        <input type="text" className="inpbox" placeholder="Username" id="Username" onChange={(e)=>{
            setUsernameReg(e.target.value);
        }}/>   <br/><br/>
        <input type="password" className="inpbox" placeholder="Password" id="Password" onChange={(e)=>{
            setPasswordReg(e.target.value);
        }}/>   
        <input type="password" className="inpbox" placeholder="Confirm Password" id="Cpassword" onChange={(e)=>{
            setCpasswordReg(e.target.value);
        }}/>   <br/> <br/>
        <p className="tnc">By signing up, you agree to our Terms, Privacy<br/> Policy and Cookies Policy.</p>
        {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
        <button onClick={sregister} className="btn">Sign up</button>
        <br/>
        <NavLink exact to="/login" className="lgnlink">Go to Login Page</NavLink>

      </div>
    </center>
    </div>
  );
} 
export default Register;