import React, { useRef, useState } from 'react'
import { useAuth } from '../../../Contexts/authContext';  
import { useHistory } from 'react-router-dom';
import Button from '../../PageComponents/Buttons/Button';
import Container from '../../Wrappers/Container';
import StaticContent from'../../../StaticContent/content-En.js';
import IntroSection from '../../PageSections/IntroSection';
const sc =  StaticContent.UserPages.RegisterPage;
import ReactHtmlParser from 'react-html-parser';
import Form from '../../PageComponents/FormElements/Form';
import { useCms } from '../../../Contexts/cmsContext';
import { createUserQuery, publishCreatedUserQuery } from '../../../Queries/createUserQuery';
import { useError } from '../../../Contexts/ErrorContext';


function RegisterPage() {
  const registerEmailRef = useRef();
  const registerPasswordRef =  useRef();
  const registerConfPasswordRef =  useRef();
  const { registerUser } =  useAuth();
  const [ error, setError] = useState('');
  const [loading, setLoading] =  useState(false)
  const history = useHistory();
  const {getData} = useCms();
  const {setSuccesMessage, setErrorMessage} = useError();
  async function handleSubmit(e){
    e.preventDefault()
    if(registerPasswordRef.current.value !== registerConfPasswordRef.current.value){
      return setErrorMessage('Passwords do not match')
    }
    try{
      setError('');
      setLoading(true);
      await registerUser(
        registerEmailRef.current.value,
        registerPasswordRef.value
      )
      getData(createUserQuery(registerEmailRef.current.value)).then(
        data => {
          getData(publishCreatedUserQuery(data.createApp_User.id));
        }
      ).then(history.push ('/profile')).then(
        setSuccesMessage('you have created a new account')
      );
    }catch(err){
      console.log(err);
       setErrorMessage('failed to register a user')
    }
    setLoading(false);
  }

  return (
    <div className="page--login">
      <Container>
      <IntroSection line={ReactHtmlParser(sc.introLine)} title={sc.title}/>
      {error &&<h2>{error}</h2>}
      <section className="form--register--wrapper">
        <Form onSubmit={handleSubmit} className="form--register form--small">
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
