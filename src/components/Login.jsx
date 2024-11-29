import React, { useState } from "react";
import "../css/Login.css";

const initialValues = {
  email: "",
  password: "",
  terms: "",
};

function Login(props) {
  const { isSubmit, setIsSubmit, resultMessage, setResultMessage } = props;
  const [isValid, setIsValid] = useState(false);

  const handleChange = () => {};

  return (
    <div className="form-container">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <div className="checkbox-container">
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms">I aggre with terms and services</label>
      </div>
      <button className="btn-submit">Submit</button>
    </div>
  );
}

export default Login;
