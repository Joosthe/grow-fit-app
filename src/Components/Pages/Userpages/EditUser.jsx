import React from 'react'

export default function EditUser() {
  return (
    <div>
      <div className="form-group" id="registerfirstname">
        <label>First Name</label>
        <input type="text" ref={registerFirstName} required/>
      </div>
      <div className="form-group" id="registerlastname">
        <label>Last Name</label>
        <input type="text" ref={registerLastName} required/>
      </div>
      <div className="form-group" id="registerusername">
        <label>Username</label>
        <input type="text" ref={registerUserName} required/>
      </div>
    </div>
  )
}
