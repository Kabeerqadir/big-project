import React from 'react'
import { useRef,useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate('')



    

function handleemail  (e) {
    setEmail(e.target.value)
}

function handlepassword  (e) {
    setPassword(e.target.value)
}


    function submitfunc(e){
        e.preventDefault()
        console.log(email,password)
        
    

        axios.post("https://reqres.in/api/login",{
            email: email,
            password: password
        }).then((res)=>{
            console.log(res)
        
        }).catch((err)=>{
        console.log(err)
        })
}
  return (
    <>
         <div className="container login">

<h1 className="text-center">Login Form</h1>

<form className="needs-validation">
    <div className="form-group was-validated">
        <label className="form-label" HTMLfor="email">Email address</label>
        <input value={email} onChange={handleemail} className="form-control" type="email" id="email" required/>
        <div className="invalid-feedback">
            Please enter your Phone number
        </div>
    </div>
    <div className="form-group was-validated">
        <label className="form-label" HTMLfor="password">Password</label>
        <input value={password} onChange={handlepassword} className="form-control" type="password" id="password" required/>
        <div className="invalid-feedback">
            Please enter your password
        </div>
    </div>
    <div className="form-group form-check">
        <input className="form-check-input" type="checkbox" id="check"/>
        <label className="form-check-label" HTMLfor="check">Remember me</label>
    </div>
    <input className="btn btn-success w-100" type="submit" onClick={submitfunc} value="Login"/>
</form>

</div>
    </>
  )
}

export default Login
