import { Navigate } from "react-router-dom";

function AuthApp({path}) {
  return <Navigate to={path}></Navigate>;
}

export default AuthApp;
