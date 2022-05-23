import React, { useEffect, useState, useRef } from 'react'
import Web3 from "web3";

import Breadcrumb from '../../components/Breadcrumb'

const Success = () => {
  const [account, setAccount] = useState();

  useEffect(() => {
    async function load() {
      
      const web3 = new Web3(Web3.givenProvider);
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});

      console.log(accounts)

      setAccount(accounts[0]);
    }

    load();
  }, []);

  return (
    <>
    <Breadcrumb name="Successfully voted" />
    <section id="services" className="success section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <i class='bx bx-check-circle'></i>
              <p>Voted Successfully!</p>
              <h2>Voting Transaction will be processed and recorded securely.</h2>
            </div>
            <div className="info">
            <img src="img/bvs/QR_code_for_mobile_English_Wikipedia.svg.png" className="img-fluid animated" alt />

                <div className="address">
                    <h4>CrytoVote Card</h4>
                    <p>Voter's address: {account}</p>
                  </div>
            </div>
            <div id='btn-div' className='row d-flex justify-content-center'>
                <div className="col-md-6 col-lg-4">
                <a id='btn-bvs' href="/PrivateAllResults" className="btn-get-started scrollto">VIEW VOTING RESULT</a>
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

export default Success