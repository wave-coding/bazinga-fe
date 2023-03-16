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
              <label htmlFor='Name'>Your name</label>
              <input
                type='text'
                name='Name'
              />
            </div>
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
                placeholder='At least 6 characters'
              />
            </div>
            <div className='login-form-content'>
              <label htmlFor='RePassword'>Re-enter password</label>
              <input
                type='password'
                name='RePassword'
                placeholder='password'
              />
            </div>
            <div className='login-button'>
              <button>
                <p>Create Your Amazon account</p>
              </button>
            </div>
            <div className='login-term'>
              <small>
                By creating an account, you agree to Amazon's Conditions of Use
                and Privacy Notice.
              </small>
            </div>
            <div className='switch-to-register'>
              <small>Already have an account ? </small>
              <small>Sign-In</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginApp;
