import React, { useRef, useState } from 'react';
import { useAuth } from '../../../Contexts/authContext';
import { useHistory } from 'react-router-dom';
import './styles/LoginPage.scss';
import Container from '../../Wrappers/Container';
import Button from '../../Buttons/Button';

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
        );
        history.push('/profile');
     }catch{
        setError('failed to sign in')
     }
     setLoading(false);
   }
  return (
    <div className="page--login">
      <Container>
      <section className="intro">
        <h1 className="text-4xl font-semibold">Welcome back</h1>
        <p className="intro-line text-center">Please sign in to use our wonderfull app</p>
      </section>
      {error &&<h2>{error}</h2>}
      <section className="form--login--wrapper">
        <form action="post" onSubmit={handleSubmit} className="form--login shadow-md">
          <div className="form-element ">
            <label htmlFor="username">E-mail</label>
            <input type="text" name="logintext" id="usernamelogin" ref={emailLogin} />
          </div>
          <div className="form-element ">
            <label htmlFor="password">Password</label>
            <input type="pasword" name="logintext" id="passwordlogin" ref={passwordLogin} />
          </div>
          <div className="form-element ">
            <input type="submit" name="loginsubmit" id="submitlogin" disabled={loading} className="btn btn-prim" />
          </div>
        </form>
        <div className="description text-center">
            <p>In need of an account ? <Button variant={'btn-sm btn-prim'} to="/register">Register here</Button><br/>
            </p>
          </div>
        <div>
      </div>
      </section>
      </Container>
    </div>
  )
}

export default LoginPage
