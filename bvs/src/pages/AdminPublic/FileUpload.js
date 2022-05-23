import React, {useEffect, useState} from 'react'
import { csv } from "d3";
import data1 from '../../data/public.csv';

import Breadcrumb from '../../components/Breadcrumb'

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
	const [data, setData] = useState([]);

  // useEffect(()=> {
  //   csv(data1).then(data => {
  //     setData(data);
  //   })
  // }, []);

  // window.localStorage.setItem("data", JSON.stringify(data));

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
  

	const handleSubmission = () => {
    const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'http://localhost:5000/api/uploadfile',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
        
        console.log('Success');
			})
			.catch((error) => {
				console.error('Error');
			});

      window.location.href = "/PublicPhotoUpload";
	};

  console.log(data);

  var party = data.map(d => d.party).filter((v, i, a) => a.indexOf(v) === i);

  return (
    <>
    <Breadcrumb name="Upload File" />
      <section id="services" className="upload section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              
              <p>Hi Electoral Departments Singapore</p>
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
              <hr className='between' />
              </div>
              
              <div className='steps-item'>
              <div className='steps-icon'>
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
              
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={100}>
              <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-6'>
                    <div>1. Upload database of electoral divisions and the participating parties</div>
                </div>
                <div className="address col-md-6 col-lg-4">
                    <input type="file" id="myFile" name="filename" onChange={changeHandler}/>
                </div>
              </div>
              </div>
              <div className="col-md-12 col-lg-12 d-flex justify-content-between" data-aos="zoom-in" data-aos-delay={200}>
              {/* <div className="info row justify-content-between">
                <div className='question col-md-6 col-lg-4'>
                    <div>2. Upload database of eligible citizens </div>
                </div>
                <div className="address col-md-6 col-lg-4">
                <input type="file" id="myFile" name="filename"/>
                </div>
              </div> */}
              </div>
            </div>
            <div>

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