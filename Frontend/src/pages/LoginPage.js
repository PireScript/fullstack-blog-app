import "./LoginRegisterPage.css";
import React from "react";

function LoginPage() {
  return (
    <>
    <div class="login-container">
        <h2>Login</h2>
        <form class="login-form">
            <div class="input-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username"></input>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"></input>
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    </>
  );
}

export default LoginPage;

