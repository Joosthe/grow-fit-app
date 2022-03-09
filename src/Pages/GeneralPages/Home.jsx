import React from 'react'
import Jumbotron from '@PageSection/Jumbotron'
import PromotedWorkouts from '@PageSection/PromotedWorkouts'
import Testimonals from '@PageSection/Testimonials'

function Home() {

  return (
    <div className="homepage">
      <Jumbotron
        title="Get in shape with the grow fit app"
        bgimage="/img/home-start.png"
      />
      <PromotedWorkouts />
      <Testimonals />
    </div>
  )
}

export default Home
