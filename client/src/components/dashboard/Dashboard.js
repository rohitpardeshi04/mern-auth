import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12 text-center">
              <p>
                Hello...
                <br />
                You are logged in as {user.name}...
                <br /> <br /> <br /> This is the main dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateoProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateoProps, null)(Dashboard);
