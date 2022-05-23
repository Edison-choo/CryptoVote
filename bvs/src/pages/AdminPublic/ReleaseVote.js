import React, {useEffect, useState} from 'react'
import {csv} from 'd3'

import Breadcrumb from '../../components/Breadcrumb'

import Abbr from '../../data/abbr.csv'

const ReleaseVote = () => {
  const [data, setData] = useState([]);
  const [abbr, setAbbr] = useState({});
  const [photo, setPhoto] = useState({});

  useEffect(()=> {
    csv(Abbr).then(data => {
      var abbrdict = {}
      for (var i in data) {
          abbrdict[data[i]["abbreviation"]] = data[i]["political_party"]
      }
      setAbbr(abbrdict);
      console.log(abbrdict);
    })
  }, []);

  useEffect(()=> {
    setData(JSON.parse(window.localStorage.getItem("data")));
    setPhoto(JSON.parse(window.localStorage.getItem("photos")));
    console.log(photo)
  }, []);

  var mappedData = [];

  var division = data.map(d => d["Electoral Division"]).filter((v, i, a) => a.indexOf(v) === i);

  for (var i in data) {
    if (mappedData[data[i]["Electoral Division"]] != null) {
      mappedData[data[i]["Electoral Division"]].push([data[i].party])
    } else {
      mappedData[data[i]["Electoral Division"]] = [[data[i].party]]
    }
    
  }

  if(data.length === 0){
    console.log("rendering");
    return null; //You can change here to put a customized loading spinner 
  }

  return (
    <>
    <Breadcrumb name="Release Vote" />
    <section id="faq" className="release publicRelease section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Release Voting Selection</p>
            </div>
            <div className='steps-section'>
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
              <hr className='between  active-between' />
              </div>
              
              <div className='steps-item'>
              <div className='steps-icon  active-icon'>
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
            <ul className="faq-list paginationAll" data-aos="fade-up" data-aos-delay={100}>
              {division.map(function(key, index){
                return (
                  <li>
                <div data-bs-toggle="collapse" className="collapsed question" href={"#"+key.replaceAll(" ", "")}>{key}<i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                <div id={key.replaceAll(" ", "")} className="collapse" data-bs-parent=".faq-list">
                <div className="row">
                  {mappedData[key].map(function(value, i){
                    return (
                      <div className="col-md-3 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box">
                            <div className="icon"><img src={photo[value]} className="img-fluid animated" alt /></div>
                            <h4 className="title">{abbr[value]}</h4>
                            </div>
                        </div>
                    )
                    })}
                    </div>
                </div>
              </li>
                )
              })}
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
            <div id='btn-div'>
              <a id='btn-bvs' href="/PublicSelectTime" className="btn-get-started scrollto">Next</a>
            </div>
          </div>
        </section>
    </>
    
  )
}

export default ReleaseVote