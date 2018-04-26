import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <Grid>
      <Jumbotron>
      <h2>Welcome to Surface 1 Sports</h2>
      <p> (Under Construction) </p>
      <Link to="/details">
        <Button bsStyle='primary'>Details</Button>
      </Link>
      </Jumbotron>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="" circle className="profile-pic" />
        </Col>
      </Row>


      </Grid>
    );
  }
}

export default Home;