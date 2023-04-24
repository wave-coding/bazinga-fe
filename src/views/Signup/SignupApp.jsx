import { useValidation } from "react-simple-form-validator";

import AuthLogo from "@/assets/media/logo/auth-logo.png";

import { useGlobalContext } from "@/context/useContext";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { toast } from "react-toastify";

import AuthApp from "../Auth/AuthApp";

import { useState } from "react";

function SignupApp() {
  const { create_account, user } = useGlobalContext();
  const movePage = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      name: { required: true, minlength: 4 },
      email: { email: true, required: true },
      password: { required: true, minlength: 6, equalPassword: rePassword },
      rePassword: { required: true, minlength: 6, equalPassword: password },
    },
    state: { email, name, password, rePassword },
  });
  function createSignup() {
    if (isFormValid) {
      create_account({ name, email, password, rePassword });
      setName("");
      setEmail("");
      setPassword("");
      setRePassword("");
      movePage("/login");
      toast.success("Account Is Created");
    } else {
      if (isFieldInError("name")) {
        getErrorsInField("name").forEach((text) => {
          toast.error(text, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
      }
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
        <section className='signup-container'>
          <div className='signup-logo'>
            <Link to={"/"}>
              <img
                src={AuthLogo}
                alt='Auth_Logo'
              />
            </Link>
          </div>
          <div className='signup-content'>
            <h3>Create account</h3>
            <div className='signup-form'>
              <div className='signup-form-content'>
                <label htmlFor='Name'>Your name</label>
                <input
                  type='text'
                  name='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='signup-form-content'>
                <label htmlFor='Email'>Email</label>
                <input
                  type='email'
                  name='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='signup-form-content'>
                <label htmlFor='Password'>Password</label>
                <input
                  type='password'
                  name='Password'
                  placeholder='At least 6 characters'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='signup-form-content'>
                <label htmlFor='RePassword'>Re-enter password</label>
                <input
                  type='password'
                  name='RePassword'
                  placeholder='password'
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
              <div className='signup-button'>
                <button onClick={() => createSignup()}>
                  <p>Create Your Amazon account</p>
                </button>
              </div>
              <div className='signup-term'>
                <small>
                  By creating an account, you agree to Amazon's Conditions of
                  Use and Privacy Notice.
                </small>
              </div>
              <div className='switch-to-register'>
                <small>Already have an account ? </small>
                <Link to={"/login"}>
                  <small>Sign-In</small>
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

export default SignupApp;
