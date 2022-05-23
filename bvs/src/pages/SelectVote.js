import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import Notification from '../components/Notification'

const PublicVote = () => {
  return (
    <>
    <Breadcrumb name="Vote" />
    <Notification />
      <section id="services" className="vote selectVote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>ENRICH BACHMAN, Welcome to the CryptoVote!</p>
              <h2>Select your choice below</h2>
            </div>
            <div className="row">
              <a className="col-md-6 col-lg-6 d-flex align-items-stretch justify-content-around" href='/Sessions' >
              <div data-aos="zoom-in" data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon"></div>
                  <h4 className="title">Private Vote</h4>
                </div>
              </div>
              </a>
              <a className="col-md-6 col-lg-6 d-flex align-items-stretch justify-content-around" href='/PublicVote'>
              <div data-aos="zoom-in" data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon"></div>
                  <h4 className="title">Public Vote</h4>
                </div>
              </div>
              </a>
              
            </div>
          </div>
        </section>
  </>
  )
}

export default PublicVote