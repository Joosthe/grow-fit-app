import React from 'react'
import { Link } from 'react-router-dom'
import './styles/jumbotron.scss'
function Jumbotron(props) {
  return (
    <section className="jumbotron">
      <div className="content-wrapper">
        <div className="content-jumbotron">
          <h1 className="text-4xl font-semibold">
            {props.title}
          </h1>
          <Link to="/login" className="btn btn-primary@">Log in now</Link>
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
