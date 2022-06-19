import React from "react";
import ReactDOM from "react-dom";

function Hoc({ info }) {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {info}</p>
    </div>
  );
}

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};  

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Hoc);
const AuthInfo = requireAuthentication(Hoc);

export default AdminInfo;
