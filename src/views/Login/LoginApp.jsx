import { useValidation } from "react-simple-form-validator";

import AuthLogo from "@/assets/media/logo/auth-logo.png";

import { useGlobalContext } from "@/context/useContext";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { toast } from "react-toastify";

import AuthApp from "../Auth/AuthApp";

import { useState } from "react";

function LoginApp() {
  const { login_user, user } = useGlobalContext();
  const movePage = useNavigate();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      email: { email: true, required: true },
      password: { required: true, minlength: 6, equalPassword: password },
    },
    state: { email, password },
  });
  function createLogin() {
    if (isFormValid) {
      if (user.password === password) {
        login_user({ email, password });
        setEamil("");
        setPassword("");
        movePage("/");
      } else {
        toast.error("Your Password is Wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      if (isFieldInError("email")) {
        getErrorsInField("email").forEach((text) => {
          toast.error(text, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
      }
      if (isFieldInError("password")) {
        getErrorsInField("password").forEach((text) => {
          toast.error(text, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
      }
    }
  }
  if (user.auth) {
    return <AuthApp path={"/"}></AuthApp>;
  } else {
    return (
      <>
        <section className='login-container'>
          <div className='login-logo'>
            <Link to={"/"}>
              <img
                src={AuthLogo}
                alt='Auth_Logo'
              />
            </Link>
          </div>
          <div className='login-content'>
            <h3>Sign-In</h3>
            <div className='login-form'>
              <div className='login-form-content'>
                <label htmlFor='Email'>Email</label>
                <input
                  type='email'
                  name='Email'
                  value={email}
                  onChange={(e) => setEamil(e.target.value)}
                />
              </div>
              <div className='login-form-content'>
                <label htmlFor='Password'>Password</label>
                <input
                  type='password'
                  name='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='login-button'>
                <button onClick={() => createLogin()}>
                  <p>Sign In</p>
                </button>
              </div>
              <div className='login-term'>
                <small>
                  By creating an account, you agree to Amazon's Conditions of
                  Use and Privacy Notice.
                </small>
              </div>
              <div className='switch-to-login'>
                <small>New to Amazon ? </small>
              </div>
              <div className='switch-to-login-button'>
                <Link to={"/signup"}>
                  <button>
                    <p>Create your Amazon Account</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Toast Contaienr */}
        <ToastContainer></ToastContainer>
      </>
    );
  }
}

export default LoginApp;
