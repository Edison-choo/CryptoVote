import React, {useEffect, useState} from 'react'
import {csv} from 'd3'

import Breadcrumb from '../../components/Breadcrumb'

import Abbr from '../../data/abbr.csv'
import data1 from '../../data/public.csv';

const PhotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState([]);
	const [data, setData] = useState([]);
  const [photo, setPhoto] = useState({});
  const [abbr, setAbbr] = useState({});

  useEffect(()=> {
    csv(data1).then(data => {
      setData(data);
      window.localStorage.setItem("data", JSON.stringify(data));
    })
  }, []);

  

  useEffect(()=> {
    csv(Abbr).then(data => {
      var abbrdict = {}
      for (var i in data) {
          abbrdict[data[i]["abbreviation"]] = data[i]["political_party"]
      }
      setAbbr(abbrdict);
      window.localStorage.setItem("abbr", JSON.stringify(abbrdict));
    })
  }, []);

	const changeHandler = (event) => {
    var photos = selectedFile;
    photos.push(event.target.files[0])
		setSelectedFile(photos);

    console.log(photos)

    var photoList = photo;
    photoList[event.target.id] = "img/bvs/" + event.target.files[0].name;
    setPhoto(photoList)
    window.localStorage.setItem("photos", JSON.stringify(photo));
	};

	const handleSubmission = () => {
    const formData = new FormData();

    for (var file in selectedFile) {
      console.log(selectedFile[file])
      formData.append('file[]', selectedFile[file]);
    }
		

		fetch(
			'http://localhost:5000/api/uploadphoto',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

      window.location.href = "/PublicReleaseVote";
	};

  // useEffect(()=> {
  //   setData(JSON.parse(window.localStorage.getItem("data")));
  // }, []);

  console.log(data);

  var party = data.map(d => d.party).filter((v, i, a) => a.indexOf(v) === i);

  useEffect(()=> {
    
    if (JSON.parse(window.localStorage.getItem("photos")) !== null) {
      window.location.href = "/PublicReleaseVote";
    }
  }, []);


  return (
    <>
    <Breadcrumb name="Upload File" />
      <section id="services" className="upload section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Upload Party's Photo</p>
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
              <hr className='between' />
              </div>
              <div className='steps-item'>
              <div className='steps-icon'>
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
            <div className="row">
              {party.map(function(object, i){
                return (
            <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-6'>
                    <div>{i+1}. {abbr[object]} &nbsp;{object}</div>
                </div>
                <div className="address col-md-6 col-lg-4">
                    <input type="file" id={object} name="filename" onChange={changeHandler}/>
                </div>
              </div>
              </div>
                )
              })}
              
              
            </div>
            <div>

            </div>
            <div id='btn-div'>
              <a id='btn-bvs' onClick={handleSubmission} className="btn-get-started scrollto">Next</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default PhotoUpload