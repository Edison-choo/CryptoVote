import React, {useEffect, useState} from 'react'
import { csv } from "d3";

import data1 from '../../data/private.csv';

import Breadcrumb from '../../components/Breadcrumb'
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
	const [data, setData] = useState([]);

  // useEffect(()=> {
  //   csv(data1).then(data => {
  //     setData(data);
  //   })
  // }, []);

  // useEffect(()=> {
  //   csv("/private.csv").then(data => {
  //     console.log("test",data)
  //   })
  // }, []);

  // window.localStorage.setItem("privateData", JSON.stringify(data));

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmission = () => {
    const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'http://localhost:5000/api/uploadprivatefile',
			{
				method: 'POST',
				body: formData
			}
		)
			.then((response) => response.json())
			.then((result) => {
        // window.location.href = "/PrivateReleaseVote";
				console.log('Success');
			})
			.catch((error) => {
				console.error('Error', error);
			});
      window.location.href = "/PrivateReleaseVote";
	};

  // console.log(data);

  return (
    <>
    <Breadcrumb name="Upload File" />
      <section id="services" className="upload section-bg bvsStyle">
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
              
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-6'>
                    <div>1. Upload database of resolutions</div>
                </div>
                <div className="address col-md-6 col-lg-4">
                    <input type="file" id="myFile" name="file1" onChange={changeHandler}/>
                </div>
              </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
              <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-4'>
                    <div>2. Upload database of eligible shareholders </div>
                </div>
                <div className="address col-md-6 col-lg-4">
                <input type="file" id="myFile" name="filename"/>
                </div>
              </div>
              </div>
            </div>
            <div id='btn-div'>
              <a id='btn-bvs' onClick={handleSubmission} className="btn-get-started scrollto">NEXT</a>
            </div>
          </div>
        </section>
  </>
  )
}

export default FileUpload