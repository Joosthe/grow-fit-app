import React, { useRef, useState } from 'react';
import { useAuth } from '../../../Contexts/authContext';
import { Link, useHistory } from 'react-router-dom';
import './styles/LoginPage.scss';

function LoginPage() {
  const emailLogin = useRef();
  const passwordLogin =  useRef();
  const { loginUser } =  useAuth();
  const [ error, setError] = useState('');
  const [loading, setLoading] =  useState(false);
  const history = useHistory();
   async function handleSubmit(e){ 
    e.preventDefault()
     try{
       setError('');
       setLoading(true);
        await loginUser(
          emailLogin.current.value,
          passwordLogin.current.value
        )
        history.push('/profile');
     }catch{
        setError('failed to sign in')
     }
     setLoading(false);
   }
  return (
    <div className="page--login ">
      {error &&<h2>{error}</h2>}
      <section className="intro">
        <h1 className="text-4xl font-semibold">Welcome back</h1>
        <p className="into-line">lease sign in to use our wonderfull app</p>
      </section>
      <section className="form-sign-in">
        <form action="post" onSubmit={handleSubmit}>
          <div className="form-element ">
            <label htmlFor="username">e-mail</label>
            <input type="text" name="logintext" id="usernamelogin" ref={emailLogin} />
          </div>
          <div className="form-element ">
            <label htmlFor="password">Password</label>
            <input type="pasword" name="logintext" id="passwordlogin" ref={passwordLogin} />
          </div>
          <div className="form-element ">
            <input type="submit" name="loginsubmit" id="submitlogin" disabled={loading} />
          </div>
        </form>
        <div>
         In need of an account ?<Link to="/register">register here</Link>
      </div>
      </section>
    </div>
  )
}

export default LoginPage
