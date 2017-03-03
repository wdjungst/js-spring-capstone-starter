import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

const AuthenticatedRoutes = ({ user, children }) => (
  <div>
   { user._id ? children : null }
  </div>
)

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AuthenticatedRoutes);
