import React, { useRef, useState } from 'react'  
import { useHistory } from 'react-router-dom';
import Button from '../../PageComponents/Buttons/Button';
import Container from '../../Wrappers/Container';
import IntroSection from '../../PageSections/IntroSection';
import ReactHtmlParser from 'react-html-parser';
import Form from '../../PageComponents/FormElements/Form';
import { useError } from '../../../Contexts/ErrorContext';
import useStaticContent from '../../../hooks/useStaticContent';
import {useUser} from '../../../Contexts/UserContext';

function RegisterPage() {
  const sc = useStaticContent('UserPages.RegisterPage');

  const history = useHistory();
  const { userRegister} = useUser();
  const [loading, setLoading] =  useState(false)
  const {setSuccesMessage, setErrorMessage} = useError();
  const [isDone, setIsDone] = useState(false);

  const registerEmailRef = useRef();
  const registerPasswordRef =  useRef();
  const registerConfPasswordRef =  useRef();

  async function handleSubmit(e){
    e.preventDefault()
    const password = registerPasswordRef.current.value;
    const passwordConfirm = registerConfPasswordRef.current.value;
    
    if(password !== passwordConfirm){
      return setErrorMessage('Passwords do not match')
    } 
    if(password.length <= 6 || passwordConfirm.length <= 6 ){
      return setErrorMessage('password should be longer then 6 characters')
    }
    try{
      setLoading(true);
      await userRegister(
        registerEmailRef.current.value,
        registerPasswordRef.current.value
      )
    }catch(err){
      if(err.message){
        console.log('comptest', err)
        return setErrorMessage(err.message)
      }else{
        return setErrorMessage('failed to sign in')
      }
    }

    setLoading(false);
    setSuccesMessage('you have created a new user')
    history.push('/profile');
  }
  return (
    <div className="page--login">
      <Container>
      <IntroSection line={ReactHtmlParser(sc.introLine)} title={sc.title}/>
      <section className="form--register--wrapper">
        <Form onSubmit={handleSubmit} className="form--register form--small">
          <div className="form-group" id="registeremail">
            <label>E-mail</label>
            <input type="email" ref={registerEmailRef} required/>
          </div>
          <div className="form-group" id="registerpassword">
            <label>Password</label>
            <input type="text" ref={registerPasswordRef} required/>
          </div>
          <div className="form-group" id="registerconfpassword">
            <label>Confirm password</label>
            <input type="text" ref={registerConfPasswordRef} required/>
          </div>
          <input type="submit" disabled={loading} name="registerform" id="submitregister" className="btn btn-prim" />
        </Form>
      </section>
      <div className="description text-center">
        <p>{sc.formFooterText} <Button variant={'btn-sm btn-prim'} to="/login">Log in</Button><br/>
        </p>   
      </div>
      </Container>
    </div>
  )
}

export default RegisterPage
