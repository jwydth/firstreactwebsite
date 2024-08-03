import React from "react";
import "./CSS/Loginsignup.css";

export const LoginSignup = () => {
  const [state, setState] = React.useState("Login");

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login", formData);

    let respondData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (respondData = data));

    if (respondData.success) {
      localStorage.setItem("aut_token", respondData.token);
      window.location.replace("/");
    } else {
      alert(respondData.error);
    }
  };

  const signUp = async () => {
    console.log("Sign Up", formData);

    let respondData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (respondData = data));

    if (respondData.success) {
      localStorage.setItem("aut_token", respondData.token);
      window.location.replace("/");
    } else {
      alert(respondData.error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsingup-container">
        <h1>{state}</h1>
        <div className="loginsignnup-field">
          {state === "Login" ? (
            <></>
          ) : (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            value={formData.email}
            name="email"
            onChange={changeHandler}
            type="email"
            placeholder="Email address"
          />
          <input
            value={formData.password}
            name="password"
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
        >
          Continue
        </button>
        {state === "Login" ? (
          <p className="loginsingup-login">
            Create an account{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="loginsingup-login">
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
