import React from 'react'

import Breadcrumb from '../../components/Breadcrumb'

const Attendance = () => {
  return (
    <>
    <Breadcrumb name="Results" />
  <section id="services" className="allResults attendance section-bg bvsStyle">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>Voter's Attendance</p>
        </div>

        <div class="table-responsive custom-table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>  
              <th scope="col">#</th>
              <th scope="col">Voter</th>
              <th scope="col">Voted</th>
              <th scope="col">Proxy</th>
              <th scope="col">Voted</th>
              <th scope="col">Attended</th>
            </tr>
          </thead>
          <tbody className='paginationAll'>
            <tr scope="row">
              <td>
                1
              </td>
              <td>XGStar</td>
              <td>
              <i class='bx bx-checkbox-square'></i>
              </td>
              <td>Lim Tek Xia</td>
              <td><i class='bx bx-checkbox' ></i></td>
              <td><i class='bx bx-checkbox-square' ></i></td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
            <tr>
              
            <td>
                1
              </td>
              <td>XGStar</td>
              <td>
              <i class='bx bx-checkbox'></i>
              </td>
              <td>Lim Tek Xia</td>
              <td><i class='bx bx-checkbox-square' ></i></td>
              <td><i class='bx bx-checkbox-square' ></i></td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
            <tr>
              
            <td>
                1
              </td>
              <td>XGStar</td>
              <td>
              <i class='bx bx-checkbox'></i>
              </td>
              <td>Lim Tek Xia</td>
              <td><i class='bx bx-checkbox' ></i></td>
              <td><i class='bx bx-checkbox' ></i></td>
            </tr>
            <tr class="spacer"><td colspan="100"></td></tr>
            <tr>
              
            <td>
                1
              </td>
              <td>XGStar</td>
              <td>
              <i class='bx bx-checkbox-square'></i>
              </td>
              <td>Lim Tek Xia</td>
              <td><i class='bx bx-checkbox' ></i></td>
              <td><i class='bx bx-checkbox-square' ></i></td>
            </tr>
            
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
          <a id='btn-bvs' href="/PrivateReleaseSuccess" className="btn-get-started scrollto">RELEASE RESULTS</a>
        </div>
      </div>
    </section>
</>
  )
}

export default Attendance