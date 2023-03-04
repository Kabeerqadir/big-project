import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <button class="btn text-center bg-dark text-light"><Link to="/">Go Back To Front</Link></button>
       <div className=" container login">

<h1 className="text-center">Sign up</h1>

<form className="needs-validation">
    <div className="form-group was-validated">
        <label className="form-label" for="email">Email address</label>
        <input className="form-control" type="email" id="email" required/>
        <div className="invalid-feedback">
            Please enter your Phone number
        </div>
    </div>
    <div className="form-group was-validated">
        <label className="form-label" for="password">Password</label>
        <input className="form-control" type="password" id="password" required/>
        <div className="invalid-feedback">
            Please enter your password
        </div>
    </div>
    <div className="form-group form-check">
        <input className="form-check-input" type="checkbox" id="check"/>
        <label className="form-check-label" for="check">Remember me</label>
    </div>
    <input className="btn btn-success w-100" type="submit" value="SIGN IN"/>
</form>

</div>
    </>
  )
}

export default Signup
