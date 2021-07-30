import React from 'react'
import {nicknames} from '../../../Data/nicknames.js' 
function RegisterPage() {
  return (
    <div className="page--login">
      <section className="intro">
        <h1 className="text-4xl font-semibold">Welcome</h1>
        <p className="into-line">
          So you think you are up for a challenge?<br/>
          <b>register</b> and find out now
        </p>
      </section>
      <form action="post" className="form--register">
        <div className="wrapper-50">
          <div className="form-element">
            <label htmlFor="username">First and Lastname</label>
            <input type="text" name="logintext" id="usernameregister" />
          </div>
          <div className="form-element ">
            <label htmlFor="username">E-mail</label>
            <input type="text" name="logintext" id="email-register" />
          </div>
          <div className="form-element ">
            <label htmlFor="username">Nickname</label>
            <div className="select-wrapper form-element">
              <select>
                <option>Choose a nickname</option>
                {nicknames.map((nickname, index)=>{
                  return(
                    <option  key={nickname}>{nickname}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="wrapper-50">
          <div className="form-element ">
            <label htmlFor="username">Username</label>
            <input type="text" name="logintext" id="usernameregister" />
          </div>
          <div className="form-element ">
            <label htmlFor="password">Password</label>
            <input type="pasword" name="logintext" id="passwordregister" />
          </div>
          <div className="form-element ">
            <label htmlFor="password">Password confirm</label>
            <input type="pasword" name="logintext" id="passwordconfirm" />
          </div>
          <div className="form-element ">
            <input type="submit" name="logintext" id="submitregister" />
          </div>
        </div>
        </form>
    </div>
  )
}

export default RegisterPage
