import AuthLogo from "@/assets/media/logo/auth-logo.png";

function SignupApp() {
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
          <h3>Sign-In</h3>
          <div className='signup-form'>
            <div className='signup-form-content'>
              <label htmlFor='Email'>Email</label>
              <input
                type='email'
                name='Email'
              />
            </div>
            <div className='signup-form-content'>
              <label htmlFor='Password'>Password</label>
              <input
                type='password'
                name='Password'
              />
            </div>
            <div className='signup-button'>
              <button>
                <p>Sign In</p>
              </button>
            </div>
            <div className='signup-term'>
              <small>
                By creating an account, you agree to Amazon's Conditions of Use
                and Privacy Notice.
              </small>
            </div>
            <div className='switch-to-login'>
              <small>New to Amazon ? </small>
            </div>
            <div className='switch-to-login-button'>
              <button>
                <p>Create your Amazon Account</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupApp;
