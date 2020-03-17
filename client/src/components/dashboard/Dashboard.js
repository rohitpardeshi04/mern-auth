import React, { Component } from "react";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    // const { user } = this.props.auth;
    return (
      <div>
        {/* <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button> */}

        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12 text-center">
              <p>
                Hello...
                <br />
                You are logged in...
                <br /> This is the dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Dashboard.propTypes = {
//   // logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
export default Dashboard;
