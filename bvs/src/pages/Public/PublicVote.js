import React, {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'
import * as $ from 'jquery'

import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/ropstenElectionConfig.js';

import Breadcrumb from '../../components/Breadcrumb'
import Notification from '../../components/Notification'

const PublicVote = () => {
  const [account, setAccount] = useState();
  const [election, setElection] = useState();
  const [candidates, setCandidates] = useState([]);

  const regInput = useRef();

  useEffect(() => {
    async function load() {

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    //   const web3 = new Web3(new Web3.providers.HttpProvider(
    //     'https://ropsten.infura.io/v3/' + infuraProjectId
    // ));
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      
      setAccount(accounts[0]);

      const electionContract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

      setElection(electionContract);

      var getResponse = await electionContract.methods.getCandidates("Aljunied").call();
      setCandidates(getResponse);
    }
    
    load();
    console.log(candidates);
   }, []);

   const handleSubmission = async () => {
    const v = parseInt(regInput.current.value);
    if (v === NaN) {
      $(".danger-alert").show();

      return;
    }
    let date = Math.floor(new Date().getTime() / 1000);
    // election.methods.vote(v, date, account).send({from:account}, function(err, res) {
    //   if (err) {
    //     console.log("An error occured", err);
    //     return;
    //   }
    //   console.log("Hash of the transaction: " + res);
    //   // window.location.href = "/Success";
    // });
    // election.events.votedEvent()
    // .on("data", function(event) {
    //   console.log("event return " + event.returnValues._candidateId);
    //   // window.location.href = "/Success";
    // }).on("error", console.error);
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    var request = {v, date}; 

      var hash = web3.utils.sha3(JSON.stringify(request));
      var signature = await web3.eth.personal.sign(hash, accounts[0]);

      fetch("https://api.defender.openzeppelin.com/autotasks/5a43721e-5efd-4ba2-aa27-9eab383795d9/runs/webhook/ec71da25-9fb1-4c40-be9c-de08322e3898/TQGHDfpdTZJ7uKHxyQBLJr", {
        method: 'POST',
        body: JSON.stringify({data: request, signature, from:accounts[0]}),
        headers: { 'Content-Type': 'application/json' }})
        .then((msg) => {
          if (msg.msg == "success") {
            window.location.href = "/Success";
          } else {
            console.log("error");
          }
          window.location.href = "/Success";
        })
    
	};

  useEffect(() => {
    
    const loadJS = async () => {
      setTimeout(() => {
        console.log("Waited 5s");
    
        console.log($(".vote .icon-box").html())
  
        $(".vote .icon-box").on("click", function() {
            console.log("Test");
            $(".vote .icon-box").removeClass("selectActive");
            $(this).addClass("selectActive")
            $("#choice").val($(".selectActive input").val());
        })
  
          $(".vote .icon-box").on("click", function() {
            console.log("Test");
            $(".vote .icon-box").removeClass("selectActive");
            $(this).addClass("selectActive")
            $("#choice").val($(".selectActive input").val());
        })
      }, 2000);
      
    };

    loadJS();
  }, []);

  function testLoadJS() {

    console.log($(".vote .icon-box").html())

    $(".vote .icon-box").on("click", function() {
        console.log("Test");
        $(".vote .icon-box").removeClass("selectActive");
        $(this).addClass("selectActive")
        $("#choice").val($(".selectActive input").val());
    })

      $(".vote .icon-box").on("click", function() {
        console.log("Test");
        $(".vote .icon-box").removeClass("selectActive");
        $(this).addClass("selectActive")
        $("#choice").val($(".selectActive input").val());
    })
  }


  if(candidates.length === 0){
    console.log("rendering");
    return null; //You can change here to put a customized loading spinner 
  } else {
    console.log("showing");
  }

  return (
    <>
    <Breadcrumb name="Vote" />
    <Notification />
      <section id="services" className="vote section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>ENRICH BACHMAN, Welcome to the Singapore General Elections!</p>
              <h2>Your Electoral Division is Aljunied</h2>
            </div>
            <div className="row">
              
            {candidates[0].map(function(value, i){
              if (value != "") {
                    return (
                      <div  className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon"><img src={candidates[1][i]} className="img-fluid animated" alt /></div>
                  <h4 className="title">{value}</h4>
                  <input type="hidden" value={candidates[2][i]} />
                </div>
              </div>
                    )}
                    })}
              {/* <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon"><img src="img/bvs/People's_Action_Party_of_Singapore_logo.svg.png" className="img-fluid animated" alt /></div>
                  <h4 className="title">PEOPLE UNION PARTY</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon"><img src="img/bvs/Workers'_Party_of_Singapore_logo.png" className="img-fluid animated" alt /></div>
                  <h4 className="title">WORKER'S PARTY</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon"><img src="img/bvs/Logo_of_the_SDP.svg.png" className="img-fluid animated" alt /></div>
                  <h4 className="title">SINGAPORE DEMOCRATIC PARTY</h4>
                </div>
              </div> */}
            </div>
            <h3>Voter's address: {account}</h3>
            <form>
              <input ref={regInput} type={"hidden"} id="choice"/>
            <div id='btn-div'>
              {/* <a id='btn-bvs' className="btn-get-started scrollto vote-submit">Vote</a> */}
              <a id='btn-bvs' onClick={handleSubmission} className="btn-get-started scrollto">VOTE</a>
            </div>
            </form>
          </div>
        </section>
  </>
  )
}

export default PublicVote