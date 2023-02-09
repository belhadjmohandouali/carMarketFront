import React, { useState, useEffect } from 'react';
import validator from "validator";
import classes from "../../components/Forms/Forms.module.css";
import {
  MDBInput,
  MDBRow,
  MDBContainer,
  MDBCardBody,
  MDBCard,
  MDBCol
} from 'mdb-react-ui-kit';

function SignUpForm() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    confirm: ""
  });

  const [passMatch, setPassMatch] = React.useState(true);
  const [validEmail, setvalidEmail] = React.useState(true);
  const [validPassword, setvalidPassword] = React.useState(true);
  const [invalidForm, setinvalidForm] = React.useState(false);
  

  React.useEffect(() => {
    matchPassword();
    validateEmail();
    validatePassword();
  }, [state]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const validateEmail =(()=>{
    if(!state.email || (state.email && validator.isEmail(state.email))){
      setvalidEmail(true);
    }else{
      setvalidEmail(false);
    }
  });

  const matchPassword = (() => {
    if(!state.confirm || (state.password === state.confirm)){
      setPassMatch(true);
    }else{
      setPassMatch(false);
    }
  });

  const validatePassword = (()=>{
    if(!state.password || (state.password.length > 5 && state.password.length < 16)){
      setvalidPassword(true)
    }else{
      setvalidPassword(false)
    }
  });

  const handleValidate = (e) => {
    e.preventDefault();

    if(validEmail && validPassword && passMatch){
      setinvalidForm(false)
      var raw = JSON.stringify( {
        email: state.email, 
        password: state.password,
        confirm: state.confirm,
        firstname: state.firstname,
        lastname: state.lastname,
        address: state.address,
        city: state.city,
        zip: state.zip,
    });
      console.log(raw)
    
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    
      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };
     
      fetch("http://127.0.0.1:8000/api/customers", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      console.log("formulaire validé")
    }else{
      setinvalidForm(true)
      console.log('formulaire invalide')
    }
  };

  return (
    <MDBContainer fluid >
      <MDBRow className='d-flex justify-content-center align-items-center'>
      <MDBCol lg='8' className='my-5 text-center'>
        <form>
            <div className='text-center mb-4'>
                <h2 className={`${classes.formTitle}`} >Sign up</h2>
            </div>
        <MDBCard className='justify-content-center'>
            <MDBCardBody className='px-4'>
                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol md='6' className='pe-5'>
                        <MDBInput className= 'mb-4' type='text' 
                            label="Nom"
                            id="firstname"
                            value={state.firstname}
                            onChange={handleChange}
                            aria-required="true"
                        />
                    </MDBCol>
                    <MDBCol md='6' className='pe-5'>
                        <MDBInput className= 'mb-4' type='text' 
                            label="Prénom"
                            id="lastname"
                            value={state.lastname}
                            onChange={handleChange}
                            aria-required="true"
                        />
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='6' className='pe-5'>
                            <MDBInput className={`${validEmail ? 'mb-4':'md-3' }`} type='email' 
                                label="Email"
                                id="email"
                                value={state.email}
                                onChange={handleChange}
                                aria-required="true"
                                htmlFor="validationCustomUsername"
                            />
                            <div className="input-error text-danger" >
                                <p>{validEmail ? "" : "Please, enter valid Email!"}</p>
                            </div>
                        </MDBCol>
                        <MDBCol md='6' className='pe-5'>
                            <MDBInput className='mb-4' type='text' 
                                label="Téléphone"
                                id="phone"
                                value={state.phone}
                                onChange={handleChange}
                                aria-required="true"
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='12' className='pe-5'>
                            <MDBInput className= 'mb-4' type='text' 
                                label="Adresse"
                                id="address"
                                value={state.address}
                                onChange={handleChange}
                                aria-required="true"
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='6' className='pe-5'>
                            <MDBInput className='mb-4' type='text' 
                                label="Ville"
                                id="city"
                                value={state.city}
                                onChange={handleChange}
                                aria-required="true"
                            />
                        </MDBCol>
                        <MDBCol md='6' className='pe-5'>
                            <MDBInput className='mb-4' type='text' 
                                label="Code postal"
                                id="zip"
                                value={state.zip}
                                onChange={handleChange}
                                aria-required="true"
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='6' className='pe-5'>
                            <MDBInput className={`${validPassword ? 'mb-4':'md-3' }`} type='password' 
                                label="Password"
                                id="password"
                                value={state.password}
                                onChange={handleChange}
                                aria-required="true"
                            />
                        </MDBCol>
                        <MDBCol md='6' className='pe-5'>
                            <MDBInput type='password' 
                            label="Confirm Password"
                            className={`${passMatch ? 'mb-4':'md-3' }`}
                            id="confirm"
                            value={state.confirm}
                            onChange={handleChange}
                            aria-required="true"
                        />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <div className="input-error text-danger">
                        <p>{validPassword ? "" : "Password must contain between 5 and 16 characters"}</p>
                        <p>{passMatch ? "" : "Passwords do not match (please type the same password)"}</p>
                        </div>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='12' className='pe-5'>
                        <div className='d-flex justify-content-center' >
                            <a type='submit'  
                            className={`${classes.btnSubmit} btn btn-block btn-lg mb-4`} 
                            onClick={handleValidate}
                            >
                            Register !
                            </a>
                        </div>
                        </MDBCol>
                    </MDBRow>
            </MDBCardBody>
        </MDBCard>
    </form>
    </MDBCol>
    </MDBRow>
</MDBContainer>
   
  );
}

export default SignUpForm;