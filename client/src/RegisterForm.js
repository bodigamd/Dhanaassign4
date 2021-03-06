import './App.css';

function RegisterForm() {
  return (
    <div className="App">
      <div className="signup-form">
  <form action="/examples/actions/confirmation.php" method="post">
    <h2>Sign Up</h2>
    <p>Please fill in this form to create an account!</p>
    <hr/>
    <div className="form-group">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="First Name"
            required="required"/>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Last Name"
            required="required"
          />
        </div>
      </div>
    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        name="UserId"
        placeholder="UserId"
        required="required"/>
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
        required="required"/>
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        name="confirm_password"
        placeholder="Confirm Password"
        required="required"/>
    </div>
    <div className="form-group">
      <label className="form-check-label">
        <input type="checkbox" required="required" /> I accept the{" "}
        <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
      </label>
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-lg">
        Sign Up
      </button>
    </div>
  </form>
  <div className="hint-text">
    Already have an account? <a href="#">Login here</a>
  </div>
</div>

    </div>
  );
}

export default RegisterForm;