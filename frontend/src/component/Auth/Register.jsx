import { useState } from "react";

const Register = () => {
  const [fromData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...fromData, [name]: value });
  };

  return (
    <div className="account-column">
      <h2>Register</h2>
      <form>
        <div>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input name="userName" onChange={handleInputChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input name="email" onChange={handleInputChange} type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              name="password"
              onChange={handleInputChange}
              type="password"
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy.</a>
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
