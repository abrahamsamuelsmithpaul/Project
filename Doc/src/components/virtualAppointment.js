import React, { Component } from 'react';
import Img2 from './Img2.jpeg';
import Img3 from './Img3.jpeg';
import Img4 from './Img4.jpeg';

class VirtualAppointment extends Component {
    render() {
      return(
        <div className="auth-w">
        <div className="auth-i">
       
        <section className="">
        
        <div className="container">
        <div className="col-md-12">
        <h2 className="ser-title">Virtual Appointment</h2>
        <hr className="botm-line"></hr>
      </div>
          <div className="row">
          
            <div className="col-md-4 element-animate">
              <div className="media d-block media-custom text-left">
              <img src= {Img2} alt="pic" />
        
                <div className="media-body">
                  <h3 className="mt-0 text-black"><a href="#" className="text-black">Rajesh</a></h3>
                  <p>specializes in dentistry, the diagnosis and conditions of the oral cavity</p>
                  <a href="https://demos.daily.co/react-demo/?roomUrl=https%3A%2F%2Fapi-demo.daily.co%2FFX6Syh7c1hW7XNG4JdV5" class="fa fa-skype"></a>
                              <a href="#" class="fa fa-flickr"></a>
                              <a href="#"class="fa fa-phone-square"></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 element-animate">
              <div className="media d-block media-custom text-left">
              <img src= {Img3} alt="Image Placeholder" className="img-fluid" />
               
                <div className="media-body">
                  <h3 className="mt-0 text-black"><a href="#" className="text-black">Ventak Ram</a></h3>
                  <p>Ophthalmologists are trained to perform eye exams, diagnose and perform eye surgery.</p>
                  <a href="https://demos.daily.co/react-demo/?roomUrl=https%3A%2F%2Fapi-demo.daily.co%2FFX6Syh7c1hW7XNG4JdV5" class="fa fa-skype"></a>
                              <a href="#" class="fa fa-flickr"></a>
                              <a href="#"class="fa fa-phone-square"></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 element-animate">
              <div className="media d-block media-custom text-left">
              <img src= {Img4} alt="Image Placeholder" className="img-fluid" />
              
                <div className="media-body">
                 
                  <h3 className="mt-0 text-black"><a href="#" className="text-black">Sudha Sri</a></h3>
                  <p>surgeon who specializes in dentistry, the diagnosis and conditions of the oral cavity</p>
                  <a href="https://demos.daily.co/react-demo/?roomUrl=https%3A%2F%2Fapi-demo.daily.co%2FFX6Syh7c1hW7XNG4JdV5" class="fa fa-skype"></a>
                              <a href="#" class="fa fa-flickr"></a>
                              <a href="#"class="fa fa-phone-square"></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row element-animate">
            <div className="col-md-5">
            </div>
          </div>
        </div>
      </section>
      
  </div>
  </div>

        
    );

    }
}
  export default VirtualAppointment;
