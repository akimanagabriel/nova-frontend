import React from "react";
import { GoogleLogout } from "react-google-login";
import api from "./../../config/basicConfig";
import authSlice from "./../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function GoogleLogoutComponent() {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const handleLogout = (res) => {
    const { logout } = authSlice.actions;
    dispatch(logout());
    redirect("/");
  };

  return (
    <div>
      <div id="signOutButton">
        <GoogleLogout
          buttonText="Logout"
          icon="false"
          clientId={api.googleClientId}
          onLogoutSuccess={handleLogout}
          theme="dark"
        />
      </div>
    </div>
  );
}

export default GoogleLogoutComponent;
