import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/LoginPage.scss';
import Container from '../../Wrappers/Container';
import Button from '../../PageComponents/Buttons/Button';
import IntroSection from '../../PageSections/IntroSection';
import Form from '../../PageComponents/FormElements/Form';
import useStaticContent from '../../../hooks/useStaticContent';
import { useUser } from '../../../Contexts/userContext';
import { useError } from '../../../Contexts/ErrorContext';


function LoginPage() {
  const sc = useStaticContent('UserPages.LoginPage');
  const {userLogin} = useUser();
  const {setErrorMessage} = useError();
  const emailLogin = useRef();
  const passwordLogin =  useRef();

  const [loading, setLoading] =  useState(false);
  const history = useHistory();
   async function handleSubmit(e){ 
    e.preventDefault()
      try{
        setLoading(true);
        await userLogin(
           emailLogin.current.value,
           passwordLogin.current.value
         )
         history.push('/profile');
      }catch(err){
        if(err.message){
          setErrorMessage(err.message)
        }else{
          setErrorMessage('failed to sign in')
        }
      } 
      setLoading(false);
   }
  return (
    <div className="page--login">
      <Container>
      <IntroSection line={sc.introLine} title={sc.title}/>
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
