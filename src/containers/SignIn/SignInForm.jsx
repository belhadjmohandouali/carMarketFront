import React, { useState } from 'react';
import classes from "../../components/Forms/Forms.module.css";
import {
    MDBInput,
    MDBRow,
    MDBBtn,
    MDBContainer,
    MDBCardBody,
    MDBCard,
    MDBCol
} from 'mdb-react-ui-kit';

function SignInForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidLogin, setinvalidLogin] = React.useState(false);
  
   //const {username,password} = data;

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    if(username === "john" && password === "doe"){
        console.log('Authentification réussie')
        setinvalidLogin(false)
    }else{
        console.log('Authentification échouée')
        setinvalidLogin(true)
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
                    <MDBCol md='12' className='pe-5'>
                            <MDBInput className='mb-4' type='username' 
                                id='username' label='Username' 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='12' className='pe-5'>
                            <MDBInput className='mb-4' type='password' 
                                id='password' label='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol md='12' className='pe-5'>
                            <div className='d-flex justify-content-center' >
                                <a type='submit'  
                                className={`${classes.btnSubmit} btn btn-block btn-lg mb-4`} 
                                onClick={handleSubmit}
                                >
                                Register !
                                </a>
                            </div>
                            <div className='input-error text-center text-danger'>
                                {invalidLogin ? "Invalid Login or password":""}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </form>
        </MDBCol>
    </MDBRow>
</MDBContainer>
    )
  
}

export default SignInForm;