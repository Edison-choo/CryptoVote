import React, {useEffect, useState} from 'react'
import Web3 from 'web3'
import * as $ from 'jquery'

import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/ropstenAgmConfig.js';

import Breadcrumb from '../../components/Breadcrumb'

const OwnVote = () => {
  const [account, setAccount] = useState();
  const [election, setElection] = useState();
  const [choices, setChoices] = useState({});
  const [forLoop, setForLoop] = useState([]);
  const [resolutions, setResolutions] = useState([]);

  const voteChoices = ["For", "Against", "Abstain"];

  useEffect(() => {
    async function load() {

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      
      setAccount(accounts[0]);

      const electionContract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

      setElection(electionContract);

      var response = await electionContract.methods.getResolutionsByName("Starbucks Pte Ltd AGM Voting").call();
      setResolutions(response);

      var getResponse = await electionContract.methods.getVoter("0x5a2706d94de8fda9fb97d42ace0a8890586f033c", "Starbucks Pte Ltd AGM Voting").call();
      var objectChoices = choices;
      objectChoices["Starbucks Pte Ltd AGM Voting"] = getResponse;
      console.log(objectChoices, getResponse);
      setChoices(objectChoices);
      setForLoop(getResponse[2]);
    }
    
    load();
    console.log(choices);
   }, []);

  return (
    <>
    <Breadcrumb name="Own Vote" />
      <section id="services" className="ownVote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi XGStars Pte Ltd.</p>
              <h2>This is your vote for Starbucks Annual General Meeting Voting Agenda!</h2>
            </div>
            <ul className="faq-list paginationAll" data-aos="fade-up" data-aos-delay={100}>
              <li>
                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Starbucks Pte Ltd AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq1" className="collapse dropped" data-bs-parent=".faq-list">
                <div className="row">
                  {forLoop.length > 0 && forLoop.map((value, i) => {
                    return (
<>
<h4 className='first'>{resolutions[1][i]}</h4>
              <div className='Question row'>
              <div className="col-md-8 col-lg-8" data-aos="zoom-in" data-aos-delay={100}>
              
              <div className="qns">
            
                <div className="address">
                  <p>{resolutions[1][i]}</p>
                </div>
              </div>
              </div>
              <div className="Selection col-md-4 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <h5>You Chose: {voteChoices[parseInt(choices["Starbucks Pte Ltd AGM Voting"][2][i])]}</h5>
                </div>
              </div>
              </div>
</>
                    )
                  })}
              
              {/* <h4>Resolution Two: Annual Report and Accounts 2015</h4>
              <div className='Question row'>
              <div className="col-md-8 col-lg-8" data-aos="zoom-in" data-aos-delay={200}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the Annual Report and Accounts for the year ended 31 December 2022 be received and approved.</p>
                </div>
              </div>
              
              </div>
              <div className="Selection col-md-4 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <h5>You Chose: Against</h5>
                </div>
              </div>
              </div> */}
            </div>
                </div>
              </li>
              <li>
                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Noel Gifts Pte Ltd AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq2" className="collapse dropped" data-bs-parent=".faq-list">
                  <div className='empty'>You Have not vote yet</div> 
                </div>
              </li>
              <li>
                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Apple Pte Ltd AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq3" className="collapse dropped" data-bs-parent=".faq-list">
                <div className='empty'>You Have not vote yet</div> 
                </div>
              </li>
              <li>
                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">HUAWEI AGM Voting<i className="bi bi-chevron-down icon-show drop" /><i className="bi bi-chevron-up icon-close drop" /></div>
                <div id="faq4" className="collapse dropped" data-bs-parent=".faq-list">
                <div className='empty'>You Have not vote yet</div> 
                </div>
              </li>
            </ul>
            <div className='pageNum'>
    <span>1/1</span> page

  </div>
            <div className='pagination'>
              <div className='pageIcon leftIcon'>
              <i class='bx bx-left-arrow'></i>
            </div>
            <div className='pageIcon rightIcon'>
              <i class='bx bx-right-arrow'></i>
            </div>
            </div>
          </div>
        </section>
  </>
  )

            
}

export default OwnVote