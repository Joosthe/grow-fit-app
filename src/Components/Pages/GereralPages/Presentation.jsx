import React from 'react'
import IntroSection from '@/Components/PageSections/IntroSection'
import Presentsection from '@/Components/PageSections/Presentsection'
import Container from '@/Components/Wrappers/Container'
import { BsCheck } from 'react-icons/bs'

export default function Presentation() {
  return (
    <Container>
      <IntroSection line={'What the app can do for you'} title={'Presentation'} />
      <Presentsection imgUrl="/img/home-start.png">
        <h1>Why the grow fit app</h1>
        <p>During and after the corona time, there was/is a lot of need for sports. The grow-fit app helps you track your activities. This website does this in a fun and user-friendly way</p>
      </Presentsection>
      <Presentsection imgUrl="/img/technics.jpg" reverse={true}>
        <h1>What is the grow fit app</h1>
        <p> the grow fit app is a small csm with a React frontend and a Graphcms + Firebase + Cloadinary backend.
          The choise for the front-end was obvious. But the reason that i choose for Graphcms is that i wanted also to learn more about Graphql.
          This online platform provided both. The only downside for it was that it doesn't provide a authentication. So i used Firebase to do that.
          The other downside was that their isn't any structure in assets management. So i used Cloudinary to do that.
        </p>
      </Presentsection>
      <Presentsection imgUrl="/img/coding.jpg">
        <h1>What i learned in react</h1>
        <p>For this project their are  different techiques used in React:</p>
        <ul>
          <li> <BsCheck /> functional components + props</li>
          <li> <BsCheck /> useState </li>
          <li> <BsCheck /> Custom hooks</li>
          <li> <BsCheck /> Context</li>
          <li> <BsCheck /> React Routing system</li>
          <li> <BsCheck /> scss Modules</li>
          <li> <BsCheck /> working with Tailwind</li>
          <li> <BsCheck /> writing graphql Queries</li>
        </ul>
      </Presentsection>
    </Container>
  )
}
