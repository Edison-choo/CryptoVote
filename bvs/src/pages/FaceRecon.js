import React, {useRef, useEffect, useState} from 'react'

const Login = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
    .getUserMedia({
      video: {width:1920, height: 1080}
    })
    .then(stream => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch(err => {
      console.error(err);
    })
  }

  useEffect(()=> {
    getVideo();
  }, [videoRef])

  return (
    <>
        <section id="services" className="login faceRecon section-bg bvsStyle">
          <div className="container" data-aos="fade-up">
            <div className="address">
              <h4>BlockVote</h4>
              <p>Make sure your face is on the camera</p>
            </div>
            <div className='camera'>
              <video ref={videoRef}></video>
            </div>
            
          </div>
        </section>
    </>
  )
}

export default Login