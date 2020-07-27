import React, {Component} from 'react';
import history from "../history";
import save from "./save";
import Con1 from "./Con1";
class Home extends Component {
  handleClick(){
    history.push("/save")
}
handleClick1(){
  history.push("/Con1")
}
   
    render(){
        return(
            

            <div className="auth-w">
           
            <div>
            <section className="ftco-counter img ftco-section ftco-no-pt ftco-no-pb" >
              <div className="container">
                <div className="row d-flex">
                  <div className="col-md-4 col-lg-5 d-flex">
                    <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: 'url(images/about.jpg)'}}>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 pl-lg-5 py-md-5">
                    <div className="py-md-5">
                      <div className="row justify-content-start pb-3">
                        <div className="col-md-12 heading-section ftco-animate p-4 p-lg-5">
                          <h3 className="mb-4">WE CARE FOR YOU</h3>
                          <p> Doctor appointment booking software which allows your patient to book the appointment online and lets you easily make, change and track your appointments. We provide Doctor scheduling software which supports both mobile and web platform that overcomes the issues of manual appointments booking according to user’s demand. With our appointment booking software, the Doctor is free to concentrate on their patients.</p>
                         
    
                          <p><button onClick={(e)=>this.handleClick(e)} className="btn btn-primary py-3 px-4">View appointment</button> <button onClick={(e)=>this.handleClick1(e)} className="btn btn-secondary py-3 px-4">Contact us</button></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
           
                          
            </div>
            
            </div>
           
            
        )
    }
}

export default Home;