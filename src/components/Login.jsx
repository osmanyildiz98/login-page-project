import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Login.css";

const initialValues = {
  email: "",
  password: "",
  terms: false,
};

const errorMessages = {
  email: "Please enter a valid email address",
  password: "Password must be at least 4 characters long",
};

function Login(props) {
  const { isSubmit, setIsSubmit, resultMessage, setResultMessage } = props;
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState({
    email: false,
    password: false,
    terms: false,
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      formData.password.trim().length >= 4 &&
      formData.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    const newError = {
      ...error,
      email: name === "email" ? !validateEmail(newFormData.email) : error.email,
      password:
        name === "password"
          ? newFormData.password.trim().length <= 4
          : error.password,
      terms: name === "terms" ? !newFormData.terms : error.terms,
    };

    setFormData(newFormData);
    setError(newError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/login")
      .then((response) => {
        const user = response.data.find(
          (item) =>
            item.email === formData.email &&
            item.password === formData.password &&
            formData.terms
        );
        if (user) {
          setIsSubmit(true);
          setResultMessage(true);
        } else {
          setIsSubmit(true);
        }
      })
      .catch((error) => console.warn(error));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" onChange={handleChange} />
      {error.email && (
        <p id="email-error" className="error-message">
          {errorMessages.email}
        </p>
      )}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      {error.password && (
        <p id="password-error" className="error-message">
          {errorMessages.password}
        </p>
      )}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChange}
        />
        <label
          htmlFor="terms"
          className={formData.terms ? null : "checkbox-error"}
        >
          I aggre with terms and services
        </label>
      </div>
      <button id="submit-button" className="btn-submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default Login;
