import React, {Component} from 'react';
class About extends Component {
    render(){
        return(
            <div className="col">
    <div className="col-md-8">
      <h2 className="ser-title">About US</h2>
    </div>
    <div className="auth-w">
<section id="about" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-4 col-xs-12">
          <div className="section-title">
            <h2 className="head-title lg-line">We care for you</h2>
            <hr className="botm-line"/>
            <p className="sec-para">Surgery is a medical specialty that uses operative manual and instrumental techniques on a person to investigate</p>
            <a>Know more..</a>
          </div>
        </div>
        <div className="col-md-9 col-sm-8 col-xs-12">
          <div style={{visibility:" visible"}} className="col-sm-9 more-features-box">
            <div className="more-features-box-text">
              <div className="more-features-box-text-icon"> <i className="fa fa-angle-right"  aria-hidden="true"></i> </div>
              <div className="more-features-box-text-description">
                <h3>IMPORTANT INFORMATION</h3>
                <p>The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable. Health care must focus on creating social profit to fulfill its promise to society</p>
              </div>
            </div>
            <div className="more-features-box-text">
              <div className="more-features-box-text-icon"> <i className="fa fa-angle-right"  aria-hidden="true"></i> </div>
              <div className="more-features-box-text-description">
                <h3>ABOUT OUR WEBSITE</h3>
                <p> Purpose of health care is to help each person achieve four major goals: prevention of premature death and disability, maintenance and enhancement of quality of life, personal growth and development </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</div>
  );
    
}}
export default About