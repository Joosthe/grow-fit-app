import React from 'react'
import './styles/LoginPage.scss';

function LoginPage() {
  return (
    <div className="page--login ">
      <section className="intro">
        <h1 className="text-4xl font-semibold">Welcome back</h1>
        <p className="into-line">lease sign in to use our wonderfull app</p>
      </section>
      <section className="form-sign-in">
        <form action="post">
          <div className="form-element ">
            <label htmlFor="username">Username</label>
            <input type="text" name="logintext" id="usernamelogin" />
          </div>
          <div className="form-element ">
            <label htmlFor="password">Password</label>
            <input type="pasword" name="logintext" id="passwordlogin" />
          </div>
          <div className="form-element ">
            <input type="checkbox" name="logintext" id="rememberlogin" />
            <label htmlFor="checkbox">Remember password</label>

          </div>
          <div className="form-element ">
            <input type="submit" name="logintext" id="submitlogin" />
          </div>
        </form>
      </section>
    </div>
  )
}

export default LoginPage
