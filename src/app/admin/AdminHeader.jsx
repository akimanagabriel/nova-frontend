import React from "react";
import { useDispatch } from "react-redux";
import adminLeftBar from "../../redux/slices/adminLeftBarSlice";
import logo from "../../images/NOVA-LOGO.JPG";
import GoogleLogoutComponent from "../../shared/loginWithGoogle/GoogleLogoutComponent";

function AdminHeader() {
  const dispatch = useDispatch();
  const { toggle } = adminLeftBar.actions;
  return (
    <>
      <div className="w-[100%]">
        <div className="shadow bg-white px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <button onClick={() => dispatch(toggle())}>
              <i className="fa fa-bars" />
            </button>
            {/* app logo */}
            <img
              src={logo}
              alt="nogo logo"
              className="w-16 rounded border hidden sm:block"
            />
            {/* app header text */}
            <h1 className="text-xl font-bold text-indigo-900 hidden md:block">
              Nova Company Limited
            </h1>
          </div>

          <div>
            {/* logout */}
            <GoogleLogoutComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
