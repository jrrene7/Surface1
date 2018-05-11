import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Thumbnail, Media } from 'react-bootstrap';
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
          <Thumbnail src="assets/placeholder.png" square className="profile-pic" />
          <h3> ---- </h3>
          <p> Blah blah blah </p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Thumbnail src="assets/placeholder.png" square className="profile-pic" />
          <h3> ---- </h3>
          <p> Blah blah blah </p>
        </Col>
        <Col xs={12} sm={4} className="person-wrapper">
          <Thumbnail src="assets/placeholder.png" square className="profile-pic" />
          <h3> ---- </h3>
          <p> Blah blah blah </p>
        </Col>
      </Row>
      <Row className="Media">
        <Media>

    <Media>
    <Media.Left>
      <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <Media>
        <Media.Body>
          <Media.Heading>Nested Media Heading</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
        <Media.Left>
          <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
        </Media.Left>
      </Media>
    </Media.Body>
  </Media>

  <Media>
    <Media.Left>
      <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <Media>
        <Media.Body>
          <Media.Heading>Nested Media Heading</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
        <Media.Left>
          <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
        </Media.Left>
      </Media>
    </Media.Body>
  </Media>

  <Media>
    <Media.Left>
      <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
      
    </Media.Body>
  </Media>
  </Media>



       

      </Row>

    <Row>
    <Media>
    <Media.Left>
      <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Media Heading</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <Media>
        <Media.Left>
          <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Nested Media Heading</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </Media.Body>
  </Media>

    </Row>

      </Grid>
    );
  }
}

export default Home;