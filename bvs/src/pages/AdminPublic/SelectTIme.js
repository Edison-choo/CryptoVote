import React, {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'

import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/ropstenElectionConfig.js';

import Breadcrumb from '../../components/Breadcrumb'

const infuraProjectId = "4ac3a8dcbf4f45faa36d067cba455d9b";
const ropstenAddress = "<0xROPSTEN_ADDRESS>";


const FileUpload = () => {
  const [data, setData] = useState([]);
  const [abbr, setAbbr] = useState({});
  const [photo, setPhoto] = useState({});

  const [account, setAccount] = useState();
  const [election, setElection] = useState();

  const regStartInput = useRef();
  const regEndInput = useRef();

  const handleSubmission = () => {
    async function load() {

      if (regStartInput.current.value === "") {
        console.log("error")
        return;
      }

      if (regEndInput.current.value === "" ) {
        
        console.log("error")
        return;
      }

      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    //   const web3 = new Web3(new Web3.providers.HttpProvider(
    //     'https://ropsten.infura.io/v3/' + infuraProjectId
    // ));
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      
      setAccount(accounts[0]);

      const electionContract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      setElection(electionContract);

      var dataset1 = JSON.parse(window.localStorage.getItem("data"));
      var dataset2 = JSON.parse(window.localStorage.getItem("photos"));
      var dataset3 = JSON.parse(window.localStorage.getItem("abbr"));

      var name = dataset1.map(d => dataset3[d["party"]]).map(d => d === undefined ? "" : d);
      var division = dataset1.map(d => d["Electoral Division"]).map(d => d === undefined ? "" : d);
      var photoPath = dataset1.map(d => dataset2[d["party"]]).map(d => d === undefined ? "" : d);
      
      // console.log(name, division, photoPath);

      var startDate = Math.floor(new Date(regStartInput.current.value).getTime() / 1000);
      var endDate = Math.floor(new Date(regEndInput.current.value).getTime() / 1000);

      // electionContract.methods.addCandidates(name, division, photoPath, startDate, endDate).send({from:accounts[0]}, function(err, res) {
      //   if (err) {
      //     console.log("An error occured", err);
      //     return;
      //   }
      //   console.log("Hash of the transaction: " + res);
      //   window.localStorage.removeItem("photos");
      //   window.location.href = "/PublicCreateSuccess";
      // });
      // window.localStorage.removeItem("photos");

      var request = {name, division, photoPath, startDate, endDate}; 

      var hash = web3.utils.sha3(JSON.stringify(request));
      var signature = await web3.eth.personal.sign(hash, accounts[0]);

      fetch("https://api.defender.openzeppelin.com/autotasks/65ba18ee-a8f1-498e-8cf8-2d1ee62c7d1e/runs/webhook/ec71da25-9fb1-4c40-be9c-de08322e3898/7SPeHVrPCrny8gYNKUqnHW", {
        method: 'POST',
        body: JSON.stringify({data: request, signature, from:accounts[0]}),
        headers: { 'Content-Type': 'application/json' }})
        .then((msg) => {
          if (msg.msg == "success") {
            window.location.href = "/PublicCreateSuccess";
          } else {
            console.log("error");
          }
          window.localStorage.removeItem("photos");
          window.location.href = "/PublicCreateSuccess";
        })

    }
    load();

      
	};

  return (
    <>
    <Breadcrumb name="Upload File" />
      <section id="services" className="upload createSuccess section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi Starbucks Pte Ltd</p>
            </div>
            <div className='steps-section' style={{width:"70%",margin:"0 auto",minWidth:"480px"}}>
              <div className='steps-item'>
              <div className='steps-icon active-icon'>
                  <i class='bx bx-upload'></i>
                </div>
                <div className='steps-title'>
                  Create form
                </div>
                <div className='steps-subtitle'>
                  Upload excel file
                </div>
                
              </div>
              <div className='steps-item'>
              <hr className='between active-between' />
              </div>
              <div className='steps-item'>
              <div className='steps-icon active-icon'>
                <i class='bx bx-image-add' ></i>
                </div>
              <div className='steps-title'>
                  Upload Photo
                </div>
                <div className='steps-subtitle'>
                  Photo for all parties
                </div>
                
              </div>
              <div className='steps-item'>
              <hr className='between active-between' />
              </div>
              
              <div className='steps-item'>
              <div className='steps-icon active-icon'>
                <i class='bx bx-envelope-open'></i>
                </div>
              <div className='steps-title'>
                  Release Vote
                </div>
                <div className='steps-subtitle'>
                  Allow citizens to start voting
                </div>
                
              </div>
              <div className='steps-item'>
              <hr className='between active-between' />
              </div>
              <div className='steps-item'>
              <div className='steps-icon active-icon'>
              <i class='bx bxs-calendar'></i>
                </div>
              <div className='steps-title'>
                  Select Date Range
                </div>
                <div className='steps-subtitle'>
                  The time duration of vote
                </div>
                
              </div>
            </div>
            <div className="row">
              
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info row justify-content-between">
                <div className='dateInput'>
                          <label for="dateofbirth">Start Date</label>
                          <input ref={regStartInput} type="date" name="startDate" id="startDate"/>
                        </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
              <div className="info row justify-content-between">
              <div className='dateInput'>
                    <label for="dateofbirth">End Date</label>
                    <input ref={regEndInput} type="date" name="endDate" id="endDate"/>
                  </div>
              </div>
              </div>
            </div>
            <div id='btn-div'>
              {/* <a id='btn-bvs' href='/PublicCreateSuccess' className="btn-get-started scrollto">START VOTING SESSION</a> */}
              <a id='btn-bvs' onClick={handleSubmission} className="btn-get-started scrollto">START VOTING SESSION</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default FileUpload