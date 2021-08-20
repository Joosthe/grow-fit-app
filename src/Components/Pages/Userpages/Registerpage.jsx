import React, { useRef, useState } from 'react'
import { useAuth } from '../../../Contexts/authContext';  
import { useHistory } from 'react-router-dom';
import Button from '../../PageComponents/Buttons/Button';
import Container from '../../Wrappers/Container';
import PageTitle from '../../PageSections/PageTitle';
import StaticContent from'../../../staticContent/content-En.js';
import ReactHtmlParser from 'react-html-parser';
const sc =  StaticContent.UserPages.RegisterPage;

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
       <PageTitle>{sc.title}</PageTitle>
        <p className="intro-line">
        { ReactHtmlParser( sc.introLine)}
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
        <p>{sc.formFooterText} <Button variant={'btn-sm btn-prim'} to="/login">Log in</Button><br/>
        </p>   
      </div>
      </Container>
    </div>
  )
}

export default RegisterPage
