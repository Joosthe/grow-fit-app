import React from 'react'
import Jumbotron from '../../PageSections/Jumbotron'
import Testimonals from '../../PageSections/Testimonials'

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
