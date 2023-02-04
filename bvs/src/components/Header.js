import React from 'react'

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
    
          <div className="logo">
            <h1 className="text-light"><a href="/"><img src="img/bvs/logoOrange.png" alt="" className="img-fluid logo"/><span>&nbsp;CryptoVote</span></a></h1>
          </div>
    
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="/">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About Us</a></li>
              {/* <li><a className="nav-link scrollto" href="#services">Voting</a></li> */}
              {/* <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li> */}
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li className="dropdown"><a href="#"><span>Voting</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="/LoginVote">Create Vote</a></li>
                  {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li> */}
                  <li><a href="/Login">Start Voting</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="/Login">Login</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
  )
}

export default Header