import React from 'react'

const Register = () => {
  return (
    <>
        <section id="services" className="login register section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="info">
                <div className="address">
                    <h4>BlockVote</h4>
                    <p>Create an account to vote</p>
                  </div>
                  <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Email" required />
                </div>
                <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Password" required />
                </div>
                <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Confirm Password" required />
                </div>
              <div id='btn-div' className='row d-flex justify-content-center'>
                <a id='btn-bvs' href="#about" className="btn-get-started scrollto">Register</a>
              </div>
              <div className='statement'>Already have an account? <a href='/Login'>Log In</a></div>
            </div>
            
          </div>
        </section>
    </>
  )
}

export default Register