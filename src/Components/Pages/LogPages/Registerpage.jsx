import React, { useRef, useState } from 'react'
import { useAuth } from '../../../Contexts/authContext';  
import { useHistory } from 'react-router-dom';
import Button from '../../Buttons/Button';
import Container from '../../Wrappers/Container';
function RegisterPage() {
  const registerEmailRef = useRef();
  const registerPasswordRef =  useRef();
  const registerConfPasswordRef =  useRef();
  const { registerUser } =  useAuth();
  const [ error, setError] = useState('');
  const [loading, setLoading] =  useState(false)
  const history = useHistory();
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
      history.push ('/login')
      setError('Please log in with your new account');
    }catch{
       setError('failed to register a user')
    }
    setLoading(false);
  }

  return (
    <div className="page--login">
      <Container>
      <section className="intro">
        <h1 className="text-4xl font-semibold">Welcome</h1>
        <p className="intro-line">
          So you think you are up for a challenge?<br/>
          <b>register</b> and find out now
        </p>
      </section>
      {error &&<h2>{error}</h2>}
      <section className="form--register--wrapper">
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
          <input type="submit" disabled={loading} name="registerform" id="submitregister" className="btn btn-prim" />
        </form>
      </section>
      <div className="description text-center">
        <p>Already have an account ? <Button variant={'btn-sm btn-prim'} to="/login">Log in</Button><br/>
        </p>   
      </div>
      </Container>
    </div>
  )
}

export default RegisterPage
