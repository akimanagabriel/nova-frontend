import React from "react";
import GoogleLogin from "react-google-login";
import api from "./../../config/basicConfig";
import { useDispatch } from "react-redux";
import authSlice from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function GoogleLoginComponent() {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const { login } = authSlice.actions;

  const handleSuccess = (res) => {
    const googleUser = res.profileObj;

    const novaUser = {
      fullName: googleUser.name,
      email: googleUser.email,
      image: googleUser.imageUrl,
    };
    // store state into redux store
    saveUser(novaUser);
    dispatch(login(novaUser));
    redirect("/admin/dashbord");
  };

  const handleFailure = (res) => {
    console.log("Ooops error occured", res);
  };

  const saveUser = (user) => {
    fetch(api.offlineUrl + "/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <GoogleLogin
      buttonText="Continue with google"
      clientId={api.googleClientId}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      isSignedIn={true}
    />
  );
}

export default GoogleLoginComponent;
