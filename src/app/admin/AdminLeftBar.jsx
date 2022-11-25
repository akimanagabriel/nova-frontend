import adminLeftMenus from "./AdminMenus";
import { Link, NavLink } from "react-router-dom";
import GoogleLogoutComponent from "./../../shared/loginWithGoogle/GoogleLogoutComponent";
import { useSelector, useDispatch } from "react-redux";
import adminLeftBar from "../../redux/slices/adminLeftBarSlice";

function AdminLeftBar() {
  const user = useSelector((state) => state.auth.authUser);
  const isVisible = useSelector((state) => state.admin.leftBar);
  const dispatch = useDispatch();
  const { toggle } = adminLeftBar.actions;

  return (
    <>
      {isVisible && (
        <div className="bg-indigo-900 overflow-y-visible min-h-screen w-screen md:max-w-xs text-white px-5">
          {/* close button */}
          <div className="flex justify-end pt-2">
            <button onClick={() => dispatch(toggle())}>
              <i className="fa fa-times" />
            </button>
          </div>

          {/* profile picture */}
          <div className="py-3">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Link to={"/dashbord"}>
                <img
                  src={user.image}
                  alt={user.fullName}
                  className="w-32 rounded-full border border-white"
                />
              </Link>
              <div className="flex flex-col space-y-0 gap-0">
                <span className="text-white">{user.fullName}</span>
                <small className="text-gray-300">{user.email}</small>
              </div>
            </div>
          </div>

          {/* separator */}
          <div className="border border-gray-400 h-0"></div>

          {/* dashboard links */}
          <div className="my-3">
            <ul className="grid grid-cols-3 md:grid-cols-2">
              {adminLeftMenus.map((menu, i) => (
                <li key={i}>
                  <div className="block m-2">
                    <NavLink
                      to={menu.url}
                      className={`dashboard flex flex-col justify-center shadow-sm items-center bg-indigo-800 p-2 rounded hover:text-indigo-800 hover:bg-indigo-200`}
                    >
                      {" "}
                      <i className={`${menu.icon} text-4xl`} />
                      &nbsp;&nbsp;&nbsp;
                      {menu.name}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* logout */}
          <div className="py-8 flex justify-end">
            <GoogleLogoutComponent />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminLeftBar;
