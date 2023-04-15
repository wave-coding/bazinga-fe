import AuthLogo from "@/assets/media/logo/auth-logo.png";

import { useGlobalContext } from "@/context/useContext";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function LoginApp() {
  const { login_user } = useGlobalContext();
  const movePage = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function createLogin() {
    login_user({ name, password });
    setName("");
    setPassword("");
    movePage("/");
  }
  return (
    <>
      <section className='login-container'>
        <div className='login-logo'>
          <img
            src={AuthLogo}
            alt='Auth_Logo'
          />
        </div>
        <div className='login-content'>
          <h3>Sign-In</h3>
          <div className='login-form'>
            <div className='login-form-content'>
              <label htmlFor='Email'>Email</label>
              <input
                type='email'
                name='Email'
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                By creating an account, you agree to Amazon's Conditions of Use
                and Privacy Notice.
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
    </>
  );
}

export default LoginApp;
