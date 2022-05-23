import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const AssignSuccess = () => {
  return (
    <>

        <Breadcrumb name="Successfully create voting form" />
    <section id="services" className="success createSuccess section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <i class='bx bx-check-circle'></i>
              <p>You have successfully assigned a voter</p>
              <h2>Please reminded them to accept from their email</h2>
            </div>
            <div id='btn-div' className='row d-flex justify-content-center'>
            <div className="col-md-6 col-lg-4">
                <a id='btn-bvs' href="/PrivateAssignProxy" className="btn-get-started scrollto">Re-assign Proxy</a>         
                </div>
                <div className="col-md-6 col-lg-4">
                <a id='btn-bvs' href="/" className="btn-get-started scrollto">RETURN TO HOME</a>         
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AssignSuccess