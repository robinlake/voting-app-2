import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
logout(e) {
  e.preventDefault();
  this.props.logout();
}

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/my-polls">My Polls</a></li>
            <li><a href="/new-poll">New Poll</a></li>
            <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
          </ul>
    );

    const guestLinks = (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
    );

    const commonLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/all-polls">All Polls</Link></li>
      </ul>
    );

    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Red Dice</Link>
        </div>

        <div className=" navbar-collapse">
          { isAuthenticated? userLinks : guestLinks }
          { commonLinks }
        </div>
      </div>
    </nav>
  );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);