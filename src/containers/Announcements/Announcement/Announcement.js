import React from "react";
import Bouton from "../../../components/Bouton/Bouton";
import {  MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBCol } from 'mdb-react-ui-kit';
import Moment from 'react-moment';
//import ShowMoreText from "react-show-more-text";
import classes from './Announcement.module.css';

const Announcement = (props) =>(

    <>
        <MDBCard className={`${classes.AnnouncementCard} card h-80`}>
          <MDBCardImage
            src='https://www.shutterstock.com/image-vector/car-icon-eps10-260nw-420130861.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>
              {props.name}
            </MDBCardTitle>
            
            <MDBListGroup>
              <MDBListGroupItem>Prix : {props.prix}</MDBListGroupItem>
              <MDBListGroupItem>Localisation : {props.ville} - {props.zip}</MDBListGroupItem>
              {/* <MDBListGroupItem className="clamp"> 
                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="show-more-less-clickable"
                  // onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                  truncatedEndingComponent={"... "}
                >
                  {props.description}
              </ShowMoreText>
            </MDBListGroupItem> */}
            </MDBListGroup>
        
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'> <Moment fromNow>{props.dateCreation }</Moment></small>
          </MDBCardFooter>
        </MDBCard>
 
    

        {/* <td><Bouton typeBtn="btn-warning" click={props.modification}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" click={props.suppression}>Supprimer</Bouton></td> */}
    </>    
    );

export default Announcement;