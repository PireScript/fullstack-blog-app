import React from "react";
import "./LoginRegisterPage.css";

function RegisterPage() {
  return (
    <>
      <div class="register-container">
        <h2>Register</h2>
        <form class="register-form">
            <div class="input-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Choose a username"></input>
            </div>
            <div class="input-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"></input>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Choose a password"></input>
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
    </>
  );
}

export default RegisterPage;
