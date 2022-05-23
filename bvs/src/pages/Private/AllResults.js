import React, {useEffect, useState, useRef} from 'react'
import Web3 from 'web3'
import * as $ from 'jquery'

import { CONTACT_ABI, CONTACT_ADDRESS } from '../../contracts/ropstenAgmConfig.js';

import Breadcrumb from '../../components/Breadcrumb'

const AllResults = () => {
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

      var getResponse = await electionContract.methods.getResolutionsResultsByName("Starbucks Pte Ltd AGM Voting").call();

      setResolutions(getResponse);
      setForLoop(getResponse[1]);
    }
    
    load();
    console.log(resolutions);
   }, []);

   useEffect(() => {
    const loadJS = async () => {
      setTimeout(() => {
        console.log("Waited 5s");
  
        $(".allResults .rightIcon").on("click", function() {
          if ($(".paginationAll .show").last().index()+1 == $(".paginationAll tr").length) {
              console.log("max range");
          } else {
              console.log("run")
              var index = $(".paginationAll .show").last().index() + 1;
              $(".paginationAll tr").removeClass("show");
              $(`.paginationAll tr:nth-child(${index + 1})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 2})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 3})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 4})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 5})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 6})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 7})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 8})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 9})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index + 10})`).toggleClass("show");
              checkPage();
              $(".leftIcon").removeClass("pageIcon-disabled");
          }
          
      });
  
      $(".allResults .leftIcon").on("click", function() {
          if ($(".allResults .paginationAll .show").first().index()+1==1) {
              console.log("max range");
          } else {
              console.log("run")
              var index = $(".paginationAll .show").first().index() + 1;
              $(".paginationAll tr").removeClass("show");
              $(`.paginationAll tr:nth-child(${index - 1})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 2})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 3})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 4})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 5})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 6})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 7})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 8})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 9})`).toggleClass("show");
              $(`.paginationAll tr:nth-child(${index - 10})`).toggleClass("show");
              checkPage();
              $(".rightIcon").removeClass("pageIcon-disabled");
          }
          
      });

        $(".allResults .paginationAll tr:nth-child(-n+10)").toggleClass("show");

        checkPage();
    

    function checkPage() {
      var page =
            $(".paginationAll .show").first().index() + 1 != 1
              ? Math.ceil(
                  $(".paginationAll .show").first().index()+100/10
                ).toString().substring(0,1)
              : 1;
      var totalPage = Math.ceil(($(".paginationAll").children().length - $(".paginationAll .spacer").children().length)/5);
  
      if ($(".paginationAll .show").first().index()+1==1) {
          $(".leftIcon").toggleClass("pageIcon-disabled");
      }
  
      if ($(".paginationAll .show").last().index()+1 == $(".paginationAll tr").length) {
          $(".rightIcon").toggleClass("pageIcon-disabled");
      }
  
      $(".allResults")
      $(".sessions")
      $(".pageNum span").text(`${page}/${totalPage}`)
  }
  

      }, 2000);
      
    };

    loadJS();
  }, []);

  return (
    <>
        <Breadcrumb name="Results" />
      <section id="services" className="allResults section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>Voting Results</p>
            </div>

            <div class="table-responsive custom-table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>  
              <th scope="col">#</th>
              <th scope="col">Resolution</th>
              <th scope="col">For</th>
              <th scope="col">% of votes cast</th>
              <th scope="col">Against</th>
              <th scope="col">% of votes cast</th>
              <th scope="col">Abstain</th>
              <th scope="col">% of votes cast</th>
              <th scope="col">Time Updated</th>
            </tr>
          </thead>
          <tbody className='paginationAll'>
            {forLoop.length > 1 &&
            forLoop.map(function(value, i){
              return (
                <>
                <tr scope="row">
              <td>
                {i+1}
              </td>
              <td>{resolutions[1][i]}</td>
              <td>
                {resolutions[2][i]}
              </td>
              <td>{resolutions[2][i] == 0 ? 0 : parseInt(resolutions[2][i])/parseInt(resolutions[0])*100}%</td>
              <td>{resolutions[3][i]}</td>
              <td>{resolutions[3][i] == 0 ? 0 : parseInt(resolutions[3][i])/parseInt(resolutions[0])*100}%</td>
              <td>{resolutions[4][i]}</td>
              <td>{resolutions[4][i] == 0 ? 0 : parseInt(resolutions[4][i])/parseInt(resolutions[0])*100}%</td>
              <td>{resolutions[5][i] == 0 ? "-" : 
              new Date(Date(resolutions[5][i])).getUTCDate().toString() +
              "/" +
              new Date(Date(resolutions[5][i])).getUTCMonth().toString() +
              "/" +
              new Date(Date(resolutions[5][i])).getUTCFullYear().toString()}</td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
                </>
              )
            })}
            
          </tbody>
        </table>
      </div>
      <div className='pageNum'>
    <span>1/1</span> page

  </div>
      <div className='pagination' style={{margin:"8px 0"}}>
              <div className='pageIcon leftIcon'>
              <i class='bx bx-left-arrow'></i>
            </div>
            <div className='pageIcon rightIcon'>
              <i class='bx bx-right-arrow'></i>
            </div>
            </div>



            <div id='btn-div'>
              <a id='btn-bvs' href="/" className="btn-get-started scrollto">RETURN TO HOME</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default AllResults