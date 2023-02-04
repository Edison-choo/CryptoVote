import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const Results = () => {
  return (
    <>
    <Breadcrumb name="Results" />
      <section id="services" className="results section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Singapore General Elections Voting Results</p>
              <h2>Your Electoral Division is Pasir Ris - Punggol GRC</h2>
            </div>
            <div className="row">
              
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info">
                <img src="img/bvs/People's_Action_Party_of_Singapore_logo.svg.png" className="img-fluid animated" alt />
                <div className="address">
                  <div className="bar">
                      <div className="barContent" style={{width:"20%"}}></div>
                    </div>
                  <p>20%</p>
                </div>
              </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
              <div className="info">
                <img src="img/bvs/Workers'_Party_of_Singapore_logo.png" className="img-fluid animated" alt />
                <div className="address">
                <div className="bar">
                      <div className="barContent" style={{width:"67%"}}></div>
                    </div>
                  <p>67%</p>
                </div>
              </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={300}>
              <div className="info">
                <img src="img/bvs/Logo_of_the_SDP.svg.png" className="img-fluid animated" alt />
                <div className="address">
                <div className="bar">
                      <div className="barContent" style={{width:"30%"}}></div>
                    </div>
                  <p>30%</p>
                </div>
              </div>
              </div>
            </div>
            <h3><a style={{textDecoration:"underline"}} href='/AllResults'>View overall result</a></h3>
            <div id='btn-div'>
              <a id='btn-bvs' href="/" className="btn-get-started scrollto">RETURN TO HOME</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default Results