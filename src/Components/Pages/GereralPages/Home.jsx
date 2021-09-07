import React, { useState, useEffect } from 'react'
import { CmsContext } from '../../../Contexts/cmsContext'
import Jumbotron from '../../PageSections/Jumbotron'
import Testimonals from '../../PageSections/Testimonials'

function Home() {
  const {getData} = React.useContext(CmsContext); 
  const [users, setUsers] = useState([]);
  const userQuery = `query {
    app_Users{
      id
      firstName
      lastName
      email
    }
  }`;
  useEffect(() => {
    getData(userQuery,{}).then(
      (data)=>{
        setUsers(data);
      }
    );  
  }, []);


  return (
    <div className="homepage">
      {console.log(users)}
      <Jumbotron 
      title="Get in shape with the grow fit app" 
      bgimage="/img/home-start.png"
      />
      <Testimonals/>
    </div>
  )
}

export default Home
