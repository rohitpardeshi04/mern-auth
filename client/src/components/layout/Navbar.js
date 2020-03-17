import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "../auth/logout";
import { logoutUser } from "../../actions/authActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{user ? "Welcome " + user.name : ""}</strong>
          </span>
        </NavItem>
        <NavItem onClick={this.toggle}>
          <Logout></Logout>
        </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem className="m-2">
          <NavLink onClick={this.toggle} href="/register">
            Register
          </NavLink>
        </NavItem>
        <NavItem className="m-2">
          <NavLink onClick={this.toggle} href="/login">
            Login
          </NavLink>
        </NavItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar color="dark" dark expands="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Home</NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle} /> */}
            {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
            {/* </Collapse> */}
          </Container>
        </Navbar>
      </div>
    );
  }
}

// Logout.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

const mapStateoProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateoProps, null)(AppNavbar);
