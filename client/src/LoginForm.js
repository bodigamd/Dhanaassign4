import './App.css';

function LoginForm() {
  return (
    <div className="App">
      <div className="signup-form">
  <form action="/examples/actions/confirmation.php" method="post">
    <h2>Log in</h2>
    <p>Please fill in this form to log in to your account!</p>
    <hr />
    <div className="form-group">
      <input
        type="email"
        className="form-control"
        name="email"
        placeholder="Email"
        required="required"
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
        required="required"
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-lg">
        Log In
      </button>
    </div>
  </form>
  <div className="hint-text">
    New User? <a href="#">Register here</a>
  </div>
</div>

    </div>
  );
}

export default LoginForm;
