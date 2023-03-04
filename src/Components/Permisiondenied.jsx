import React from 'react'
import { Link } from 'react-router-dom'

function Permisiondenied() {
  return (
    <>
    
    <div className='container text-center text-danger display-1  '>Permision denied</div>
    <h3 className='text-center'>chla ga bosdk signup kar le .<Link to="/signup">sign up</Link> <p>ya</p><Link to="/login">Log in</Link><p>ker le</p> </h3>
    </>
  )
}

export default Permisiondenied