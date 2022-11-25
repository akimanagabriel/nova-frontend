import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuList } from "./topMenu";
import logo from "../images/NOVA-LOGO.JPG";
import { useSelector } from "react-redux";
import GoogleLogoutComponent from "./loginWithGoogle/GoogleLogoutComponent";
import GoogleLoginComponent from "./loginWithGoogle/GoogleLoginComponent";

function TopHeader() {
  const [visible, setVisible] = useState(true);

  const handleMenus = () => {
    setVisible(!visible);
  };

  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <div className="flex  py-1 justify-between items-center px-5">
        <div>
          <p className="block">
            {" "}
            <strong>Email: </strong>
            <a
              href="mailto:novaservicesltd@gmail.com"
              className="hover:text-orange-700"
            >
              novaservicesltd@gmail.com
            </a>
          </p>
          <p className="block">
            {" "}
            <strong>Tel: </strong>{" "}
            <a href="tel:+250788552611" className="hover:text-orange-700">
              +250 788 552 611
            </a>{" "}
            /{" "}
            <a className="hover:text-orange-700" href="tel:+250785122486">
              +250 785 122 486
            </a>
          </p>
        </div>
        <div className="hidden sm:block">
          {!isLoggedIn && (
            <>
              <div className="flex gap-3 items-center justify-end">
                <Link
                  className="bg-blue-900 px-6 py-2 rounded-full text-white"
                  to={"/get-started"}
                >
                  Get Started
                </Link>
                <GoogleLoginComponent />
              </div>
            </>
          )}

          {isLoggedIn && <GoogleLogoutComponent />}
        </div>
      </div>

      {/* Main header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center bg-blue-900 px-5 py-2 sticky top-0 z-40 shadow">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-sky-50">
            <Link to={"/"}>
              <img src={logo} alt="ico" className="h-10 rounded" />
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-white" onClick={handleMenus}>
              <i className={visible ? "fa fa-times" : "fa fa-bars"} />
            </button>
          </div>
        </div>

        <div>
          {visible && (
            <ul className="flex flex-col md:flex-row  md:space-x-5 space-y-2 md:space-y-0 py-2 text-sky-100">
              {menuList.map((menu) => {
                return (
                  <li key={menu.id.toString()}>
                    <NavLink
                      className={"hover:font-bold hover:underline space-x-3"}
                      to={menu.url}
                    >
                      <i className={menu.logo} />
                      <span>{menu.name}</span>
                    </NavLink>
                  </li>
                );
              })}
              <li className="md:hidden flex">
                <NavLink
                  className={
                    "border px-4 py-2 rounded hover:bg-white hover:text-sky-700"
                  }
                  to={"/get-started"}
                >
                  Get Started with NOVA
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default TopHeader;
