import AuthLogo from "@/assets/media/logo/auth-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignupApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  function createSignup() {
    console.log(name, email, password, rePassword);
    setName("");
    setEmail("");
    setPassword("");
    setRePassword("");
  }
  return (
    <>
      <section className='signup-container'>
        <div className='signup-logo'>
          <img
            src={AuthLogo}
            alt='Auth_Logo'
          />
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
                By creating an account, you agree to Amazon's Conditions of Use
                and Privacy Notice.
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
    </>
  );
}

export default SignupApp;
