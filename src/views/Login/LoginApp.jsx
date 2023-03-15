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
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginApp;
