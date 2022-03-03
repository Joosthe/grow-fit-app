import React from 'react'
import Jumbotron from '@/Components/PageSections/Jumbotron'
import PromotedWorkouts from '@/Components/PageSections/PromotedWorkouts'
import Testimonals from '@/Components/PageSections/Testimonials'

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
