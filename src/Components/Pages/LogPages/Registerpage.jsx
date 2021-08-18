import React, { useRef, useState } from 'react'
import { useAuth } from '../../../Contexts/authContext';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const registerEmailRef = useRef();
  const registerPasswordRef =  useRef();
  const registerConfPasswordRef =  useRef();
  const { registerUser } =  useAuth();
  const [ error, setError] = useState('');
  const [loading, setLoading] =  useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    if(registerPasswordRef.current.value !== registerConfPasswordRef.current.value){
      return setError('paswords do not match');
    }
    try{
      setError('');
      setLoading(true);
      await registerUser(
        registerEmailRef.current.value,
        registerPasswordRef.current.value
      )
    }catch{
       setError('failed to register a user')
    }
    setLoading(false);
  }

  return (
    <div className="page--login">
      <section className="intro">
        <h1 className="text-4xl font-semibold">Welcome</h1>
        <p className="into-line">
          So you think you are up for a challenge?<br/>
          <b>register</b> and find out now
        </p>
      </section>
      {error &&<h2>{error}</h2>}
      <form onSubmit={handleSubmit} className="form--register">
        <div className="form-group" id="registeremail">
          <label>E-mail</label>
          <input type="email" ref={registerEmailRef} required/>
        </div>
        <div className="form-group" id="registerpassword">
          <label>Password</label>
          <input type="password" ref={registerPasswordRef} required/>
        </div>
        <div className="form-group" id="registerconfpassword">
          <label>Confirm password</label>
          <input type="password" ref={registerConfPasswordRef} required/>
        </div>
        <input type="submit" disabled={loading} name="registerform" id="submitregister" />
      </form>
      <div>
        Already have an account ?<Link to="/login">Log in</Link>
      </div>
    </div>
  )
}

export default RegisterPage
