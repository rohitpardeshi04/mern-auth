import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import { logoutUser } from "../../actions/authActions";
class Logout extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <NavLink
          onClick={this.onLogoutClick}
          //   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </NavLink>
      </div>
    );
  }
}
Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Logout);
