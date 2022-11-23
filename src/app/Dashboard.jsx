import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import GoogleLogoutComponent from "../shared/loginWithGoogle/GoogleLogoutComponent";

function Dashboard() {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {!isLoggedIn && <Navigate to={"/"} />}

      <nav>
        <div>
          <h1>Dashboard</h1>
          <div>
            <GoogleLogoutComponent />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Dashboard;
