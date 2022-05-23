import React from 'react'

const LoginHeader = () => {
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
          <li><a className="nav-link scrollto" href="/PublicDashboard">Dashboard</a></li>
          <li className="dropdown"><a href="#"><span>Create a Vote</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="#"><span>Public</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                <li><a href="/PublicFileUpload">Upload Voting Format</a></li>
                <li><a href="/PublicAdminResults">View Results</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Private</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                <li><a href="/PrivateFileUpload">Upload Voting Format</a></li>
                <li><a href="/PrivateAttendance">View Attendance</a></li>
                <li><a href="/PrivateAdminResults">View Results</a></li>
                </ul>
              </li>
              {/* <li><a href="/PublicFileUpload">Public Voting</a></li>
              <li><a href="/PrivateFileUpload">Private Voting</a></li>
              <li><a href="/PublicReleaseVote">Release Public Voting</a></li>
              <li><a href="/PrivateReleaseVote">Release Private Voting</a></li>
              <li><a href="/PrivateAllResults">View Private Results</a></li>
              <li><a href="/AllResults">View Public Results</a></li> */}
              
            </ul>
          </li>
          <li className="dropdown"><a href="#"><span>I Want to Vote</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="#"><span>Public</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                <li><a href="/PublicVote">Voting</a></li>
                <li><a href="/AllResults">View Results</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Private</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                <li><a href="/Sessions">Voting</a></li>
                <li><a href="/PrivateProxyAssigned">Assign Proxy</a></li>
                <li><a href="/OwnVote">View Own Voting</a></li>
                <li><a href="/PrivateResultsSessions">View Results</a></li>
                </ul>
              </li>
              {/* <li><a href="/PublicVote">Public Voting</a></li>
              <li><a href="/PrivateVote">Private Voting</a></li>
              <li><a href="/OwnVote">View Own Private Voting</a></li>
              <li><a href="/PrivateAdminResults">View Private Results</a></li>
              <li><a href="/PublicAdminResults">View Public Results</a></li> */}
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li className="dropdown"><a href="#" style={{backgroundColor:"transparent",fontWeight:"Bold",color:"Black",margin:"0"}}><span>User1</span></a>
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}

export default LoginHeader