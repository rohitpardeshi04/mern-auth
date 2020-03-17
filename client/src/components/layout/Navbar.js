import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "../auth/logout";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Container } from "reactstrap";

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
          <Link to="/register">Register</Link>
        </NavItem>
        <NavItem className="m-2">
          <Link to="/login">Login</Link>
        </NavItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar color="dark" dark expands="sm" className="mb-5">
          <Container>
            <Link to="/">Home</Link>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateoProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateoProps, null)(AppNavbar);
