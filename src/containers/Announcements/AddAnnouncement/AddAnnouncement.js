import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import TitreH1 from "../../../components/Titre/TitreH1";
import Bouton from "../../../components/Bouton/Bouton";
import classes from '../../../components/Forms/Forms.module.css';
import { Redirect } from 'react-router';


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea,
    MDBFile
}
from 'mdb-react-ui-kit';


class AddAnnouncement extends Component {
    state={
      titreSaisi:"",
      prixSaisi:"",
      descriptionSaisi:"",
      immatriculationSaisi:"",
      marqueSaisi:"",
      modeleSaisi:"",
      kilometrageSaisi:"",
      anneeSaisi:"",
      energieSaisi:"",
      typeBoiteSaisi:"",
      puissanceFiscaleSaisi:"",
      zipSaisi:"",
    }

    handleValidationForm=(event) => { 
        event.preventDefault();
       console.log('test données ')
       // this.props.validation(this.state.titreSaisi, this.state.prixSaisi, this.state.zipSaisi, this.state.villeSaisi, this.state.descriptionSaisi)
        this.setState({
            titreSaisi:"",
            prixSaisi:"",
            descriptionSaisi:"",
            
            immatriculationSaisi:"",
            marqueSaisi:"",
            modeleSaisi:"",
            kilometrageSaisi:"",
            anneeSaisi:"",
            energieSaisi:"",
            typeBoiteSaisi:"",
            puissanceFiscaleSaisi:"",
            zipSaisi:"",
            //couleurSaisi:"",
            // puissanceDynamiqueSaisi:"",
            // nombrePlacesSaisi:"",
            // nombrePortesSaisi:"",
            // critAirSaisi:"",
            // codeMoteurSaisi:"",
            // emissionSaisi:"",
            // miseEnCirculationSaisi:"",
            // versionMoteurSaisi:"",
        })

        var raw = JSON.stringify( {
            name: this.state.titreSaisi, 
            price:+this.state.prixSaisi,
            description:this.state.descriptionSaisi,
            dateCreation: new Date().toISOString() + '',
            immatriculation:this.state.immatriculationSaisi,
            marque:this.state.marqueSaisi,
            model:this.state.modeleSaisi,
            kilometrage:+this.state.kilometrageSaisi,
            annee:+this.state.anneeSaisi,
            energie:this.state.energieSaisi,
            typeBoite:this.state.typeBoiteSaisi,
            puissanceFiscale:+this.state.puissanceFiscaleSaisi,
            zip:this.state.zipSaisi,
            ville:"test"
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

        fetch("http://127.0.0.1:8000/api/announcements", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    render(){
        return (
            <MDBContainer fluid>
        <form>
              <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='9' className='my-5 text-center'>
                <h2 className={`${classes.formTitle}`} >Déposer une nouvelle annonce</h2>
        
                  <MDBCard>
                    <MDBCardBody className='px-4'>
        
                      <MDBRow className='align-items-center pt-4 pb-3'>
          
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                              label='Immatriculation du véhicule' size='lg' type='text'
                              id="immatriculation" 
                              value={this.state.immatriculationSaisi}
                              onChange={(event) => this.setState({immatriculationSaisi:event.target.value})}
                            />
                          </MDBCol>
          
                          <MDBCol md='6' className='pe-5'>
                            <MDBInput label='Le titre de votre annonce' size='lg' type="text"
                              id="titre" 
                              value={this.state.titreSaisi}
                              onChange={(event) => this.setState({titreSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput label='Prix' size='lg' type="number"
                              id="prix" 
                              value={this.state.prixSaisi}
                              onChange={(event) => this.setState({prixSaisi:event.target.value})}
                            />
                          </MDBCol>
        
                      </MDBRow>

                      <MDBRow className='align-items-center pt-4 pb-3'>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput label='Marque' size='lg' type="text"
                              id="marque" 
                              value={this.state.marqueSaisi}
                              onChange={(event) => this.setState({marqueSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Modèle' size='lg' type='text'
                            id="modele" 
                            value={this.state.modeleSaisi}
                            onChange={(event) => this.setState({modeleSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput label='Kilometrage' size='lg' type="number"
                              id="kilometrage" 
                              value={this.state.kilometrageSaisi}
                              onChange={(event) => this.setState({kilometrageSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Année' size='lg' type='number'
                            id="annee" 
                            value={this.state.anneeSaisi}
                            onChange={(event) => this.setState({anneeSaisi:event.target.value})}
                            />
                          </MDBCol>
                      </MDBRow>

                      <MDBRow className='align-items-center pt-4 pb-3'>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput label='Energie' size='lg' type="text"
                              id="energie" 
                              value={this.state.energieSaisi}
                              onChange={(event) => this.setState({energieSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Type de boite' size='lg' type='text'
                            id="typeBoite" 
                            value={this.state.typeBoiteSaisi}
                            onChange={(event) => this.setState({typeBoiteSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Puissance fiscale' size='lg' type='number'
                            id="puissanceFiscale" 
                            value={this.state.puissanceFiscaleSaisi}
                            onChange={(event) => this.setState({puissanceFiscaleSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Votre code postal' size='lg' type='text'
                            id="zip" 
                            value={this.state.zipSaisi}
                            onChange={(event) => this.setState({zipSaisi:event.target.value})}
                            />
                          </MDBCol>

                      </MDBRow>
                      {/* <MDBRow className='align-items-center pt-4 pb-3'>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Puissance dynamique' size='lg' type='number'
                            id="puissanceDynamique" 
                            value={this.state.puissanceDynamiqueSaisi}
                            onChange={(event) => this.setState({puissanceDynamiqueSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Nombre de places' size='lg' type='number'
                            id="nombrePlaces" 
                            value={this.state.nombrePlacesSaisi}
                            onChange={(event) => this.setState({nombrePlacesSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Nombre de portes' size='lg' type='number'
                            id="nombrePortes" 
                            value={this.state.nombrePortesSaisi}
                            onChange={(event) => this.setState({nombrePortesSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Crit Air' size='lg' type='number'
                            id="critAir" 
                            value={this.state.critAirSaisi}
                            onChange={(event) => this.setState({critAirSaisi:event.target.value})}
                            />
                          </MDBCol>

                      </MDBRow>
                      <MDBRow className='align-items-center pt-4 pb-3'>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Code moteur' size='lg' type='text'
                            id="codeMoteur" 
                            value={this.state.codeMoteurSaisi}
                            onChange={(event) => this.setState({codeMoteurSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='CO2' size='lg' type='number'
                            id="emission" 
                            value={this.state.emissionSaisi}
                            onChange={(event) => this.setState({emissionSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Mise en circulation' size='lg' type='date'
                            id="miseEnCirculation" 
                            value={this.state.miseEnCirculationSaisi}
                            onChange={(event) => this.setState({miseEnCirculationSaisi:event.target.value})}
                            />
                          </MDBCol>
                          <MDBCol md='3' className='pe-5'>
                            <MDBInput 
                            label='Version moteur' size='lg' type='number'
                            id="versionMoteur" 
                            value={this.state.versionMoteurSaisi}
                            onChange={(event) => this.setState({versionMoteurSaisi:event.target.value})}
                            />
                          </MDBCol>
                          
                      </MDBRow> */}
    
                      <MDBRow className='align-items-center pt-4 pb-3'>
                        <MDBCol md='12' className='pe-5'>
                          <MDBTextArea label='Description détaillée' rows={3}
                            id="description" 
                            value={this.state.descriptionSaisi}
                            onChange={(event) => this.setState({descriptionSaisi:event.target.value})}
                           />
                        </MDBCol>
        
                      </MDBRow>
      
        
                      <MDBRow className='align-items-center pt-4 pb-3'>
                          <MDBCol md='4' className='pe-5'>
                          <MDBFile size='lg' id='image1' />
                          <div className="small text-muted mt-2">Photo 1</div>
                          </MDBCol>

                          <MDBCol md='4' className='pe-5'>
                          <MDBFile size='lg' id='image2' />
                          <div className="small text-muted mt-2">Photo 2</div>
                          </MDBCol>

                          <MDBCol md='4' className='pe-5'>
                          <MDBFile size='lg' id='image3' />
                          <div className="small text-muted mt-2">Photo 3</div>
                          </MDBCol>
                      </MDBRow>

                        <div className="d-grid gap-2" >
                        <button 
                        className={`${classes.btnSubmit} btn btn-block btn-lg mt-4 mb-4`} 
                        onClick={this.handleValidationForm}
                        type="button"
                        >Valider</button>
                      </div>
        
                    </MDBCardBody>
                  </MDBCard>
        
                </MDBCol>
              </MDBRow>
              </form>
            </MDBContainer>
          );
    }
}

export default AddAnnouncement;