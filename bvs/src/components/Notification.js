import React from 'react'

const Notification = () => {
  return (
    <div style={{backgroundColor:"#FEF5F1",paddingBottom:"20px"}}>
        <div class="alert simple-alert">
        <h3>Simple Alert Message</h3>
        <a class="close">&times;</a>
        </div>

        <div class="alert success-alert">
        <h3>Success Alert Message</h3>
        <a class="close">&times;</a>
        </div>

        <div class="alert danger-alert">
        <h3>Voting required</h3>
        <a class="close">&times;</a>
        </div>

        <div class="alert warning-alert">
        <h3>Voting required</h3>
        <a class="close">&times;</a>
        </div>
    </div>
  )
}

export default Notification