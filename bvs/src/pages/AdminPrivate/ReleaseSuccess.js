import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const Login = () => {
  return (
    <>
        <Breadcrumb name="Successfully release vote" />
    <section id="services" className="success createSuccess section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <i class='bx bx-check-circle'></i>
              <p>You have successfully release the voting result</p>
              <h2>People who voted will be able to see the result</h2>
            </div>
            <div id='btn-div' className='row d-flex justify-content-center'>
                <div className="col-md-6 col-lg-4">
                <a id='btn-bvs' href="/" className="btn-get-started scrollto">RETURN TO HOME</a>         
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Login