import React, {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'
import * as $ from 'jquery'

import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/ropstenAgmConfig.js';

import Breadcrumb from '../../components/Breadcrumb'

import Notification from '../../components/Notification'

const PrivateVote = () => {
  const [account, setAccount] = useState();
  const [election, setElection] = useState();
  const [resolutions, setResolutions] = useState([]);
  const [forLoop, setForLoop] = useState([]);

  const regInput = useRef([]);

  useEffect(() => {
    async function load() {

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      
      setAccount(accounts[0]);

      const electionContract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

      setElection(electionContract);

      var getResponse = await electionContract.methods.getResolutionsByName("Starbucks Pte Ltd AGM Voting").call();
      setResolutions(getResponse);
      setForLoop(getResponse[2]);
    }
    
    load();
    console.log(resolutions);
   }, []);

   const handleSubmission = async () => {
    const v = regInput.current.map(r => r.value);
    let date = Math.floor(new Date().getTime() / 1000);
    console.log(date, resolutions[2].map(r => parseInt(r)), v.map(r => parseInt(r)))
    if (v.map(r => parseInt(r)).includes(NaN)) {
      console.log("error");
      $(".danger-alert").show();

    } else {
      // election.methods.vote(date, resolutions[2].map(r => parseInt(r)), v.map(r => parseInt(r)), "Starbucks Pte Ltd AGM Voting").send({from:account}, function(err, res) {
      //   if (err) {
      //     console.log("An error occured", err);
      //     return;
      //   }
      //   console.log("Hash of the transaction: " + res);
      //   window.location.href = "/PrivateSuccess";
      // });
      // election.events.votedEvent()
      // .on("data", function(event) {
      //   console.log("event return " + event.returnValues._candidateId);
      //   // window.location.href = "/Success";
      // }).on("error", console.error);

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});

      var request = {date, resolutionsId:resolutions[2].map(r => parseInt(r)), voteChoices:v.map(r => parseInt(r)), name:"Starbucks Pte Ltd AGM Voting"}; 

      var hash = web3.utils.sha3(JSON.stringify(request));
      var signature = await web3.eth.personal.sign(hash, accounts[0]);

      fetch("https://api.defender.openzeppelin.com/autotasks/db762bfe-1439-4662-9250-7acd2de237ae/runs/webhook/ec71da25-9fb1-4c40-be9c-de08322e3898/7CEmHWYUb234Nwj3rQzXXe", {
        method: 'POST',
        body: JSON.stringify({data: request, signature, from:accounts[0]}),
        headers: { 'Content-Type': 'application/json' }})
        .then((msg) => {
          if (msg.msg == "success") {
            // window.location.href = "/PrivateSuccess";
          } else {
            console.log("error", msg);
          }
          window.location.href = "/PrivateSuccess";
        })
    }
    

    
	};

  useEffect(() => {
    
    const loadJS = async () => {
      setTimeout(() => {
        console.log("Waited 5s");
  
        $(".privateVote .Choice").on("click", function() {
          console.log("clicked");
          $(this).parent().children().removeClass("choiceActive");
          $(this).parent().find(".chosen").val($(this).find("input").val());
          $(this).addClass("choiceActive");
  
          var size = $(".privateVote .Question").length;
          var voted = $(".privateVote .choiceActive").length;
          console.log(voted, size)
          if (voted == size) {
              console.log("Able to proceed");
              
          }
      });

      $(".privateVote .vote-submit").on("click", function() {
        var size = $(".privateVote .Question").length;
        var voted = $(".privateVote .choiceActive").length;
        if (voted == size) {
            window.location.href='/PrivateSuccess';
        } else {
            $(".danger-alert").show();
        }

    });
      }, 2000);
      
    };

    loadJS();
  }, []);

  // if(resolutions.length === 0){
  //   console.log("rendering");
  //   return null; //You can change here to put a customized loading spinner 
  // }


  return (
    <>
    <Breadcrumb name="Vote" />
    <Notification/>
      <section id="services" className="privateVote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi XGStars Pte Ltd.</p>
              <h2>Welcome to Starbucks Annual General Meeting Voting Agenda!</h2>
            </div>
            <div className="row" >
              { forLoop.length > 1 &&
                  forLoop.map(function(value, i){
                
                    return (
                      <>
                      <h4 className='first'>{resolutions[0][i]}</h4>
                  <div className='Question'>
                  <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={100}>
                  
                  <div className="qns">
                
                    <div className="address">
                      <p>{resolutions[1][i]}</p>
                    </div>
                  </div>
                  </div>
                  <div className="Selection col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="Choice">
                        <i class='bx bx-check'></i>
                        <h5>For</h5>
                        <input type="hidden" value={0}/>
                    </div>
                    <div className="Choice">
                        <i class='bx bx-x'></i>
                        <h5>Against</h5>
                        <input type="hidden" value={1}/>
                    </div>
                    <div className="Choice">
                        <i style={{fontSize:"2em"}} class='bx bxs-minus-circle'></i>
                        <h5>Abstain</h5>
                        <input type="hidden" value={2}/>
                    </div>
                    <input type="hidden"
                    ref={(el) => (regInput.current[i] = el)} 
                    className='chosen' />
                  </div>
                  </div>
                      </>
                    )
                  })
                }
                
              
              {/* <h4 className='first'>Resolution One: Annual General Meeting Minutes 2022</h4>
              <div className='Question'>
              <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={100}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the minutes of the Annual General Meeting held on Monday 29 June 2022 be received and approved.</p>
                </div>
              </div>
              </div>
              <div className="Selection col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <i class='bx bx-check'></i>
                    <h5>For</h5>
                </div>
                <div className="Choice">
                    <i class='bx bx-x'></i>
                    <h5>Against</h5>
                </div>
                <div className="Choice">
                    <i style={{fontSize:"2em"}} class='bx bxs-minus-circle'></i>
                    <h5>Abstain</h5>
                </div>
                <input type="hidden" className='chosen' />
              </div>
              </div>
              <h4>Resolution Two: Annual Report and Accounts 2015</h4>
              <div className='Question'>
              <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={200}>
              
              <div className="qns">
            
                <div className="address">
                  <p>THAT the Annual Report and Accounts for the year ended 31 December 2022 be received and approved.</p>
                </div>
              </div>
              
              </div>
              <div className="Selection col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                <div className="Choice">
                    <i class='bx bx-check'></i>
                    <h5>For</h5>
                </div>
                <div className="Choice">
                    <i class='bx bx-x'></i>
                    <h5>Against</h5>
                </div>
                <div className="Choice">
                    <i style={{fontSize:"2em"}} class='bx bxs-minus-circle'></i>
                    <h5>Abstain</h5>
                </div>
                <input type="hidden" className='chosen' />
              </div>
              </div> */}
              

              <div id='btn-div' style={{marginTop:"20px"}}>
              {/* <a id='btn-bvs' className="btn-get-started scrollto vote-submit">Vote</a> */}
              <a id='btn-bvs' onClick={handleSubmission} className="btn-get-started scrollto">VOTE</a>
            </div>
            </div>
          </div>
        </section>
  </>
  )
}

export default PrivateVote