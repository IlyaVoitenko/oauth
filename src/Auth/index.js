import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../redux/slices";
import { Link } from "react-router-dom";

const Auth = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsAuth(isAuthenticated));
  }, [isAuthenticated]);
  return (
    <div>
      {!isAuthenticated ? <Login /> : <Logout />}
      {isAuthenticated && <Link to="/profile">profile</Link>}
    </div>
  );
};

export default Auth;
