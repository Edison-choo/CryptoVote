import React, {useEffect, useState} from 'react'
import { csv } from "d3";
import * as $ from 'jquery'

import Breadcrumb from '../../components/Breadcrumb'

import data1 from '../../data/private.csv';

const PrivateVote = () => {
  const [data, setData] = useState([]);

  // useEffect(()=> {
  //   setData(JSON.parse(window.localStorage.getItem("privateData")));
  // }, []);

  useEffect(()=> {
    csv(data1).then(data => {
      setData(data);
      window.localStorage.setItem("data", data);
    })
  }, []);

  useEffect(()=> {
    csv("/data/private.csv").then(data => {
      console.log("test",data)
      window.localStorage.setItem("data", JSON.stringify(data));
    })
  }, []);

  console.log(data);

  useEffect(() => {
    
    const loadJS = async () => {
      setTimeout(() => {
        console.log("Waited 5s");
  
        $(".privateRelease .rightIcon").on("click", function () {
          if (
            $(".paginationAll .show").last().index() + 1 ==
            $(".paginationAll > div").length
          ) {
            console.log("max range");
          } else {
            console.log("run");
            console.log($(".paginationAll .show").last().html());
            var index = $(".paginationAll .show").last().index() + 1;
            $(".privateRelease .paginationAll div").removeClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index + 1})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index + 2})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index + 3})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index + 4})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index + 5})`
            ).toggleClass("show");
            console.log(
              index,
              $(`.privateRelease .paginationAll > div:nth-child(${index + 1})`).html()
            );
            checkPage();
            $(".leftIcon").removeClass("pageIcon-disabled");
          }
        });
      
        $(".privateRelease .leftIcon").on("click", function () {
          if ($(".paginationAll .show").first().index() + 1 == 1) {
            console.log("max range");
          } else {
            console.log("run");
            var index = $(".paginationAll .show").first().index() + 1;
            $(".privateRelease .paginationAll div").removeClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index - 1})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index - 2})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index - 3})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index - 4})`
            ).toggleClass("show");
            $(
              `.privateRelease .paginationAll > div:nth-child(${index - 5})`
            ).toggleClass("show");
            checkPage();
            $(".rightIcon").removeClass("pageIcon-disabled");
          }
        });

        function checkPage() {
          var page =
            $(".paginationAll .show").first().index() + 1 != 1
              ? Math.ceil(
                  ($(".paginationAll .show").first().index() +
                    1 -
                    $(".paginationAll .spacer").children().length) /
                    5
                )
              : 1;
          var totalPage = Math.ceil(
            ($(".paginationAll").children().length -
              $(".paginationAll .spacer").children().length) /
              5
          );
        
          if ($(".paginationAll .show").first().index() + 1 == 1) {
            $(".leftIcon").toggleClass("pageIcon-disabled");
          }
        
          if (
            $(".paginationAll .show").last().index() + 1 ==
            $(".paginationAll li").length
          ) {
            $(".rightIcon").toggleClass("pageIcon-disabled");
          }
        
          if (
            $(".paginationAll .show").last().index() + 1 ==
            $(".paginationAll a").length
          ) {
            $(".rightIcon").toggleClass("pageIcon-disabled");
          }
        
          if (
            $(".paginationAll .show").last().index() + 1 ==
            $(".paginationAll tr").length
          ) {
            $(".rightIcon").toggleClass("pageIcon-disabled");
          }
        
          if (
            $(".paginationAll .show").last().index() + 1 ==
            $(".paginationAll > div").length
          ) {
            $(".rightIcon").toggleClass("pageIcon-disabled");
          }
        
          $(".allResults");
          $(".sessions");
          $(".pageNum span").text(`${page}/${totalPage}`);
        }
      }, 500);
      
    };

    loadJS();
  }, []);

  if(data.length <= 1){
    console.log("rendering");
    return null; //You can change here to put a customized loading spinner 
  }

  return (
    <>
    <Breadcrumb name="Vote" />
      <section id="services" className="privateVote privateRelease section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Release Voting Selection</p>
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
              <hr className='between' />
              </div>
              <div className='steps-item'>
              <div className='steps-icon'>
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
            <div className="row paginationAll">
              {data.map(function(key, index){
                return (
                  <div>
                  <h4 className='first'>{key["No"]}</h4>
              <div className='Question'>
              <div className="col-md-12 col-lg-12" data-aos="zoom-in" data-aos-delay={100}>
              
              <div className="qns">
            
                <div className="address">
                  <p>{key["Resolutions"]}</p>
                </div>
              </div>
              </div>
              </div>
                  </div>
                )
              })}
              
            </div>
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
              

              <div id='btn-div' style={{marginTop:"20px"}}>
              <a id='btn-bvs' href="/PrivateSelectTime" className="btn-get-started scrollto">NEXT</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default PrivateVote