import React from 'react'
import { Link } from 'react-router-dom'
import './styles/addContentCard.scss'

export default function AddContentCard(props) {
  return (
    <Link to={props.to} className="card--add--content">
      <div className="card--header">
        {props.icon}
      </div>
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.descr}</p>
      </div>
    </Link>
  )
}
