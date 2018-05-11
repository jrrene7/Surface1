import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
      <Grid>

      	<ListGroup>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>...</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>...</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>...</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>Item</ListGroupItem>
  				<ListGroupItem>.</ListGroupItem>
				</ListGroup>

      </Grid>
      </div>
    );
  }
}

export default Profile;