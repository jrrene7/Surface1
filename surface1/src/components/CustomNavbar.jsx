import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';


class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
      	<Navbar.Header>
      		<Navbar.Brand>
      			<Link to="/">Surface1</Link>
      		</Navbar.Brand>
      		<Navbar.Toggle />
      	</Navbar.Header>
      	<Navbar.Collapse>
      		<Nav pullRight>
      			<NavItem eventKey={1} componentClass={Link} href="/" to="/">
      			Home
      			</NavItem>
      			<NavItem eventKey={2} componentClass={Link} href="/Details" to="/Details">
      			Details
      			</NavItem>
      			<NavItem eventKey={3} componentClass={Link} href="/Profile" to="/Profile">
      			Profile
      			</NavItem>
      		</Nav>
      	</Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;