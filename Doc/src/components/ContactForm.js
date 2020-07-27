import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        age:'', 
        gender: "",
        mobile: '',
        email: '',
        problem:'',
        slot:'',
        aptDate:'',
        aptTime:'',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
    
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">

                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" placeholder="Patient Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    

                    <input className="form-control" name="mobile" placeholder="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" name="email" placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>
                    

                    <input className="form-control" name="age" placeholder="Age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" name="gender" placeholder="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
          
        
                          <div className="form-group">
            
            <input type="time" name="aptTime"  className="form-control"  placeholder="Time" onChange={e=>this.setState({aptDate:e.target.value})} />
            </div>
            <div className="form-group">
            
              <input type="date" name="aptDate"  className="form-control"  placeholder="date" onChange={e=>this.setState({aptDate:e.target.value})} />
              </div>
            <div className="form-group">
               <input className="form-control" name="problem" placeholder="Problem "
                    value={values.problem }
                    onChange={handleInputChange}
                />
            </div>
            
            <div className="form-group">
               <input className="form-control" name="address" placeholder="Address"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Appointment" : "Update"} className="btn btn-primary btn-block" />

            </div>
        </form>
    );
}

export default ContactForm;