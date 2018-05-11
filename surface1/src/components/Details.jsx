import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, Thumbnail, Media, Carousel, Panel, PanelGroup, Form, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import './Details.css';

class Details extends Component {
  render() {
    return (
      <div>
      <Grid>

      <Jumbotron>
      	 <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="assets/placeholder.png" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="assets/placeholder.png" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="assets/placeholder.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Jumbotron>

      


      	<Media>
    <Media.Left align="middle">
      <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Middle aligned media</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

        	<Media>
    <Media.Left align="middle">
      <img width={64} height={64} src="assets/placeholder.png" alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>Middle aligned media</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>



<PanelGroup accordion id="accordion-example">
  <Panel eventKey="1">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
      aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </Panel.Body>
  </Panel>
  <Panel eventKey="2">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
      aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </Panel.Body>
  </Panel>
  <Panel eventKey="3">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
      aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </Panel.Body>
  </Panel>
</PanelGroup>




  <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Name
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>In hac habitasse platea dictumst. Vi.</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Submit</Button>
    </Col>
  </FormGroup>
</Form>;

      </Grid>
      </div>
    );
  }
}

export default Details;