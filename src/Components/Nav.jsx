import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">KaBeEr.</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">About</a>
      </li>
      <li><a href="#">Services</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>


<section className="section hero" >
                <div className="container">

                    <div className="hero-content">

                        <h3 className="h1 hero-title">If you want to go my main page.</h3>

                        <p className="hero-text">
                            
                        </p>

                        <Link to="/login" className="btn btn-primary ">Login frist</Link>

                    </div>

                    <figure className="hero-banner">
                        <img src="https://www.shutterstock.com/image-vector/online-mobile-registration-sign-user-260nw-1969588129.jpg" width="570" height="448" alt="hero banner" className="w-100"/>
                    </figure>

                </div>
            </section>

    </>
  )
}

export default Nav
