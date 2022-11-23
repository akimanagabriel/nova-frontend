import React from "react";
import authSlice from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Demo() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { login, logout } = authSlice.actions;
  const user = {
    id: 1,
    name: "leirbag",
  };

  return (
    <div>
      {!isLoggedIn && (
        <button onClick={() => dispatch(login(user))}>Login</button>
      )}
      {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
      {console.log(isLoggedIn)}
    </div>
  );
}

export default Demo;
