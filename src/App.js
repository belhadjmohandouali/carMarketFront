import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Announcements from './containers/Announcements/Announcements';
import Bouton from './components/Bouton/Bouton';
import TitreH1 from './components/Titre/TitreH1';
import AddAnnouncement from './containers/Announcements/AddAnnouncement/AddAnnouncement';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import SignInForm from './containers/SignIn/SignInForm';
import SignUpForm from './containers/SignUp/SignUpForm';


function App() {
  return (
    <MDBContainer fluid>
    <Navbar />
     <Routes>
      <Route path="/add" element={<AddAnnouncement />} />
      <Route path="/" element={<Announcements />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
     </Routes>
      
       
    </MDBContainer>
  );
}

export default App;
