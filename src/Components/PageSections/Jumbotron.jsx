import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import './styles/jumbotron.scss';
function Jumbotron(props) {
  return (
    <section className="jumbotron">

      <div className="content-wrapper">

        <div className="content-jumbotron">
          <Fade>
            <h1 className="text-4xl font-semibold">
              {props.title}
            </h1>
            <Link to="/login">Log in now &rarr;</Link>
          </Fade>
        </div>
      </div>
      <div className="background-image">
        <picture>
          <img src={props.bgimage} alt="" />
        </picture>
      </div>

    </section>
  )
}

export default Jumbotron
