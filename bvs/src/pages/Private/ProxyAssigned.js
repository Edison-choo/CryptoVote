import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const ProxyAssigned = () => {
  return (
    <>
    <Breadcrumb name="Assign Proxy" />
      <section id="services" className="sessions section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi XGStars Pte Ltd.</p>
              <h2>Please assign your proxy here</h2>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="name">AGM Meeting</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>-- Select AGM --</option>
                <option value="1">Starbucks Pte Ltd AGM Voting</option>
                <option value="2">Noel Gifts Pte Ltd AGM Voting</option>
              </select>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="name">Email Address:</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Proxy email address" required />
                </div>
                <div id='btn-div'>
              <a id='btn-bvs' href='/PrivateAssignSuccess' style={{marginTop:"60px"}} className="btn-get-started scrollto">Assign</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default ProxyAssigned