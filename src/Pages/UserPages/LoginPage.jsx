import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@PageComponent/Buttons/Button';
import Form from '@PageComponent/FormElements/Form';
import IntroSection from '@PageSection/IntroSection';
import Container from '@Wrapper/Container';
import { useUser } from '@/Contexts/UserContext';
import { useError } from '@/Contexts/ErrorContext';
import useStaticContent from '@/Hooks/useStaticContent';

import './styles/LoginPage.scss';

function LoginPage() {
  const sc = useStaticContent('UserPages.LoginPage')

  const history = useHistory();
  const { userLogin } = useUser();
  const [loading, setLoading] = useState(false);
  const { setErrorMessage, setSuccesMessage } = useError();

  const emailLogin = useRef();
  const passwordLogin = useRef();


  async function handleSubmit(e) {
    e.preventDefault()
    const email = emailLogin.current.value;
    const password = passwordLogin.current.value
    try {
      setLoading(true);
      const success = await userLogin(email, password);
      if (success) {
        setSuccesMessage('You are succesfully loged in');
        window.scrollTo(0, 0);
        // the set timeout is a bugfix please check it after
        setTimeout(() => {
          history.push('/profile');
        }, 500);
      } else {
        setErrorMessage('failed to sign in')
      }
    } catch (err) {
      if (err.message) {
        setErrorMessage(err.message)
      }
    }
    setLoading(false);

  }
  return (
    <div className="page--login">
      <Container>
        <IntroSection line={sc.introLine} title={sc.title} />
        <section className="form--login--wrapper">
          <Form onSubmit={handleSubmit} className="form--login form--small shadow-md">
            <div className="form-element ">
              <label htmlFor="username">E-mail</label>
              <input type="text" name="logintext" id="usernamelogin" ref={emailLogin} />
            </div>
            <div className="form-element ">
              <label htmlFor="password">Password</label>
              <input type="password" name="logintext" id="passwordlogin" ref={passwordLogin} />
            </div>
            <div className="form-element ">
              <input type="submit" name="loginsubmit" id="submitlogin" disabled={loading} className="btn btn-prim" />
            </div>
          </Form>
          <div className="description text-center">
            <p>{sc.formFooterText}  <Button variant={'btn-sm btn-prim'} to="/register">Register here</Button><br />
            </p>
          </div>
          <div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default LoginPage; 
