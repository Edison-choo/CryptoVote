import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const Login = () => {
  return (
    <>

        <Breadcrumb name="Successfully create voting form" />
    <section id="services" className="success createSuccess section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <i class='bx bx-check-circle'></i>
              <p>You have successfully started the voting session</p>
              <h2>The eligible voters will be able to vote from 01/05/2022 to 31/05/2022. The transaction may take around 1 to 2 minutes to be processed.</h2>
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