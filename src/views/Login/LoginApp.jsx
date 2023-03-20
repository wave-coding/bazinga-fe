import AuthLogo from "@/assets/media/logo/auth-logo.png";

function LoginApp() {
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
          <h3>Create account</h3>
          <div className='login-form'>
            <div className='login-form-content'>
              <label htmlFor='Email'>Email</label>
              <input
                type='email'
                name='Email'
              />
            </div>
            <div className='login-form-content'>
              <label htmlFor='Password'>Password</label>
              <input
                type='password'
                name='Password'
              />
            </div>
            <div className='login-button'>
              <button>
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

export default LoginApp;
