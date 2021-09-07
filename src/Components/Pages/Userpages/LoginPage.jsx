import React, { useRef, useState } from 'react';
import { useAuth } from '../../../Contexts/authContext';
import { useHistory } from 'react-router-dom';
import './styles/LoginPage.scss';
import Container from '../../Wrappers/Container';
import Button from '../../PageComponents/Buttons/Button';
import IntroSection from '../../PageSections/IntroSection';
import StaticContent from'../../../staticContent/content-En.js';
import Form from '../../PageComponents/FormElements/Form';
const sc =  StaticContent.UserPages.LoginPage;
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
      <IntroSection line={sc.introLine} title={sc.title}/>
      {error &&<h2>{error}</h2>}
      <section className="form--login--wrapper">
        <Form onSubmit={handleSubmit} className="form--login form--small shadow-md">
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
        </Form>
        <div className="description text-center">
            <p>{sc.formFooterText}  <Button variant={'btn-sm btn-prim'} to="/register">Register here</Button><br/>
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
