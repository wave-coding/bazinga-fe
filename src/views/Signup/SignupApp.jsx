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
              <label htmlFor='Name'>Your name</label>
              <input
                type='text'
                name='Name'
              />
            </div>
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
                placeholder='At least 6 characters'
              />
            </div>
            <div className='signup-form-content'>
              <label htmlFor='RePassword'>Re-enter password</label>
              <input
                type='password'
                name='RePassword'
                placeholder='password'
              />
            </div>
            <div className='signup-button'>
              <button>
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
              <small>Sign-In</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupApp;
