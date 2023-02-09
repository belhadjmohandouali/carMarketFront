import React, { Component } from 'react';
import AddAnnouncement from './AddAnnouncement/AddAnnouncement';
import Announcement from './Announcement/Announcement';
import FormulaireAjout from './AddAnnouncement/AddAnnouncement';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'mdbreact';



class Announcements extends Component {
    state = { 
        isLoaded:"",
        announcements:""
  }
  state = { 
    // isLoaded: false,
    announcements:[
             {id:"", titre: "", prix: "", ville: "", zip: "", description:""},
            // {id:2, titre: "La France du 19 ème", auteur: "Albert PATRICK", nbpages: "500"},
            // {id:3, titre: "Le monde des animaux", auteur: "Marc MERLIN", nbpages: "250"}
        ],

}

 //chargement des annonces 
 componentDidMount() {
    fetch("http://127.0.0.1:8000/api/announcements")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                announcements: result['hydra:member']
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
    
    render(){ console.log(this.state.announcements)     
        return (
           
                <Container>
                  <Row>
                    {this.state.announcements.map((announcement, index) => (
                      
                      <Col md="3" className="mt-3 mb-3" mb="2" key={index}>
                       
                        <Announcement
                        titre={announcement.name}
                        prix={announcement.price}
                        ville={announcement.ville}
                        zip={announcement.zip}
                        description={announcement.description}
                        dateCreation={announcement.dateCreation}
                    />
                        
                      </Col>
                    ))}
                  </Row>
                </Container>
            );
                
        
        
        
    }
}

export default Announcements;


