import React from "react";
import "./login.css";
import { useState } from "react";
// import DialogueBox from "../Common/dialogueBox";

function LoginForm() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("submitted");

    // try {
    //   const response = await fetch("your-api-endpoint", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       employeeId,
    //       password,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const data = await response.json();
    //   console.log("Response from server:", data);

    //   // Handle successful login response here
    // } catch (error) {
    //   console.error("Error:", error);
    //   // Handle error here
    // }
  };

  return (
    <div>
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="logo_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100"
            fill="currentColor"
            className="bi bi-person-workspace"
            viewBox="0 0 16 16"
          >
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
          </svg>
        </div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Employee ID
          </label>
          <input
            name="input-name"
            type="text"
            className="input_field"
            id="employeeId"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <input
            name="input-name"
            type="password"
            className="input_field"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button title="Sign In" type="submit" className="sign-in_btn">
          <span>Sign In</span>
        </button>

        {/* <a
        className="note"
        id="iforgot-link"
        class="si-link ax-outline lite-theme-override"
        href="https://iforgot.apple.com/password/verify/appleid"
        target="_blank"
      >
        Forgotten your{" "}
        <span class="no-wrap sk-icon sk-icon-after sk-icon-external">
          password?
        </span> */}
        {/* </a> */}
      </form>
    </div>
  );
}

export default LoginForm;
