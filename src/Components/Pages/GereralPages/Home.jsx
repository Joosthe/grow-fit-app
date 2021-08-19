import React from 'react'
import Jumbotron from '../../PageComponents/Jumbotron'
import Testimonals from '../../PageComponents/Testimonials'
function Home() {

  return (
    <div className="homepage">
      <Jumbotron 
      title="Get in shape with the grow fit app" 
      bgimage="/img/home-start.png"
      />
      <Testimonals/>
    </div>
  )
}

export default Home
